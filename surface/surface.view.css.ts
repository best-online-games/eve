namespace $.$$ {

	const { rem } = $mol_style_unit

	/**
	 * Surface styling system using CSS custom properties from theme.css
	 * 
	 * Theme variables follow the pattern:
	 * --ds_surface_{color}_{variant}_{property}
	 * --ds_surface_{color}_{variant}_{state}_{property}
	 */

	// Helper to generate color + variant + state styles
	function generateSurfaceStyles() {
		const colors = $ds_surface.COLORS
		const variants = $ds_surface.VARIANTS
		const states = $ds_surface.STATE_MODIFIERS

		const colorStyles: any = {}

		for( const color of colors ) {
			// Skip surface levels (lowest, low, medium, high, highest) - they're for non-interactive backgrounds
			if( [ 'lowest', 'low', 'medium', 'high', 'highest' ].includes( color ) ) {
				colorStyles[ color ] = {
					background: {
						color: `var(--ds_surface_${ color }_bg)`,
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

					const suffix = state === 'disabled' ? 'disabled' : `${ state }`

					stateStyles[ state ] = {
						background: {
							color: `var(--ds_surface_${ color }_${ variant }_${ suffix }_bg, var(--ds_surface_${ color }_${ variant }_bg))`,
						},
						color: `var(--ds_surface_${ color }_${ variant }_${ suffix }_text, var(--ds_surface_${ color }_${ variant }_text))`,
						// Border follows text color for outline, transparent for others
						border: {
							color: variant === 'outline'
								? `var(--ds_surface_${ color }_${ variant }_${ suffix }_text, var(--ds_surface_${ color }_${ variant }_text))`
								: 'transparent',
						},
					}
				}

				variantStyles[ variant ] = {
					background: {
						color: `var(--ds_surface_${ color }_${ variant }_bg)`,
					},
					color: `var(--ds_surface_${ color }_${ variant }_text)`,
					border: {
						width: `var(--ds_surface_border_width)`,
						style: 'solid',
						// Border color: outline uses text color, others are transparent
						color: variant === 'outline'
							? `var(--ds_surface_${ color }_${ variant }_text)`
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

