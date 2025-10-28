namespace $.$$ {
	export class $eve_segmented_demo extends $.$eve_segmented_demo {

		// Capitalize first letter for labels
		@$mol_mem_key
		option_label( type: string, id: string ) {
			return id.charAt( 0 ).toUpperCase() + id.slice( 1 )
		}

		// View mode options
		view_option( id: string ) {
			return this.View_mode().Option( id )
		}

		// Size options
		size_option( id: string ) {
			return this.Size_selector().Option( id )
		}

		// Theme options
		theme_option( id: string ) {
			return this.Theme_selector().Option( id )
		}

	}
}

