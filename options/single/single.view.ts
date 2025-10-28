namespace $.$$ {

	/**
	 * Abstract base class for single-selection option groups.
	 * 
	 * Provides common behavior for radio_group, segmented, and tab_group.
	 * 
	 * @example
	 * ```tree
	 * <= Mode $eve_options_single
	 *     options *
	 *         grid \Grid
	 *         list \List
	 *     value? <=> mode? \grid
	 * ```
	 */
	export class $eve_options_single extends $.$eve_options_single {

		/**
		 * Dictionary of options { id: label }
		 * Override this to provide specific options
		 */
		options(): Record<string, string> {
			return {}
		}

		/**
		 * Current selected value (key from options)
		 * Local reactive state by default to work in dynamic playground.
		 * Specific heirs may override to persist in session/location.
		 */
		@$mol_mem
		value( next?: string ): string {
			return next ?? ''
		}

		/**
		 * List of option keys
		 */
		@$mol_mem
		option_ids() {
			return Object.keys( this.options() )
		}

		/**
		 * Get option value (same as id)
		 */
		@$mol_mem_key
		option_value( id: string ): string {
			return id
		}

		/**
		 * Get option label by key
		 */
		@$mol_mem_key
		option_title( id: string ): string {
			return this.options()[ id ] || id
		}

		/**
		 * Check if option is selected
		 */
		@$mol_mem_key
		option_checked( id: string ): boolean {
			return this.value() === id
		}

		/**
		 * Handle option click
		 */
		@$mol_mem_key
		option_click( id: string, event?: Event ) {
			if( !event ) return null
			this.value( id )
			return event
		}

	}

}
