namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_tab_container, {
		flex: {
			grow: 1,
		},
		display: 'flex',
		flexDirection: 'column',

		Tabs: {
			flex: {
				shrink: 0,
			},
		},

		Content: {
			flex: {
				grow: 1,
			},
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		},
	} )
}

