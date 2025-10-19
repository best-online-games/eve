namespace $.$$ {
	export class $ds_app_page_components_surface extends $.$ds_app_page_components_surface {

		@$mol_mem
		grid_cells() {
			const cells: any[] = []
			// Первая строка: пустая ячейка + заголовки состояний
			cells.push( this.Grid_empty() )
			$ds_surface.STATE_MODIFIERS.forEach( state => {
				cells.push( this.Grid_column_header( state ) )
			} )

			// Строки данных: лейбл цвета + все состояния этого цвета
			$ds_surface.COLORS.forEach( color => {
				// Лейбл цвета
				cells.push( this.Grid_row_header( color ) )

				// Все состояния для этого цвета
				$ds_surface.STATE_MODIFIERS.forEach( state => {
					cells.push( this.Grid_cell( `${ color }__${ state }` ) )
				} )
			} )

			return cells
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

		@$mol_mem_key
		grid_cell_color( id: string ) {
			const [ color, state ] = id.split( '__' )
			return color as $ds_surface_color
		}

		@$mol_mem_key
		grid_cell_state( id: string ) {
			const [ color, state ] = id.split( '__' )
			return state as $ds_surface_state_modifiers
		}
	}
}
