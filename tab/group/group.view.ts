namespace $.$$ {
	export class $eve_tab_group extends $.$eve_tab_group {

		@$mol_mem
		override tabs() {
			return this.option_ids().map( id => this.Tab( id ) )
		}
	}
}

