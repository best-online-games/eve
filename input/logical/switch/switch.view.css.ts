namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_input_logical_switch, {
		boxSizing: 'border-box',
		// Fixed size switch: 2rem × 1rem
		minHeight: rem( 1 ),
		width: rem( 2 ),
		height: rem( 1 ),
		padding: rem( 0.125 ),
		
		flex: { shrink: 0 },
		border: { radius: rem( 0.5 ) },
		
		// transition: 'all 0.5s ease',

		// Slider (inner circle)
		Slider: {
			background: { color: 'currentcolor' },
			border: { radius: '50%' },
			
			// Animation for smooth movement
			// transition: 'all 0.5s ease',
			
			// Size
			width: rem( 0.75 ),
			height: rem( 0.75 ),
		},
		
	} )
	
}

