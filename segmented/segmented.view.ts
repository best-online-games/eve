namespace $.$$ {
	export class $eve_segmented extends $.$eve_segmented {
		@$mol_mem
		override segments() {
			return this.option_ids().map( id => this.Segment( id ) )
		}

		@$mol_mem
		override plate_width() {
			return `calc(100% / ${ this.option_ids().length })`
		}

		@$mol_mem
		override plate_inset_start() {
			return `calc(${ this.option_ids().indexOf( this.value() ) } * ${ this.plate_width() })`
		}
	}
}
