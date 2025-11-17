namespace $.$$ {
	export class $eve_segmented extends $.$eve_segmented {

		@$mol_mem
		segments() {
			return this.option_ids().map( id => this.Segment( id ) )
		}
	}
}
