namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_tab, {
		minHeight: rem( 2.5 ),
		
		cursor: 'pointer',
		transition: 'all 0.2s ease-out',
		fontWeight: '500',

		'[mol_check_checked]': {
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

