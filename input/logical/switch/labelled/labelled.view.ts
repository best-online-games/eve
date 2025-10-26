namespace $.$$ {

	/**
	 * Switch with label - based on eve_button with ghost variant
	 * Inherits size system from eve_surface through eve_button
	 * 
	 * Props:
	 * - size: from eve_surface (xs, s, m, l, xl) - affects button height and label
	 * - checked: boolean
	 * - disabled: boolean
	 * - label: string (button label text)
	 * 
	 * Note: Switch itself has fixed 2rem × 1rem size
	 */
	export class $eve_input_logical_switch_labelled extends $.$eve_input_logical_switch_labelled {

		override dom_name() {
			return 'label'
		}

	}
}
