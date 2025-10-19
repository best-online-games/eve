namespace $.$$ {
	const { rem, px, vh } = $mol_style_unit

	$mol_style_define( $ds_app_page_sb_playground, {

		Live_component_container: {
			minHeight: '100%',
			height: vh( 30 ),
			maxHeight: vh( 80 ),
			width: vh( 30 ),
			maxWidth: vh( 80 ),
		},

		Editor_body: {
			maxWidth: vh( 80 ),
			width: 'fit-content',
			height: vh( 30 ),
			maxHeight: vh( 80 ),
			padding: {
				left: rem( 0.5 ),
				right: rem( 1 ),
			}
		},

		Source_text: {
			width: '100%',
		}
	} )
}

