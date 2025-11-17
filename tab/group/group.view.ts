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
		override value( next?: string ): string {
			const key = `${ this }.value()`
			if( next !== undefined ) {
				$mol_state_session.value( key, next )
				return next
			}
			return $mol_state_session.value( key ) ?? super.value()
		}

		@$mol_mem
		override tabs() {
			return this.option_ids().map( id => this.Tab( id ) )
		}

		@$mol_mem_key
		tab_label( id: string ) {
			return this.option_label( id )
		}

		@$mol_mem_key
		tab_checked( id: string ) {
			return this.option_selected( id )
		}

		@$mol_mem_key
		tab_click( id: string, event?: Event ) {
			return this.option_click( id, event )
		}

	}
}

