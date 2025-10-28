namespace $.$$ {

	/**
	 * Container with tabs and corresponding content.
	 * Minimal API with multiplexed options.
	 * 
	 * @example
	 * ```tree
	 * <= Editor $eve_tab_container
	 *     value? <=> active_tab? \source
	 *     Option* <= editor_option*
	 *         source <= Source_panel $eve_surface
	 *         props <= Props_panel $eve_surface
	 * ```
	 */
	export class $eve_tab_container extends $.$eve_tab_container {

		// Generate tabs from spreads keys
		@$mol_mem
		tabs() {
			return this.spread_ids().map( id => this.Tabs().Tab( id ) )
		}

		// IDs from spreads dict
		@$mol_mem
		spread_ids() {
			return Object.keys( this.spreads() as any ) as readonly string[]
		}

		// Get spread by id
		@$mol_mem_key
		Spread( id: string ) {
			const dict = this.spreads() as any as Record<string, $mol_view>
			return dict?.[ id ] ?? new this.$.$eve_surface()
		}

		spread_title( id: string ) { return id }

		// Check if tab is active
		tab_checked( id: string ) {
			return this.value() === id
		}

		// Handle tab click
		@$mol_mem_key
		tab_click( id: string, event?: Event ) {
			this.value( id )
		}

		// Render only active content
		@$mol_mem
		content() {
			const active = this.value()
			return active ? [ this.Spread( active ) ] : []
		}

	}

}

