namespace $.$$ {

	/**
	 * Abstract base class for single-selection option groups.
	 */
	export class $eve_selection_single extends $.$eve_selection_single {

		options(): Record<string, string> {
			return {}
		}

		@$mol_mem
		value( next?: string ): string {
			return next ?? ''
		}

		@$mol_mem
		option_ids() {
			return Object.keys( this.options() )
		}

		@$mol_mem_key
		option_value( id: string ): string { return id }

		@$mol_mem_key
		option_label( id: string ): string { return this.options()[ id ] || id }

		@$mol_mem_key
		option_selected( id: string ): boolean { return this.value() === id }

		@$mol_mem_key
		option_click( id: string, event?: Event ) {

			if( !event ) return null
			this.value( id )
			return event
		}

	}

}





