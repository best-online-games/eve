namespace $.$$ {

	const { rem } = $mol_style_unit

	/**
	 * Surface styling system using CSS custom properties from theme.css
	 * 
	 * Theme variables follow the pattern:
	 * --eve_surface_{color}_{variant}_{part}_{modifier}
	 * 
	 * Examples:
	 * - --eve_surface_primary_solid_bg_enabled
	 * - --eve_surface_primary_solid_bg_hovered
	 * - --eve_surface_primary_solid_text_disabled
	 */

	/** Design system token prefix */
	const TOKEN_PREFIX = '--eve_'

	/**
	 * Generate token name for any design system component
	 * @param component - Component namespace (e.g., 'surface', 'button')
	 * @param color - Color name (e.g., 'primary', 'danger')
	 * @param variant - Variant name (e.g., 'solid', 'outline')
	 * @param part - Part name (e.g., 'bg', 'text', 'border')
	 * @param modifier - State modifier (e.g., 'enabled', 'hovered', 'pressed', 'disabled')
	 * @returns Token name string
	 */
	export function get_token(
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
	export function $eve_surface_get_token_surface(
		color: string,
		variant: string,
		part: string,
		modifier: string = 'enabled'
	): string {
		return get_token( 'surface', color, variant, part, modifier )
	}

	/**
	 * Generate surface level token name (simpler structure without variant)
	 * @param level - Level name (e.g., 'lowest', 'low', 'medium')
	 * @param modifier - State modifier (default: 'enabled')
	 * @returns Surface level token name string
	 */
	export function $eve_surface_get_token_surface_level(
		level: string,
		modifier: string = 'enabled'
	): string {
		return $eve_surface_get_token_surface( level, 'solid', 'bg', modifier )
	}

	export const $eve_surface_get_token_surface_level_var: typeof $eve_surface_get_token_surface_level = ( level, modifier ) => {
		return var_token( $eve_surface_get_token_surface_level( level, modifier ) )
	}
	/**
	 * Wrap token in CSS var() with optional fallback
	 */
	export function var_token( token: string, fallback?: string ): string {
		return fallback ? `var(${ token }, ${ fallback })` : `var(${ token })`
	}

	// Helper to generate color + variant + state styles
	function generate_surface_styles() {
		const colors = $eve_surface.COLORS
		const variants = $eve_surface.VARIANTS
		const states = $eve_surface.STATE_MODIFIERS

		const colorStyles: any = {}

		for( const color of colors ) {
			// Surface levels (lowest, low, medium, high, highest) have simpler structure
			// Tokens: --eve_surface_{level}_bg_{modifier}
			if( $eve_surface.COLORS_SURFACE_LEVELS.includes( color as any ) ) {
				const levelStates: any = {}

				for( const state of states ) {
					if( state === 'enabled' ) {
						continue
					}

					const bgToken = $eve_surface_get_token_surface_level( color, state )
					const baseBgToken = $eve_surface_get_token_surface_level( color )

					levelStates[ state ] = {
						background: {
							color: var_token( bgToken, var_token( baseBgToken ) ),
						},
					}
				}

				colorStyles[ color ] = {
					background: {
						color: var_token( $eve_surface_get_token_surface_level( color ) ),
					},
					'@': {
						eve_surface_state: levelStates,
					},
				}
				continue
			}

			const variant_styles: any = {}

			for( const variant of variants ) {
				const state_styles: any = {}

				for( const state of states ) {
					if( state === 'enabled' ) {
						// Enabled is the base state, handled outside
						continue
					}

					const bg_token = $eve_surface_get_token_surface( color, variant, 'bg', state )
					const text_token = $eve_surface_get_token_surface( color, variant, 'text', state )
					const base_bg_token = $eve_surface_get_token_surface( color, variant, 'bg', 'enabled' )
					const base_text_token = $eve_surface_get_token_surface( color, variant, 'text', 'enabled' )

					state_styles[ state ] = {
						background: {
							color: var_token( bg_token, var_token( base_bg_token ) ),
						},
						color: var_token( text_token, var_token( base_text_token ) ),
						// Border follows text color for outline, transparent for others
						border: {
							color: variant === 'outline'
								? var_token( text_token, var_token( base_text_token ) )
								: 'transparent',
						},
					}
				}

				const bg_token = $eve_surface_get_token_surface( color, variant, 'bg', 'enabled' )
				const text_token = $eve_surface_get_token_surface( color, variant, 'text', 'enabled' )

				variant_styles[ variant ] = {
					background: {
						color: var_token( bg_token ),
					},
					color: var_token( text_token ),
					border: {
						width: `var(--eve_surface_border_width)`,
						style: 'solid',
						// Border color: outline uses text color, others are transparent
						color: variant === 'outline'
							? var_token( text_token )
							: 'transparent',
					},
					transition: `all var(--eve_surface_transition_duration) var(--eve_surface_transition_easing)`,

					'@': {
						eve_surface_state: state_styles,
					},
				}
			}

			colorStyles[ color ] = {
				'@': {
					eve_surface_variant: variant_styles,
				},
			}
		}

		return colorStyles
	}

	$mol_style_define( $eve_surface, {
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
			eve_surface_interactive: {
				true: {
					cursor: 'pointer',
					userSelect: 'none',
				},
			},

			// Color + Variant combinations
			eve_surface_color: generate_surface_styles(),

			// Size presets
			eve_surface_size: {
				xs: {
					minHeight: `var(--eve_surface_size_xs_height)`,
					padding: [ 0, `var(--eve_surface_size_xs_padding)` ],
					borderRadius: `var(--eve_surface_radius_xs)`,
					fontSize: `var(--eve_surface_size_xs_font)`,
					gap: $mol_gap.text,
				},

				s: {
					minHeight: `var(--eve_surface_size_sm_height)`,
					padding: [ 0, `var(--eve_surface_size_sm_padding)` ],
					borderRadius: `var(--eve_surface_radius_sm)`,
					fontSize: `var(--eve_surface_size_sm_font)`,
					gap: $mol_gap.text,
				},

				m: {
					minHeight: `var(--eve_surface_size_md_height)`,
					padding: [ 0, `var(--eve_surface_size_md_padding)` ],
					borderRadius: `var(--eve_surface_radius_md)`,
					fontSize: `var(--eve_surface_size_md_font)`,
					gap: $mol_gap.space,
				},

				l: {
					minHeight: `var(--eve_surface_size_lg_height)`,
					padding: [ 0, `var(--eve_surface_size_lg_padding)` ],
					borderRadius: `var(--eve_surface_radius_lg)`,
					fontSize: `var(--eve_surface_size_lg_font)`,
					gap: $mol_gap.space,
				},

				xl: {
					minHeight: `var(--eve_surface_size_xl_height)`,
					padding: [ 0, `var(--eve_surface_size_xl_padding)` ],
					borderRadius: `var(--eve_surface_radius_xl)`,
					fontSize: `var(--eve_surface_size_xl_font)`,
					gap: $mol_gap.block,
				},
			},
		},
	} )

}

