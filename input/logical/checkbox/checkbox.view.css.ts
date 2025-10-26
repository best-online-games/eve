namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_input_logical_checkbox, {
		
		// Override button defaults to make it square
		minHeight: rem( 1 ),
		width: rem( 1 ),
		height: rem( 1 ),
		padding: 0,
		flex: {
			shrink: 0,
		},
		border: {
			radius: rem( 0.25 ),
		},

		Icon: {
			// Icon is hidden by default
			visibility: 'hidden',
			opacity: 0,
			transition: 'opacity 0.15s ease, transform 0.2s ease',
			transform: 'translateY(-0.125rem)',
			width: rem( 0.625 ),
			height: rem( 0.625 ),
			// Color is inherited from eve_surface text color token
		},

		// Checked state: show icon with animation
		'[mol_check_checked]': {
			true: {
				Icon: {
					visibility: 'visible',
					opacity: 1,
					transform: 'translateY(0)',
				},
			},
		},
		
	} )
	
}

