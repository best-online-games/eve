namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented_option, {
		position: 'relative',
		zIndex: 1,
		padding: {
			top: rem( 0.375 ),
			bottom: rem( 0.375 ),
			left: rem( 0.75 ),
			right: rem( 0.75 ),
		},
		borderRadius: rem( 0.375 ),
		cursor: 'pointer',
		userSelect: 'none',
		textAlign: 'center',
		transition: 'none', // Disable transitions for instant color change
	} )
}

