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

		// Calculate plate position and width
		@$mol_mem
		plate_style() {
			const ids = this.Option_ids()
			const index = ids.indexOf( this.value() )
			const count = ids.length

			if( count === 0 ) return {}

			const widthPercent = 100 / count
			const leftPercent = index * widthPercent

			return {
				width: `${ widthPercent }%`,
				left: `${ leftPercent }%`,
			}
		}

		@$mol_mem
		override Plate() {
			const plate = super.Plate()
			const node = plate.dom_node() as HTMLElement
			Object.assign( node.style, this.plate_style() )
			return plate
		}

	}

}
