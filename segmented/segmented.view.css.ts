namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_segmented, {
		padding: rem( 0.25 ),
		position: 'relative',
		borderRadius: rem( 0.5 ),

		// Options: {
		// 	position: 'relative',
		// 	zIndex: 1,
		// 	display: 'grid',
		// 	gridAutoFlow: 'column',
		// 	gridAutoColumns: '1fr',
		// },

	Plate: {
		position: 'absolute',
		top: rem( 0.25 ),
		bottom: rem( 0.25 ),
		left: 0,
		zIndex: 0,
		borderRadius: rem( 0.375 ), // 0.5 - 0.125
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
		transition: 'left 0.3s ease, width 0.3s ease',
		// Width and left position set via inline styles in TypeScript
	},
	} )
}
