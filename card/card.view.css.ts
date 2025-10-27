namespace $.$$ {
	const { rem } = $mol_style_unit

	$mol_style_define( $eve_card, {
		border: {
			radius: rem( 0.5 ),
		},
		overflow: 'hidden',

		Title: {
			fontWeight: '600',
			fontSize: rem( 1 ),
		},

		Body: {
			flex: {
				grow: 1,
			},
		},
	} )
}

