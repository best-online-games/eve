namespace $.$$ {

	$mol_style_define( $ds_flex, {
		'@': {
			ds_flex_direction: {
				...( $ds_flex.DIRECTIONS.reduce( ( acc, direction ) => {
					acc[ direction ] = {
						flexDirection: direction,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			ds_flex_justify_content: {
				...( $ds_flex.JUSTIFY_CONTENTS.reduce( ( acc, justifyContent ) => {
					acc[ justifyContent ] = {
						justifyContent: justifyContent,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			ds_flex_align_items: {
				...( $ds_flex.ALIGN_ITEMS.reduce( ( acc, alignItems ) => {
					acc[ alignItems ] = {
						alignItems: alignItems,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
			ds_flex_wrap: {
				...( $ds_flex.WRAPS.reduce( ( acc, wrap ) => {
					acc[ wrap ] = {
						flexWrap: wrap,
					}
					return acc
				}, {} as Record<string, any> ) ),
			},
		}
	} )
}
