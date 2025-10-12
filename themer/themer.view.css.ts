namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $ds_themer, {

		Content: {
			flex: {
				grow: 1,
				wrap: 'wrap',
			},
			alignItems: 'stretch',
		},

		Controls: {
			flex: {
				basis: rem(20),
				shrink: 0,
			},
			padding: $mol_gap.block,
			gap: $mol_gap.block,
		},

		Preview: {
			flex: {
				grow: 1,
				basis: rem(30),
			},
			padding: $mol_gap.block,
			gap: $mol_gap.block,
		},

		Preview_title: {
			padding: $mol_gap.block,
		},

		Colors_demo: {
			gap: $mol_gap.block,
		},

		Components_demo: {
			gap: $mol_gap.block,
			padding: $mol_gap.block,
		},

	} )

	$mol_style_define( $ds_themer_case, {
		
		margin: {
			top: $mol_gap.block,
		},

		Card: {
			background: {
				color: $mol_theme.card,
			},
			padding: $mol_gap.block,
			gap: $mol_gap.block,
		},

	} )

}
