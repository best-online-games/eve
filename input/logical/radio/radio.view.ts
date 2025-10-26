namespace $.$$ {

	/**
	 * Radio control - visual indicator only (no label)
	 * Fixed size: 1rem × 1rem (16px × 16px)
	 * 
	 * Uses eve_surface token system:
	 * - Unchecked: outline variant (border visible)
	 * - Checked: solid variant (filled background with disc)
	 * 
	 * For labeled version use $eve_radio_labelled
	 * For radio group use $eve_radio_group (based on $mol_switch)
	 */
	export class $eve_input_logical_radio extends $.$eve_input_logical_radio {

		@$mol_mem
		checked( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
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
			// For radio, checking is usually handled by radio group
			// But we can still set checked for standalone usage
			this.checked( true )
			if( next ) next.preventDefault()
		}

		aria_checked() {
			return String( this.checked() )
		}

	}
}

