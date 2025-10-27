namespace $.$$ {

	/**
	 * Container with tabs and corresponding content.
	 * Similar to $mol_book2_catalog pattern.
	 * 
	 * @example
	 * ```tree
	 * <= Editor $eve_tab_container
	 *     tab? <=> active_tab? \source
	 *     spreads *
	 *         source <= Source_panel $mol_view
	 *         props <= Props_panel $mol_view
	 * ```
	 */
	export class $eve_tab_container extends $.$eve_tab_container {

		// Get spread IDs from spreads dictionary
		@$mol_mem
		spread_ids() {
			return Object.keys( this.spreads() )
		}

	// Get current spread by ID
	Spread( id: string ) {
		return this.spreads()[ id ] ?? null
	}

		// Get current spread
		@$mol_mem
		spread_current() {
			const tab = this.tab()
			return tab ? this.Spread( tab ) : null
		}

	// Generate tabs array for eve_tab_group
	@$mol_mem
	tabs() {
		return this.spread_ids().map( id => this.Tab_group().Tab( id ) )
	}

	// Get tab label (override to customize)
	tab_label( id: string ): string {
		// Capitalize first letter by default
		return id.charAt( 0 ).toUpperCase() + id.slice( 1 )
	}

	// Check if tab is active
	tab_checked( id: string ): boolean {
		return this.tab() === id
	}

	// Handle tab click
	tab_click( id: string, event?: Event ): void {
		this.tab( id )
	}

		// Generate content options for mol_switch
		@$mol_mem
		content_options() {
			const options: Record<string, $mol_view> = {}
			for( const id of this.spread_ids() ) {
				const spread = this.Spread( id )
				if( spread ) options[ id ] = spread
			}
			return options
		}

	}

}

