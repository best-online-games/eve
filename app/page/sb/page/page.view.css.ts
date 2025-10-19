namespace $.$$ {
	const { rem, px, vh } = $mol_style_unit

	$mol_style_define( $ds_app_page_sb_page, {
		flexGrow: '1',
		// [mol_book2] > *
		boxShadow: 'none !important',
		Head: {
			background: {
				color: $ds_surface_get_token_surface_level_var( 'low' ) as any,
			},
			boxShadow: 'none',
		},
		Body: {
			boxShadow: 'none',
		},
		Body_content: {
			boxShadow: 'none',
			paddingTop: px( 0 ),
		}
	} )
}
