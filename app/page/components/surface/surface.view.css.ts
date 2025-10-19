namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $ds_app_page_components_surface, {


		Showcase_grid: {
			display: 'grid',
			gridTemplateColumns: `120px repeat(${ $ds_surface.STATE_MODIFIERS.length }, 1fr)`,
			gap: px( 8 ),
			// background: { color: $mol_theme.line },
			padding: px( 1 ),

		},

		Grid_empty: {
			background: { color: $mol_theme.card },
		},
		Grid_column_header: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: $mol_gap.block,
		},
		Grid_row_header: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: $mol_gap.block,
		},

		Grid_cell: {
			minHeight: rem( 8 ),
		},
	} )
}
