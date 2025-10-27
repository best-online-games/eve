namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_input_logical_radio, {
		
		// Override button defaults to make it circular
		minHeight: rem( 1 ),
		width: rem( 1 ),
		height: rem( 1 ),
		padding: 0,
		margin: 0,
		flex: {
			shrink: 0,
		},
		border: {
			radius: '50%', // Circular shape
		},
		position: 'relative',

		Input: {
			// Hide native input but keep it functional for accessibility
			position: 'absolute',
			opacity: 0,
			width: 0,
			height: 0,
			margin: 0,
			padding: 0,
			pointerEvents: 'none',
		},

		Disc: {
			// Inner disc indicator (hidden by default)
			border: {
				radius: '50%',
			},
			background: {
				color: $mol_theme.back,
			},
			opacity: 0,
			transition: 'opacity 0.15s ease, transform 0.2s ease',
			width: rem( 0.375 ),
			height: rem( 0.375 ),
		},

		// Checked state: show disc with animation
		'[mol_check_checked]': {
			true: {
				Disc: {
					opacity: 1,
				},
			},
		},
		
	} )
	
}

