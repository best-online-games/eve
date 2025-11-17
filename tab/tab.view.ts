namespace $.$$ {

	/**
	 * Eve Tab component - single tab button
	 * 
	 * Similar to radio but for tab navigation
	 * Uses eve_button with dynamic variant switching
	 * 
	 * - Unchecked: ghost variant (invisible)
	 * - Checked: soft/solid variant (visible)
	 * 
	 * For tab group use $eve_tab_group
	 */
	export class $eve_tab extends $.$eve_tab {

		override tab_colors(): $eve_surface_color {
			return this.selected() ? 'primary' : 'low'
		}

		aria_checked() {
			return String( this.selected() )
		}

	}
}

