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
		 * Current selected value
		 * Stored in session state for persistence
		 */
		@$mol_mem
		value( next?: string ): string {
			const key = `${ this }.value()`
			if( next !== undefined ) {
				$mol_state_session.value( key, next )
				return next
			}
			return $mol_state_session.value( key ) ?? ''
		}

		/**
		 * List of option components
		 */
		@$mol_mem
		Options() {
			return this.option_ids().map( id => this.Option( id ) )
		}

		/**
		 * Create option component
		 */
		@$mol_mem_key
		Option( id: string ) {
			const option = new this.$.$eve_segmented_option()
			option.value = () => this.option_value( id )
			option.label = () => this.option_label( id )
			option.checked = () => this.option_selected( id )
			option.event_click = ( event?: Event ) => this.option_click( id, event )
			return option
		}

		// Set CSS variables for plate animation
		@$mol_mem
		override Container() {
			const container = super.Container()
			const ids = this.option_ids()
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
