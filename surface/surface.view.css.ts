namespace $.$$ {

	const { rem, px } = $mol_style_unit


	const colors = {
		primary: {
			enabled: 'oklch(70% 0.15 145deg)' as any,
			hover: 'oklch(80% 0.15 85deg)' as any,
			pressed: 'oklch(60% 0.2 20deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		secondary: {
			enabled: 'oklch(70% 0.15 145deg)' as any,
			hover: 'oklch(80% 0.15 85deg)' as any,
			pressed: 'oklch(60% 0.2 20deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		tertiary: {
			enabled: 'oklch(70% 0.15 145deg)' as any,
			hover: 'oklch(80% 0.15 85deg)' as any,
			pressed: 'oklch(60% 0.2 20deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		danger: {
			enabled: 'oklch(60% 0.2 20deg)' as any,
			hover: 'oklch(70% 0.2 330deg)' as any,
			pressed: 'oklch(80% 0.2 60deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		warning: {
			enabled: 'oklch(80% 0.15 85deg)' as any,
			hover: 'oklch(90% 0.15 85deg)' as any,
			pressed: 'oklch(100% 0.15 85deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		success: {
			enabled: 'oklch(70% 0.15 145deg)' as any,
			hover: 'oklch(80% 0.15 145deg)' as any,
			pressed: 'oklch(90% 0.15 145deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		info: {
			enabled: 'oklch(70% 0.15 145deg)' as any,
			hover: 'oklch(80% 0.15 145deg)' as any,
			pressed: 'oklch(90% 0.15 145deg)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		lowest: {
			enabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			hover: 'oklch(15% 0.02 var(--mol_theme_hue) / 0.6)' as any,
			pressed: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		low: {
			enabled: 'oklch(15% 0.02 var(--mol_theme_hue) / 0.6)' as any,
			hover: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
			pressed: 'oklch(30% 0.035 var(--mol_theme_hue) / 0.8)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		medium: {
			enabled: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
			hover: 'oklch(30% 0.035 var(--mol_theme_hue) / 0.8)' as any,
			pressed: 'oklch(35% 0.04 var(--mol_theme_hue) / 0.9)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		high: {
			enabled: 'oklch(30% 0.035 var(--mol_theme_hue) / 0.8)' as any,
			hover: 'oklch(35% 0.04 var(--mol_theme_hue) / 0.9)' as any,
			pressed: 'oklch(40% 0.045 var(--mol_theme_hue) / 1)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
		highest: {
			enabled: 'oklch(35% 0.04 var(--mol_theme_hue) / 0.9)' as any,
			hover: 'oklch(40% 0.045 var(--mol_theme_hue) / 1)' as any,
			pressed: 'oklch(45% 0.05 var(--mol_theme_hue) / 1.1)' as any,
			disabled: 'oklch(10% 0.015 var(--mol_theme_hue) / 0.5)' as any,
			loading: 'oklch(25% 0.03 var(--mol_theme_hue) / 0.7)' as any,
		},
	} as const


	$mol_style_define( $ds_surface, {

		// Colors - Primary (default)
		'@': {
			ds_surface_interactive: {
				true: {
					cursor: 'pointer',
					userSelect: 'none',
				},
			},

			ds_surface_color: {
				// Semantic colors
				...( Object.fromEntries(
					Object.keys( colors ).map( color => {
						return [
							color, {
								background: {
									color: colors[ color as keyof typeof colors ].enabled,
								},
								color: $mol_theme.text,
								'@': {
									ds_surface_interactive: {
										true: {
											':hover': {
												background: {
													color: colors[ color as keyof typeof colors ].hover,
												},
											},
											':active': {
												background: {
													color: colors[ color as keyof typeof colors ].pressed,
												},
											},
											':disabled': {
												background: {
													color: colors[ color as keyof typeof colors ].disabled,
												},
											},
											ds_surface_loading: {
												background: {
													color: colors[ color as keyof typeof colors ].loading,
												},
											}
										},
									},
								}
							},
						]
					} ) ) ) as any,
			},


			// Sizes
			ds_surface_size: {
				xs: {
					minHeight: rem( 1.25 ),
					minWidth: rem( 1.25 ),
					borderRadius: rem( 0.25 ),
				},

				sm: {
					minHeight: rem( 1.5 ),
					minWidth: rem( 1.5 ),
					borderRadius: rem( 0.25 ),
				},

				md: {
					minHeight: rem( 2 ),
					minWidth: rem( 2 ),
					borderRadius: rem( 0.25 ),
				},

				lg: {
					minHeight: rem( 2.5 ),
					minWidth: rem( 2.5 ),
					borderRadius: rem( 0.25 ),
				},

				xl: {
					minHeight: rem( 3 ),
					minWidth: rem( 3 ),
					borderRadius: rem( 0.25 ),
				},
			},
		},
	} )

}

