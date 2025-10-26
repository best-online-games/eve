namespace $.$$ {

	export type $eve_input_logical_switch_size = 's' | 'm' | 'l'

	/**
	 * Switch control - visual indicator only (no label)
	 * Pure toggle switch component
	 * 
	 * Sizes:
	 * - s: 28x16px (slider 12px)
	 * - m: 36x20px (slider 16px)
	 * - l: 42x24px (slider 18px)
	 * 
	 * For labeled version use $eve_input_logical_switch_labelled
	 */
	export class $eve_input_logical_switch extends $.$eve_input_logical_switch {

		@$mol_mem
		size( next?: $eve_input_logical_switch_size ): $eve_input_logical_switch_size {
			return next ?? 'm'
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

