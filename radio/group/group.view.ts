namespace $.$$ {

	export class $eve_radio_group extends $.$eve_radio_group {

		@$mol_mem
		group_name() {
			return `${ this }.${ this.value() }`
		}

		@$mol_mem
		override Options() {
			return this.option_ids().map( id => this.Option( id ) )
		}

		@$mol_mem_key
		radio_option_value( id: string ) {
			return this.option_value( id )
		}

		@$mol_mem_key
		radio_option_selected( id: string ) {
			return this.option_selected( id )
		}

		@$mol_mem_key
		radio_option_label( id: string ) {
			return this.option_label( id )
		}

		@$mol_mem_key
		radio_option_click( id: string, event?: Event ) {
			return this.option_click( id, event )
		}

	}

}





