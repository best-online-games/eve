namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented, {
		padding: rem( 0.25 ),
		position: 'relative',
		borderRadius: rem( 0.5 ),

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
			top: 0,
			bottom: 0,
			zIndex: 0,
			borderRadius: rem( 0.375 ),
			boxShadow: '0 4px 24px rgba(16, 3, 43, 0.07)',
			transition: 'left 0.3s ease, width 0.3s ease',
			// Width and left position set via CSS variables and calc in TypeScript
			width: 'calc(100% / var(--eve-segment-count))' as any,
			left: 'calc(var(--eve-segment-index) * (100% / var(--eve-segment-count)))' as any,
		},
	} )

	$mol_style_define( $eve_segmented_option, {
		position: 'relative',
		zIndex: 1,
		padding: {
			left: rem( 0.75 ),
			right: rem( 1.5 ),
		},
		borderRadius: rem( 0.375 ),
		textAlign: 'center',
		cursor: 'pointer',
		userSelect: 'none',
		transition: 'none',
	} )
}
