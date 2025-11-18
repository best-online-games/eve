namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_tab, {

		cursor: 'pointer',
		transition: 'all 0.2s ease-out',

		[ $eve_selection_attr ]: {
			true: {
				borderBottom: {
					width: rem( 0.125 ),
					style: 'solid',
					color: 'currentcolor',
				} as any
			},
		},
	} )
}

