namespace $.$$ {
	export class $ds_app extends $.$ds_app {
		@$mol_mem
		pages() {
			const spread = this.spread_current()
			return [this.Navbar(), ...(spread ? [spread] : [])]
		}
	}
}
