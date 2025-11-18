namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented, {

		// TODO потом доверстать
		padding: '0rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		Options_container: {
			height: 'calc(100% - 0.375rem)' as any,
			width: 'calc(100% - 0.375rem)' as any,
			position: 'relative',
		},
		Segment: {
			height: '100%',
		},
		Plate: {
			position: 'absolute',
			margin: '0.375rem',
			inset: '0',
			zIndex: 0,
			transition: `left var(--eve_a_slide_duration) var(--eve_a_slide_timing_func), width var(--eve_a_slide_duration) var(--eve_a_slide_timing_func)`
		},
	} )
}
