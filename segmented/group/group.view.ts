namespace $.$$ {

	/**
	 * Segment Group - iOS-style segmented control
	 * 
	 * A horizontal group of segments (radio buttons) with an animated
	 * sliding background plate that highlights the selected option.
	 * 
	 * Props:
	 * - options: dictionary of values and labels { key: "Label" }
	 * - value: currently selected value (key from options)
	 * - name: shared name for all segments (auto-generated if not provided)
	 * 
	 * @example
	 * ```tree
	 * <= My_segments $eve_segmented_group
	 *     options *
	 *         small \Small
	 *         medium \Medium
	 *         large \Large
	 *     value? <=> size? \medium
	 * ```
	 */
	export class $eve_segmented_group extends $.$eve_segmented_group {

		/**
		 * Dictionary of option values and their labels/content
		 * Override this to provide options
		 */
		options(): { [key: string]: any } {
			return {}
		}

		/**
		 * Shared name for all segments in this group
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
		option_ids() {
			return Object.keys( this.options() )
		}

		/**
		 * List of segment components
		 */
		@$mol_mem
		segments() {
			return this.option_ids().map( id => this.Segment( id ) )
		}

		/**
		 * Get option value (same as id)
		 */
		@$mol_mem_key
		option_value( id: string ) {
			return id
		}

		/**
		 * Get option label/content by key
		 */
		@$mol_mem_key
		option_content( id: string ): any[] {
			const option = this.options()[ id ]
			
			// If option is a string, return it as text
			if( typeof option === 'string' ) {
				return [
					this.Label( id )
				]
			}
			
			// Otherwise return as-is (could be a component)
			return [ option ]
		}

		/**
		 * Label for string options
		 */
		@$mol_mem_key
		Label( id: string ) {
			const label = new this.$.$mol_text()
			label.text = () => String( this.options()[ id ] )
			return label
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

		/**
		 * Calculate plate position based on selected option
		 */
		@$mol_mem
		plate_position() {
			const ids = this.option_ids()
			const current = this.value()
			const index = ids.indexOf( current )
			const count = ids.length
			
			if( index === -1 || count === 0 ) return { left: '0%', width: '0%' }
			
			const width = 100 / count
			const left = index * width
			
			return {
				left: `${ left }%`,
				width: `${ width }%`,
			}
		}

		override sub() {
			// Update plate styles when rendering
			const plate = this.Plate()
			const pos = this.plate_position()
			
			plate.style = () => ({
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: pos.left,
				width: pos.width,
				background: 'var(--eve_surface_primary)',
				borderRadius: 'var(--eve_surface_radius)',
				transition: 'left 0.3s ease, width 0.3s ease',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
				zIndex: '0',
			})
			
			return super.sub()
		}

	}

}

