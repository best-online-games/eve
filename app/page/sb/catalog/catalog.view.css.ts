namespace $.$$ {
	const { px } = $mol_style_unit

	$mol_style_define( $eve_app_page_sb_catalog, {
		Menu: {
			Body: {
				background: {
					color: $eve_surface_get_token_surface_level_var( 'low' ) as any,
				},
				boxShadow: 'none',
			},
			Head: {
				boxShadow: 'none',
				background: {
					color: $eve_surface_get_token_surface_level_var( 'low' ) as any,
				},
				// TODO: так и не понял, как сбить в tree Head
				display: 'none',
			}
		},

	} )
}
