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
	 * Generate surface level token name with variant support
	 * Now supports all variants: solid, soft, outline, ghost
	 * @param level - Level name (e.g., 'lowest', 'low', 'medium')
	 * @param variant - Variant name (default: 'solid')
	 * @param part - Part name (default: 'bg')
	 * @param modifier - State modifier (default: 'enabled')
	 * @returns Surface level token name string
	 */
	export function $eve_surface_get_token_surface_level(
		level: $eve_surface_color,
		variant: $eve_surface_variant = 'solid',
		part: string = 'bg',
		modifier: string = 'enabled'
	): string {
		return $eve_surface_get_token_surface( level, variant, part, modifier )
	}

	/**
	 * Generate var(...) wrapped surface level token
	 * @param level - Level name (e.g., 'lowest', 'low', 'medium')
	 * @param variant - Variant name (default: 'solid')
	 * @param part - Part name (default: 'bg')
	 * @param modifier - State modifier (default: 'enabled')
	 * @returns var(...) wrapped token
	 */
	export function $eve_surface_get_token_surface_level_var(
		level: $eve_surface_color,
		variant: $eve_surface_variant = 'solid',
		part: string = 'bg',
		modifier: string = 'enabled'
	): any {
		return var_token( $eve_surface_get_token_surface_level( level, variant, part, modifier ) )
	}

	/**
	 * Generate size token name
	 * @param size - Size name (e.g., 'xs', 's', 'm', 'l', 'xl')
	 * @param property - Property name (e.g., 'height', 'padding', 'font')
	 */
	export function get_token_size( size: $eve_surface_size, property: string ): string {
		return `${ TOKEN_PREFIX }surface_size_${ size }_${ property }`
	}

	/**
	 * Generate radius token name
	 * @param size - Size name (e.g., 'xs', 'sm', 'md')
	 */
	export function get_token_radius( size: $eve_surface_size ): string {
		return `${ TOKEN_PREFIX }surface_radius_${ size }`
	}

	/**
	 * Generate border-width token name for specific size
	 * Falls back to generic border_width if size not provided
	 * @param size - Size name (e.g., 'xs', 'sm', 'md')
	 */
	export function get_token_border( size?: $eve_surface_size ): string {
		return size
			? `${ TOKEN_PREFIX }surface_size_${ size }_border`
			: `${ TOKEN_PREFIX }surface_border_width`
	}

	/**
	 * Generate generic surface token (for border, transition, etc.)
	 * @param property - Property name (e.g., 'border_width', 'transition_duration')
	 */
	export function get_token_surface_property( property: string ): string {
		return `${ TOKEN_PREFIX }surface_${ property }`
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
			// All colors (brand + surface levels) now support all variants!
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

					const style: any = {
						background: {
							color: var_token( bg_token, var_token( base_bg_token ) ),
						},
						color: var_token( text_token, var_token( base_text_token ) ),
					}

					// Only outline variant gets border color change in states
					if( variant === 'outline' ) {
						// Border uses solid variant bg color (base color)
						const border_token = $eve_surface_get_token_surface( color, 'solid', 'bg', state )
						const base_border_token = $eve_surface_get_token_surface( color, 'solid', 'bg', 'enabled' )
						style.border = {
							color: var_token( border_token, var_token( base_border_token ) ),
						}
					}
					// Note: other variants inherit border: none from base styles

					state_styles[ state ] = style
				}

				const bg_token = $eve_surface_get_token_surface( color, variant, 'bg', 'enabled' )
				const text_token = $eve_surface_get_token_surface( color, variant, 'text', 'enabled' )

				const base_styles: any = {
					background: {
						color: var_token( bg_token ),
					},
					color: var_token( text_token ),
				}

				// Only outline variant gets border, others have none
				if( variant === 'outline' ) {
					// Border uses solid variant bg color (base color)
					const border_token = $eve_surface_get_token_surface( color, 'solid', 'bg', 'enabled' )
					base_styles.border = {
						width: var_token( get_token_border() ), // Will be overridden by size-specific border
						style: 'solid',
						color: var_token( border_token ),
					}
				} else {
					// Explicitly set border to none for other variants
					base_styles.border = 'none'
				}

				variant_styles[ variant ] = {
					...base_styles,
					transition: `all ${ var_token( get_token_surface_property( 'transition_duration' ) ) } ${ var_token( get_token_surface_property( 'transition_easing' ) ) }`,

					'@': {
						// Native CSS pseudo-classes for interactive elements
						eve_surface_interactive: {
							true: {
								':hover': state_styles[ 'hovered' ] || {},
								':active': state_styles[ 'pressed' ] || {},
								':disabled': state_styles[ 'disabled' ] || {},
							},
						},
						// Programmatic states via attributes
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
					minHeight: var_token( get_token_size( 'xs', 'height' ) ),
					padding: [ 0, var_token( get_token_size( 'xs', 'padding' ) ) ],
					borderRadius: var_token( get_token_radius( 'xs' ) ),
					borderWidth: var_token( get_token_border( 'xs' ) ),
					fontSize: var_token( get_token_size( 'xs', 'font' ) ),
					gap: $mol_gap.text,
				},

				s: {
					minHeight: var_token( get_token_size( 's', 'height' ) ),
					padding: [ 0, var_token( get_token_size( 's', 'padding' ) ) ],
					borderRadius: var_token( get_token_radius( 's' ) ),
					borderWidth: var_token( get_token_border( 's' ) ),
					fontSize: var_token( get_token_size( 's', 'font' ) ),
					gap: $mol_gap.text,
				},

				m: {
					minHeight: var_token( get_token_size( 'm', 'height' ) ),
					padding: [ 0, var_token( get_token_size( 'm', 'padding' ) ) ],
					borderRadius: var_token( get_token_radius( 'm' ) ),
					borderWidth: var_token( get_token_border( 'm' ) ),
					fontSize: var_token( get_token_size( 'm', 'font' ) ),
					gap: $mol_gap.space,
				},

				l: {
					minHeight: var_token( get_token_size( 'l', 'height' ) ),
					padding: [ 0, var_token( get_token_size( 'l', 'padding' ) ) ],
					borderRadius: var_token( get_token_radius( 'l' ) ),
					borderWidth: var_token( get_token_border( 'l' ) ),
					fontSize: var_token( get_token_size( 'l', 'font' ) ),
					gap: $mol_gap.space,
				},

				xl: {
					minHeight: var_token( get_token_size( 'xl', 'height' ) ),
					padding: [ 0, var_token( get_token_size( 'xl', 'padding' ) ) ],
					borderRadius: var_token( get_token_radius( 'xl' ) ),
					borderWidth: var_token( get_token_border( 'xl' ) ),
					fontSize: var_token( get_token_size( 'xl', 'font' ) ),
					gap: $mol_gap.block,
				},
			},
		},
	} )

}

