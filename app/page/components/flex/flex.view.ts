namespace $.$$ {
	export class $ds_app_page_components_flex extends $.$ds_app_page_components_flex {

		@$mol_mem
		showcase_cells() {
			return Array.from( { length: 9 }, ( _, index ) =>
				this.Showcase_cell( index )
			)
		}
	}
}
