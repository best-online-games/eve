namespace $.$$ {

	/**
	 * Switch with label - based on eve_button with ghost variant
	 * Inherits size system from eve_surface through eve_button
	 * 
	 * Props:
	 * - size: from eve_surface (xs, s, m, l, xl)
	 * - checked: boolean
	 * - disabled: boolean
	 * - label: string (button label text)
	 * 
	 * Switch sizes map to button sizes:
	 * - s button → s switch
	 * - m button → m switch
	 * - l button → l switch
	 */
	export class $eve_input_logical_switch_labelled extends $.$eve_input_logical_switch_labelled {

		override dom_name() {
			return 'label'
		}

		@$mol_mem
		switch_size(): $eve_input_logical_switch_size {
			const buttonSize = this.size()
			// Map button sizes to switch sizes
			const sizeMap: Record<string, $eve_input_logical_switch_size> = {
				xs: 's',
				s: 's',
				m: 'm',
				l: 'l',
				xl: 'l',
			}
			return sizeMap[buttonSize || 'm'] || 'm'
		}

		override click( event?: MouseEvent ) {
			if( this.disabled() ) {
				event?.preventDefault()
				return
			}
			// Click will be handled by switch itself
		}

	}
}
