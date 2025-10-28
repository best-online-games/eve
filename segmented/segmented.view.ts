namespace $.$$ {

	/**
	 * Segmented control with animated selection indicator.
	 * Similar to iOS Segmented Control or Ant Design Segmented.
	 * 
	 * @example
	 * ```tree
	 * <= Segment $eve_segmented
	 *     value? <=> mode? \grid
	 *     option_ids /
	 *         \grid
	 *         \list
	 *     Option* <= mode_option*
	 *         grid <= Grid_option $mol_paragraph
	 *             title \Grid
	 *         list <= List_option $mol_paragraph
	 *             title \List
	 * ```
	 */
	export class $eve_segmented extends $.$eve_segmented {

		/**
		 * Dictionary of option values and their labels
		 * Override this to provide options
		 */
		options(): { [ key: string ]: string } {
			return {}
		}

		/**
		 * Current selected value
		 * Stored in session state for persistence
		 */
		@$mol_mem
		value( next?: string ) {
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
		 * Create option component
		 */
		@$mol_mem_key
		Option( id: string ) {
			const option = new this.$.$eve_segmented_option()
			option.value = () => this.option_value( id )
			option.label = () => this.option_title( id )
			option.checked = () => this.option_checked( id )
			option.event_click = ( event?: Event ) => this.option_click( id, event )
			return option
		}

		/**
		 * Get option value (same as id)
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

		// Set CSS variables for plate animation
		@$mol_mem
		override Container() {
			const container = super.Container()
			const ids = this.Option_ids()
			const index = ids.indexOf( this.value() )
			const count = ids.length

			if( count > 0 ) {
				const node = container.dom_node() as HTMLElement
				node.style.setProperty( '--eve-segment-index', String( index ) )
				node.style.setProperty( '--eve-segment-count', String( count ) )
			}

			return container
		}

	}

}
