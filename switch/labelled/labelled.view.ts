namespace $.$$ {

	/**
	 * Switch with label - combines switch control with text label
	 * Based on eve_flex for proper layout
	 * Inherits size from eve_surface
	 * 
	 * Props:
	 * - size: 's' | 'm' | 'l' (from eve_surface)
	 * - checked: boolean
	 * - disabled: boolean
	 * - title: string (label text)
	 */
	export class $eve_switch_labelled extends $.$eve_switch_labelled {

		override dom_name() {
			return 'label'
		}

		event_click( next?: Event ) {
			if( this.disabled() ) {
				next?.preventDefault()
				return
			}
			// Click is handled by the switch itself
		}

	}
}

