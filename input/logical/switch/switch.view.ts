namespace $.$$ {

	/**
	 * Switch control - based on eve_button
	 * Uses eve_surface token system for consistent styling
	 * 
	 * Fixed size: 2rem × 1rem (slider 0.75rem)
	 * Uses variant system: outline (unchecked) → solid (checked)
	 * Uses flex direction: row (unchecked) → row-reverse (checked)
	 * 
	 * For labeled version use $eve_input_logical_switch_labelled
	 */
	export class $eve_input_logical_switch extends $.$eve_input_logical_switch {

		override dom_name() {
			return 'input'
		}

		// override variant(): $eve_surface_variant {
		// 	return this.checked() ? 'solid' : 'outline'
		// }

		@$mol_mem
		override direction( next?: $eve_flex_direction ): $eve_flex_direction {
			return this.checked() ? 'row-reverse' : 'row'
		}

		@$mol_mem
		override switch_variant(): $eve_surface_variant {
			console.log( 'switch_variant', this.checked() ? 'solid' : 'outline' )
			return this.checked() ? 'solid' : 'outline'
		}

		@$mol_mem
		override colors( next?: $eve_surface_color ): $eve_surface_color {
			return this.checked() ? 'primary' : 'low'
		}


		@$mol_mem
		checked( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}

		event_click( next?: Event ) {
			if( this.disabled() ) {
				next?.preventDefault()
				return
			}
			if( next?.defaultPrevented ) return
			this.checked( !this.checked() )
			if( next ) next.preventDefault()
		}

		aria_checked() {
			return String( this.checked() )
		}

	}
}

