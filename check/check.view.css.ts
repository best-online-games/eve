namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_check, {
		
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: rem( 0.5 ),
		cursor: 'pointer',
		userSelect: 'none',
		
		Box: {
			height: rem( 1.25 ),
			width: rem( 1.25 ),
			minWidth: rem( 1.25 ),
			minHeight: rem( 1.25 ),
			border: {
				radius: rem( 0.25 ),
			},
			box: {
				shadow: [[ 'inset', 0, 0, 0, rem( 0.0625 ), $mol_theme.control ]],
			},
			transition: 'all 0.2s ease',
			background: {
				color: 'transparent',
			},
		},

		Icon: {
			width: rem( 0.875 ),
			height: rem( 0.875 ),
			opacity: 0,
			transition: 'opacity 0.2s ease',
			color: $mol_theme.back,
		},

		':hover': {
			Box: {
				box: {
					shadow: [[ 'inset', 0, 0, 0, rem( 0.0625 ), $mol_theme.current ]],
				},
			},
		},

		'[mol_check_checked]': {
			true: {
				Box: {
					background: {
						color: $mol_theme.current,
					},
					box: {
						shadow: [[ 'inset', 0, 0, 0, rem( 0.125 ), $mol_theme.current ]],
					},
				},
				Icon: {
					opacity: 1,
				},
			},
		},
		
	} )
	
}

