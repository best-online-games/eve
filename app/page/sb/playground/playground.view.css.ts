namespace $.$$ {
	const { rem, px, vh } = $mol_style_unit

	$mol_style_define( $eve_app_page_sb_playground, {
		flex: {
			grow: 1,
		},

		Demo_page: {
			flex: {
				basis: rem( 30 ),
			},
		},

		Code_page: {
			flex: {
				basis: rem( 40 ),
			},
		},

		Live_component_container: {
			maxWidth: '100%',
			minHeight: vh( 50),
			maxHeight: vh( 50),
			flex: {
				grow: 1,
			},
		},

		Editor_body: {
			flex: {
				grow: 1,
			},
			padding: rem( 1 ),
		},

		Source_text: {
			width: '100%',
			flex: {
				grow: 1,
			},
			fontFamily: 'monospace',
		},

		Source_tree: {
			flex: {
				grow: 1,
			},
		},
	} )
}

