namespace $.$$ {

	const { rem, px } = $mol_style_unit

	// Базовые цвета RGB для каждой семантической роли
	// Пока так пусть, потом автоматизируем и поправим на математические формулы
	const colorBase = {
		primary: '99 102 241',      // Indigo
		secondary: '139 92 246',    // Purple  
		tertiary: '236 72 153',     // Pink
		danger: '239 68 68',        // Red
		warning: '251 146 60',      // Orange
		success: '34 197 94',       // Green
		info: '59 130 246',         // Blue
		// Нейтральные уровни
		lowest: '23 23 23',         // Very dark
		low: '38 38 38',
		medium: '64 64 64',
		high: '115 115 115',
		highest: '163 163 163',
	} as const

	// Генератор цветов по состояниям
	const colors = Object.fromEntries(
		Object.entries(colorBase).map(([name, rgb]) => [
			name,
			{
				enabled: `rgb(${rgb})` as any,
				hover: `rgb(${rgb} / 0.8)` as any,
				pressed: `rgb(${rgb} / 0.6)` as any,
				disabled: `rgb(${rgb} / 0.3)` as any,
				loading: `rgb(${rgb} / 0.5)` as any,
			}
		])
	) as Record<keyof typeof colorBase, {
		enabled: any
		hover: any
		pressed: any
		disabled: any
		loading: any
	}>


	// Генератор стилей для комбинаций цвет × состояние
	function generateColorStateStyles() {
		const styles: any = {}
		
		for (const [colorName, colorStates] of Object.entries(colors)) {
			const stateStyles: any = {}
			
			for (const [stateName, stateColor] of Object.entries(colorStates)) {
				stateStyles[stateName] = {
					background: { color: stateColor },
				}
			}
			
			styles[colorName] = {
				background: { color: colorStates.enabled },
				color: $mol_theme.text,
				
				'@': {
					ds_surface_state: stateStyles,
				}
			}
		}
		
		return styles
	}

	$mol_style_define( $ds_surface, {

		'@': {
			ds_surface_interactive: {
				true: {
					cursor: 'pointer',
					userSelect: 'none',
				},
			},

			ds_surface_color: generateColorStateStyles(),

			// Sizes
			ds_surface_size: {
				xs: {
					minHeight: rem( 1.25 ),
					minWidth: rem( 1.25 ),
					borderRadius: rem( 0.25 ),
					padding: $mol_gap.text,
				},

				sm: {
					minHeight: rem( 1.5 ),
					minWidth: rem( 1.5 ),
					borderRadius: rem( 0.375 ),
					padding: $mol_gap.space,
				},

				md: {
					minHeight: rem( 2 ),
					minWidth: rem( 2 ),
					borderRadius: $mol_gap.round,
					padding: $mol_gap.block,
				},

				lg: {
					minHeight: rem( 2.5 ),
					minWidth: rem( 2.5 ),
					borderRadius: rem( 0.75 ),
					padding: rem( 1 ),
				},

				xl: {
					minHeight: rem( 3 ),
					minWidth: rem( 3 ),
					borderRadius: rem( 1 ),
					padding: rem( 1.5 ),
				},
			},
		},
	} )

}

