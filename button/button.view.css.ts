namespace $.$$ {

	const { rem } = $mol_style_unit

	// Use token helpers from surface namespace
	const get_token_size = $.$$.get_token_size
	const var_token = $.$$.var_token

	$mol_style_define( $.$eve_button, {
		// Button-specific styles
		fontFamily: 'inherit',
		fontWeight: '500',
		textDecoration: 'none',
		whiteSpace: 'nowrap',


		textAlign: 'center',
		// User interaction
		userSelect: 'none',
		// WebkitTapHighlightColor: 'transparent',

		// States
		':disabled': {
			pointerEvents: 'none',
		},


		// Подумать над тем, чтобы вынести
		'@': {
			eve_surface_size: {
				xs: {
					padding: [ 0, var_token( get_token_size( 'xs', 'padding' ) ) ],
					gap: rem( 0.25 ),
				},
				s: {
					padding: [ 0, var_token( get_token_size( 's', 'padding' ) ) ],
					gap: rem( 0.25 ),
				},
				m: {
					padding: [ 0, var_token( get_token_size( 'm', 'padding' ) ) ],
					gap: rem( 0.5 ),
				},
				l: {
					padding: [ 0, var_token( get_token_size( 'l', 'padding' ) ) ],
					gap: rem( 0.5 ),
				},
				xl: {
					padding: [ 0, var_token( get_token_size( 'xl', 'padding' ) ) ],
					gap: rem( 0.5 ),
				},
			},
		} as any,
	} )

}

