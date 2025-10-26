namespace $.$$ {

	/**
	 * Checkbox control - visual indicator only (no label)
	 * Fixed size: 1rem × 1rem (16px × 16px)
	 * 
	 * Uses eve_surface token system:
	 * - Unchecked: outline variant (border visible)
	 * - Checked: solid variant (filled background)
	 * 
	 * For labeled version use $eve_checkbox_labelled
	 */
	export class $eve_input_logical_checkbox extends $.$eve_input_logical_checkbox {

		@$mol_mem
		checked( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		indeterminate( next?: boolean ): boolean {
			return next ?? false
		}

		override variant(): $eve_surface_variant {
			// When checked, switch to solid variant (filled)
			// When unchecked, use outline variant (border only)
			return this.checked() ? 'solid' : 'outline'
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
			if( this.indeterminate() ) return 'mixed'
			return String( this.checked() )
		}

	}
}

