namespace $.$$ {
	export class $eve_app_page_components extends $.$eve_app_page_components {
	@$mol_mem_key
	spread_title( id: string ) {
		const titles: Record<string, string> = {
			button: 'Button',
			radio: 'Radio',
			check: 'Checkbox',
			switch: 'Switch',
			inputs: 'Inputs',
			cards: 'Cards',
			tables: 'Tables',
			surfaces: 'Surfaces',
		}
		return titles[ id ] || id
	}

		// 5 строк - по одной на каждый размер
		@$mol_mem
		size_rows() {
			return $eve_surface.SIZES.map( size => ( this as any ).Size_row( size ) )
		}

		// Колонки в строке - все цвета для данного размера
		@$mol_mem_key
		size_surfaces( size: string ) {
			return $eve_surface.COLORS.map( color => ( this as any ).Surface_cell( `${ color }__${ size }` ) )
		}

		@$mol_mem_key
		surface_color( id: string ) {
			return id.split( '__' )[ 0 ]
		}

		@$mol_mem_key
		surface_interactive( id: string ) {
			return id.split( '__' )[ 1 ]
		}

		// Текст заголовка состояния
		@$mol_mem_key
		grid_header_text( state: string ) {
			return state.toUpperCase()
		}

		// Текст лейбла цвета
		@$mol_mem_key
		grid_row_text( color: string ) {
			return color.toUpperCase()
		}

		// Создаём Surface по ID (color__state)
		@$mol_mem_key
		Grid_cell( id: string ) {
			const [ color, state ] = id.split( '__' )

			const surface = new this.$.$eve_surface()
			surface.colors( color as any )
			surface.state( state as any )

			return surface
		}
	}
}
