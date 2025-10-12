namespace $.$$ {
	const { rem, px } = $mol_style_unit
	
	$mol_style_define($ds_themer_page_themer_colors, {
		Controls: {
			flex: {
				basis: rem(25),
				shrink: 0,
			},
			border: {
				right: {
					width: px(1),
					style: 'solid',
					color: $mol_theme.line,
				},
			},
		},

		Controls_inner: {
			padding: $mol_gap.block,
			gap: $mol_gap.block,
		},

		Controls_title: {
			padding: $mol_gap.block,
			fontSize: rem(1.25),
			fontWeight: 'bold',
		},

		Backgrounds_section: {
			gap: $mol_gap.block,
		},

		Backgrounds_title: {
			padding: $mol_gap.text,
			fontSize: rem(1.1),
			fontWeight: '600',
		},

		Text_section: {
			gap: $mol_gap.block,
		},

		Text_title: {
			padding: $mol_gap.text,
			fontSize: rem(1.1),
			fontWeight: '600',
		},

		Controls_section: {
			gap: $mol_gap.block,
		},

		Controls_section_title: {
			padding: $mol_gap.text,
			fontSize: rem(1.1),
			fontWeight: '600',
		},

		Preview: {
			flex: {
				grow: 1,
			},
			background: {
				color: $mol_theme.back,
			},
		},
	})
}
