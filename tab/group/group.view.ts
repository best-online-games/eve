namespace $.$$ {
	export class $eve_tab_group extends $.$eve_tab_group {

		@$mol_mem
		override Options() {
			return this.option_ids().map( id => this.Option( id ) )
		}
	}
}
