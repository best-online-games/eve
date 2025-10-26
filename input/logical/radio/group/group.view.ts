namespace $.$$ {

	/**
	 * Radio group - manages a set of radio buttons with single selection
	 * Uses $eve_input_logical_radio_labelled for each option
	 * Uses native <input type="radio"> with shared name for proper behavior
	 * 
	 * Props:
	 * - options: dictionary of values and labels { key: "Label" }
	 * - value: currently selected value (key from options)
	 * - name: shared name for all radios (auto-generated if not provided)
	 * 
	 * Example:
	 * ```tree
	 * My_radio_group $eve_radio_group
	 *   options *
	 *     option1 \First Option
	 *     option2 \Second Option
	 *   value? \option1
	 * ```
	 */
	export class $eve_input_logical_radio_group extends $.$eve_input_logical_radio_group {

		/**
		 * Dictionary of option values and their labels
		 * Override this to provide options
		 */
		options(): { [key: string]: string } {
			return {}
		}

		/**
		 * Shared name for all radios in this group
		 */
		@$mol_mem
		group_name() {
			return `${ this }.${ this.value() }`
		}

	/**
	 * Current selected value
	 * Stored in session state for persistence
	 */
	value( next?: string ): string {
		return $mol_state_session.value( `${ this }.value()`, next ) ?? ''
	}

		/**
		 * List of option keys (IDs)
		 */
		@$mol_mem
		Option_ids() {
			return Object.keys( this.options() )
		}

		/**
		 * List of option components
		 */
		@$mol_mem
		Options() {
			return this.Option_ids().map( id => this.Option( id ) )
		}

		/**
		 * Get option value (same as id for radios)
		 */
		@$mol_mem_key
		option_value( id: string ) {
			return id
		}

		/**
		 * Get option label by key
		 */
		@$mol_mem_key
		option_title( id: string ) {
			return this.options()[ id ] || id
		}

	/**
	 * Check if option is selected
	 */
	@$mol_mem_key
	option_checked( id: string ) {
		// Always return current checked state (read-only)
		return this.value() === id
	}

	/**
	 * Handle option click
	 */
	@$mol_mem_key
	option_click( id: string, event?: Event ) {
		if( !event ) return null
		// When clicked, set this option as selected
		this.value( id )
		return event
	}

	}
}
