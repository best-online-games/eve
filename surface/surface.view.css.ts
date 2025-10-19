namespace $.$$ {

	const { rem } = $mol_style_unit

	/**
	 * Surface styling system using CSS custom properties from theme.css
	 * 
	 * Theme variables follow the pattern:
	 * --ds_surface_{color}_{variant}_{part}_{modifier}
	 * 
	 * Examples:
	 * - --ds_surface_primary_solid_bg_enabled
	 * - --ds_surface_primary_solid_bg_hovered
	 * - --ds_surface_primary_solid_text_disabled
	 */

	/** Design system token prefix */
	const TOKEN_PREFIX = '--ds_'

	/**
	 * Generate token name for any design system component
	 * @param component - Component namespace (e.g., 'surface', 'button')
	 * @param color - Color name (e.g., 'primary', 'danger')
	 * @param variant - Variant name (e.g., 'solid', 'outline')
	 * @param part - Part name (e.g., 'bg', 'text', 'border')
	 * @param modifier - State modifier (e.g., 'enabled', 'hovered', 'pressed', 'disabled')
	 * @returns Token name string
	 */
	function getToken(
		component: string,
		color: string,
		variant: string,
		part: string,
		modifier: string = 'enabled'
	): string {
		return `${ TOKEN_PREFIX }${ component }_${ color }_${ variant }_${ part }_${ modifier }`
	}

	/**
	 * Generate surface token name (shorthand for getToken with component='surface')
	 * @param color - Color name (e.g., 'primary', 'danger')
	 * @param variant - Variant name (e.g., 'solid', 'outline')
	 * @param part - Part name (e.g., 'bg', 'text')
	 * @param modifier - State modifier (default: 'enabled')
	 * @returns Surface token name string
	 */
	function getTokenSurface(
		color: string,
		variant: string,
		part: string,
		modifier: string = 'enabled'
	): string {
		return getToken( 'surface', color, variant, part, modifier )
	}

	/**
	 * Generate surface level token name (simpler structure without variant)
	 * @param level - Level name (e.g., 'lowest', 'low', 'medium')
	 * @param modifier - State modifier (default: 'enabled')
	 * @returns Surface level token name string
	 */
	function getTokenSurfaceLevel(
		level: string,
		modifier: string = 'enabled'
	): string {
		return `${ TOKEN_PREFIX }surface_${ level }_bg_${ modifier }`
	}

	/**
	 * Wrap token in CSS var() with optional fallback
	 */
	function varToken( token: string, fallback?: string ): string {
		return fallback ? `var(${ token }, ${ fallback })` : `var(${ token })`
	}

	// Helper to generate color + variant + state styles
	function generateSurfaceStyles() {
		const colors = $ds_surface.COLORS
		const variants = $ds_surface.VARIANTS
		const states = $ds_surface.STATE_MODIFIERS

		const colorStyles: any = {}

		for( const color of colors ) {
			// Surface levels (lowest, low, medium, high, highest) have simpler structure
			// Tokens: --ds_surface_{level}_bg_{modifier}
			if( $ds_surface.COLORS_SURFACE_LEVELS.includes( color as any ) ) {
				const levelStates: any = {}

				for( const state of states ) {
					if( state === 'enabled' ) {
						continue
					}

					const bgToken = getTokenSurfaceLevel( color, state )
					const baseBgToken = getTokenSurfaceLevel( color, 'enabled' )

					levelStates[ state ] = {
						background: {
							color: varToken( bgToken, varToken( baseBgToken ) ),
						},
					}
				}

				colorStyles[ color ] = {
					background: {
						color: varToken( getTokenSurfaceLevel( color, 'enabled' ) ),
					},
					'@': {
						ds_surface_state: levelStates,
					},
				}
				continue
			}

			const variantStyles: any = {}

			for( const variant of variants ) {
				const stateStyles: any = {}

				for( const state of states ) {
					if( state === 'enabled' ) {
						// Enabled is the base state, handled outside
						continue
					}

					const bgToken = getTokenSurface( color, variant, 'bg', state )
					const textToken = getTokenSurface( color, variant, 'text', state )
					const baseBgToken = getTokenSurface( color, variant, 'bg', 'enabled' )
					const baseTextToken = getTokenSurface( color, variant, 'text', 'enabled' )

					stateStyles[ state ] = {
						background: {
							color: varToken( bgToken, varToken( baseBgToken ) ),
						},
						color: varToken( textToken, varToken( baseTextToken ) ),
						// Border follows text color for outline, transparent for others
						border: {
							color: variant === 'outline'
								? varToken( textToken, varToken( baseTextToken ) )
								: 'transparent',
						},
					}
				}

				const bgToken = getTokenSurface( color, variant, 'bg', 'enabled' )
				const textToken = getTokenSurface( color, variant, 'text', 'enabled' )

				variantStyles[ variant ] = {
					background: {
						color: varToken( bgToken ),
					},
					color: varToken( textToken ),
					border: {
						width: `var(--ds_surface_border_width)`,
						style: 'solid',
						// Border color: outline uses text color, others are transparent
						color: variant === 'outline'
							? varToken( textToken )
							: 'transparent',
					},
					transition: `all var(--ds_surface_transition_duration) var(--ds_surface_transition_easing)`,

					'@': {
						ds_surface_state: stateStyles,
					},
				}
			}

			colorStyles[ color ] = {
				'@': {
					ds_surface_variant: variantStyles,
				},
			}
		}

		return colorStyles
	}

	$mol_style_define( $ds_surface, {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		outline: 'none',

		// Focus-visible ring
		':focus-visible': {
			boxShadow: `0 0 0 2px var(--mol_theme_focus)`,
		},

		'@': {
			// Interactive surfaces get pointer cursor
			ds_surface_interactive: {
				true: {
					cursor: 'pointer',
					userSelect: 'none',
				},
			},

			// Color + Variant combinations
			ds_surface_color: generateSurfaceStyles(),

			// Size presets
			ds_surface_size: {
				xs: {
					minHeight: `var(--ds_surface_size_xs_height)`,
					padding: [ 0, `var(--ds_surface_size_xs_padding)` ],
					borderRadius: `var(--ds_surface_radius_xs)`,
					fontSize: `var(--ds_surface_size_xs_font)`,
					gap: $mol_gap.text,
				},

				sm: {
					minHeight: `var(--ds_surface_size_sm_height)`,
					padding: [ 0, `var(--ds_surface_size_sm_padding)` ],
					borderRadius: `var(--ds_surface_radius_sm)`,
					fontSize: `var(--ds_surface_size_sm_font)`,
					gap: $mol_gap.text,
				},

				md: {
					minHeight: `var(--ds_surface_size_md_height)`,
					padding: [ 0, `var(--ds_surface_size_md_padding)` ],
					borderRadius: `var(--ds_surface_radius_md)`,
					fontSize: `var(--ds_surface_size_md_font)`,
					gap: $mol_gap.space,
				},

				lg: {
					minHeight: `var(--ds_surface_size_lg_height)`,
					padding: [ 0, `var(--ds_surface_size_lg_padding)` ],
					borderRadius: `var(--ds_surface_radius_lg)`,
					fontSize: `var(--ds_surface_size_lg_font)`,
					gap: $mol_gap.space,
				},

				xl: {
					minHeight: `var(--ds_surface_size_xl_height)`,
					padding: [ 0, `var(--ds_surface_size_xl_padding)` ],
					borderRadius: `var(--ds_surface_radius_xl)`,
					fontSize: `var(--ds_surface_size_xl_font)`,
					gap: $mol_gap.block,
				},
			},
		},
	} )

}

