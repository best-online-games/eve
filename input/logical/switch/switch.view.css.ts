namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $eve_input_logical_switch, {
		
		display: 'inline-flex',
		position: 'relative',
		cursor: 'pointer',
		userSelect: 'none',
		flex: {
			shrink: 0,
		},
		background: {
			color: $mol_theme.shade,
		},
		transition: 'background-color 0.15s ease',
		width: rem( 2 ),
		height: rem( 1 ),
		border: {
			radius: rem( 0.5 ),
		},

		Slider: {
			position: 'absolute',
			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: '50%',
			},
			transition: 'transform 0.15s ease-out',
			width: rem( 0.75 ),
			height: rem( 0.75 ),
			top: rem( 0.125 ),
			left: rem( 0.125 ),
		},

		':hover': {
			opacity: 0.9,
		},

		'[mol_check_checked]': {
			true: {
				background: {
					color: $mol_theme.current,
				},
				Slider: {
					transform: `translateX(${ rem( 1 ) })`,
				},
			},
		},

		// Size variants keep proportions
		'@': {
			eve_input_logical_switch_size: {
				s: {
					width: rem( 1.75 ),
					height: rem( 0.875 ),
					Slider: {
						width: rem( 0.625 ),
						height: rem( 0.625 ),
					},
				},
				m: {
					width: rem( 2 ),
					height: rem( 1 ),
					Slider: {
						width: rem( 0.75 ),
						height: rem( 0.75 ),
					},
				},
				l: {
					width: rem( 2.25 ),
					height: rem( 1.125 ),
					Slider: {
						width: rem( 0.875 ),
						height: rem( 0.875 ),
					},
				},
			},
		} as any,

		'[mol_check_checked][eve_input_logical_switch_size="s"]': {
			Slider: { transform: `translateX(${ rem( 0.875 ) })` },
		},
		'[mol_check_checked][eve_input_logical_switch_size="m"]': {
			Slider: { transform: `translateX(${ rem( 1 ) })` },
		},
		'[mol_check_checked][eve_input_logical_switch_size="l"]': {
			Slider: { transform: `translateX(${ rem( 1.125 ) })` },
		},
		
	} )
	
}

