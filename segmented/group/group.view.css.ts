namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $.$eve_segmenteded_group, {
		
		position: 'relative',
		display: 'flex',
		padding: rem( 0.25 ),
		background: 'var(--eve_surface_secondary)',
		borderRadius: 'var(--eve_surface_radius)',
		overflow: 'hidden',
		
	} )

	$mol_style_define( $.$eve_segmenteded_group.prototype.Segments() , {
		position: 'relative',
		width: '100%',
	} )

}

