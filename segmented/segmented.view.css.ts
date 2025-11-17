namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented, {
		padding: rem( 0.25 ),
		position: 'relative',

		Container: {
			display: 'grid',
			gridAutoFlow: 'column',
			gridAutoColumns: '1fr',
			position: 'relative',
			borderRadius: rem( 0.375 ),
			minHeight: rem( 2.5 ),
		},

		Plate: {
			position: 'absolute',
			insetBlock: '0',
			zIndex: 0,
			borderRadius: rem( 0.375 ),
			boxShadow: '0 4px 24px rgba(16, 3, 43, 0.07)',
			transition: 'left 0.3s ease, width 0.3s ease'
		},
	} )
}
