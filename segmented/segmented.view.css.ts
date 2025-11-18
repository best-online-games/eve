namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented, {
		position: 'relative',

		Container: {
			display: 'grid',
			gridAutoFlow: 'column',
			gridAutoColumns: '1fr',
			position: 'relative',
			borderRadius: rem( 0.375 ),
		},

		Plate: {
			position: 'absolute',
			insetBlock: '0',
			zIndex: 0,
			transition: `left var(--eve_a_slide_duration) var(--eve_a_slide_timing_func), width var(--eve_a_slide_duration) var(--eve_a_slide_timing_func)`
		},
	} )
}
