namespace $.$$ {

	$mol_style_define( $eve_button, {
		// Button-specific styles
		fontFamily: 'inherit',
		fontWeight: '500',
		textAlign: 'center',
		textDecoration: 'none',
		whiteSpace: 'nowrap',

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

