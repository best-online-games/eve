namespace $.$$ {
	export class $eve_tab_container extends $.$eve_tab_container {

		@$mol_mem
		spread_ids() {
			return Object.keys( this.spreads() as any ) as readonly string[]
		}

		@$mol_mem_key
		Spread( id: string ) {
			const dict = this.spreads() as any as Record<string, $mol_view>
			return dict?.[ id ] ?? new this.$.$eve_surface()
		}

		spread_title( id: string ) { return id }

		@$mol_mem
		content() {
			const active = this.value()
			return active ? [ this.Spread( active ) ] : []
		}
	}
}
