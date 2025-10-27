namespace $.$$ {

	/**
	 * Eve Tab Group component
	 * 
	 * Group of tabs for navigation between views
	 * Similar to radio_group but for tabs
	 * 
	 * @example
	 * ```tree
	 * <= My_tabs $eve_tab_group
	 *     options *
	 *         home \Home
	 *         profile \Profile
	 *         settings \Settings
	 *     value? <=> current_tab? \home
	 * ```
	 */
	export class $eve_tab_group extends $.$eve_tab_group {

		@$mol_mem
		value( next?: string ): string {
			return $mol_state_session.value( `${ this }.value()`, next ) ?? ''
		}

		@$mol_mem
		options(): Record<string, string> {
			return {}
		}

		@$mol_mem
		tabs() {
			return Object.keys( this.options() ).map( id => this.Tab( id ) )
		}

		@$mol_mem_key
		tab_label( id: string ) {
			return this.options()[ id ] ?? id
		}

		@$mol_mem_key
		tab_checked( id: string ) {
			return this.value() === id
		}

		@$mol_mem_key
		tab_click( id: string, event?: Event ) {
			if( !event ) return null
			this.value( id )
			return event
		}

	}
}

