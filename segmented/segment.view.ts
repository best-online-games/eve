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

		// Generate options array
		@$mol_mem
		options() {
			return this.option_ids().map( id => this.Segment_option( id ) )
		}

		// Create option component
		@$mol_mem_key
		Segment_option( id: string ) {
			const option = new this.$.$eve_segmented_option()
			option.value = () => id
			option.label = () => this.option_id( id )
			option.checked = () => this.option_checked( id )
			option.event_click = ( event?: Event ) => this.option_click( id, event )
			return option
		}

		// Handle option click
		@$mol_mem_key
		option_click( id: string, event?: Event ) {
			this.value( id )
		}

		// Check if option is selected
		option_checked( id: string ) {
			return this.value() === id
		}

	// Calculate plate position and width
	@$mol_mem
	plate_style() {
		const index = this.option_ids().indexOf( this.value() )
		const count = this.option_ids().length
		
		if( count === 0 ) return {}
		
		const widthPercent = 100 / count
		const leftPercent = index * widthPercent
		
		return {
			width: `${widthPercent}%`,
			left: `${leftPercent}%`,
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
