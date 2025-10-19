namespace $.$$ {


	const { rem } = $mol_style_unit
	$mol_style_define( $.$eve_button, {
		// Button-specific styles
		fontFamily: 'inherit',
		fontWeight: '500',
		textDecoration: 'none',
		whiteSpace: 'nowrap',

		gap: rem( 0.5 ),
		textAlign: 'center',
		// User interaction
		userSelect: 'none',
		// WebkitTapHighlightColor: 'transparent',

		// States
		':disabled': {
			pointerEvents: 'none',
		},

		':active': {
			transform: 'scale(0.98)',
		},
	} )

}

