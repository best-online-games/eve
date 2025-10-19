namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_alert, {
		position: 'relative',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: rem( 0.75 ),
		padding: rem( 1 ),
		width: '100%',
		maxWidth: '100%',
		boxSizing: 'border-box',
		textAlign: 'left',

		Icon: {
			flex: {
				shrink: 0,
			},
			fontSize: rem( 1.25 ),
			lineHeight: '1',
			marginTop: rem( 0.125 ),
			marginRight: 'fit-content',
		},

		Content: {
			flex: {
				grow: 1,
				shrink: 1,
			},
			minWidth: rem( 0 ),
			maxWidth: '100%',
			display: 'flex',
			flexDirection: 'column',
			gap: rem( 0.5 ),
			overflow: 'hidden',
		},

		Message: {
			fontSize: rem( 0.875 ),
			fontWeight: '500',
			lineHeight: '1.5',
			maxWidth: '100%',
			wordBreak: 'break-word',
			overflowWrap: 'break-word',
		},

		Description: {
			fontSize: rem( 0.875 ),
			lineHeight: '1.5',
			opacity: 0.85,
			maxWidth: '100%',
			wordBreak: 'break-word',
			overflowWrap: 'break-word',
			whiteSpace: 'pre-wrap',
		},

		Close_button: {
			flex: {
				shrink: 0,
			},
			padding: rem( 0.25 ),
			opacity: 0.6,
			transition: 'opacity 0.2s',

			':hover': {
				opacity: 1,
			},
		},

		Close_icon: {
			fontSize: rem( 0.875 ),
		},
	} )

}
