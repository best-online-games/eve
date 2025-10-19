namespace $.$$ {
	export class $ds_app_page_components_flex extends $.$ds_app_page_components_flex {

		@$mol_mem
		showcase_cells() {
			return Array.from( { length: 9 }, ( _, index ) =>
				this.Showcase_cell( index )
			)
		}

		// Переопределяем Playground чтобы добавить showcase_cells
		@$mol_mem
		override Playground() {
			const playground = super.Playground() as any

			// Инжектим showcase_cells
			playground._showcase_cells = this.showcase_cells()

			return playground
		}

	}
}
