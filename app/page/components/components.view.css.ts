namespace $.$$ {
	const { rem, px } = $mol_style_unit

	$mol_style_define($ds_app_page_components, {
		Showcase_grid: {
			display: 'grid',
			gridTemplateColumns: `120px repeat(${$ds_surface.STATE_MODIFIERS.length}, 1fr)`,
			gap: px(1),
			background: { color: $mol_theme.line },
			padding: px(1),
		},
		Grid_empty: {
			background: { color: $mol_theme.card },
		},
		Grid_header: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: { color: $mol_theme.card },
			font: { weight: 600 },
			padding: $mol_gap.block,
		},
		Grid_row_label: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: { color: $mol_theme.card },
			font: { weight: 600 },
			padding: $mol_gap.block,
		},
		Grid_cell: {
			minHeight: rem(8),
		},
	})
}
