namespace $.$$ {

	const { rem } = $mol_style_unit

	// Use token helpers from surface namespace
	const get_token_size = $.$$.get_token_size
	const var_token = $.$$.var_token

	$mol_style_define( $.$eve_button, {
		// Button-specific styles
		whiteSpace: 'nowrap',

		userSelect: 'none',

		':disabled': {
			pointerEvents: 'none',
		},
	} )

}

