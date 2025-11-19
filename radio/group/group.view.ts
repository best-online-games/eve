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
	}

}





