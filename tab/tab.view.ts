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

		@$mol_mem
		checked( next?: boolean ): boolean {
			
			return next ?? false
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}


		override tab_colors(): $eve_surface_color {
			return this.checked() ? 'primary' : 'low'
		}

		event_click( next?: Event ) {
			console.log($eve_tab.prototype)
			if( this.disabled() ) {
				next?.preventDefault()
				return
			}
			if( next?.defaultPrevented ) return
			this.checked( true )
			if( next ) next.preventDefault()
		}

		aria_checked() {
			return String( this.checked() )
		}

	}
}

