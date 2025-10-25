namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_radio, {
		
		gap: rem( 1 ),
		
		Circle: {
			height: rem( 1.25 ),
			width: rem( 1.25 ),
			minWidth: rem( 1.25 ),
			minHeight: rem( 1.25 ),
			border: {
				radius: '50%',
			},
			box: {
				shadow: [[ 'inset', 0, 0, 0, rem( 0.0625 ), $mol_theme.control ]],
			},
			transition: 'box-shadow 0.2s ease',
		},

		Option: {
			padding: 0,
			gap: rem( 0.5 ),
			cursor: 'pointer',
			
			':hover': {
				['Circle' as '$eve_flex']: {
					box: {
						shadow: [[ 'inset', 0, 0, 0, rem( 0.0625 ), $mol_theme.current ]],
					},
				},
			},
			
			'[mol_check_checked]': {
				true: {
					['Circle' as '$eve_flex']: {
						box: {
							shadow: [[ 'inset', 0, 0, 0, rem( 0.125 ), $mol_theme.current ]],
						},
					},
				},
			},
		},

		Circle_inner: {
			height: rem( 0.625 ),
			width: rem( 0.625 ),
			background: {
				color: $mol_theme.current,
			},
			border: {
				radius: '50%',
			},
			transition: 'all 0.2s ease',
		},
		
	} )
	
}

