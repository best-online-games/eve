namespace $.$$ {

	$mol_style_define( $eve_flex, {
		'@': {
			eve_flex_direction: {
				...( $eve_flex.DIRECTIONS.reduce( ( acc, direction ) => {
					acc[ direction ] = {
						flexDirection: direction,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			eve_flex_justify_content: {
				...( $eve_flex.JUSTIFY_CONTENTS.reduce( ( acc, justifyContent ) => {
					acc[ justifyContent ] = {
						justifyContent: justifyContent,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			eve_flex_align_items: {
				...( $eve_flex.ALIGN_ITEMS.reduce( ( acc, alignItems ) => {
					acc[ alignItems ] = {
						alignItems: alignItems,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			eve_flex_wrap: {
				...( $eve_flex.WRAPS.reduce( ( acc, wrap ) => {
					acc[ wrap ] = {
						flexWrap: wrap,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
		}
	} )
}
