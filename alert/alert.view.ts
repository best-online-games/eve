namespace $.$$ {

	/**
	 * Icon mapping for alert colors
	 */
	const ALERT_ICONS: Partial<Record<$eve_surface_color_brand, typeof $mol_icon>> = {
		success: $mol_icon_check_circle,
		info: $mol_icon_information,
		warning: $mol_icon_alert,
		danger: $mol_icon_close_circle,
	}

	export class $eve_alert extends $.$eve_alert {

		// ===============================
		// State
		// ===============================

		/**
		 * Whether alert is closed (hidden)
		 */
		@$mol_mem
		enabled( next?: boolean ): boolean {
			return next ?? true
		}

		/**
		 * Handle close action
		 */
		close( event?: Event ) {
			this.enabled( false )
		}

		// ===============================
		// Internal implementation
		// ===============================

		/**
		 * Override Icon to use color-based icon
		 */
		@$mol_mem
		override Icon() {
			const color = this.colors() as $eve_surface_color_brand
			const IconClass = ALERT_ICONS[ color ] ?? $mol_icon_information

			return new IconClass()
		}

		/**
		 * Override attr to add with_description and colors attributes
		 */
		@$mol_mem
		override attr() {
			return {
				...super.attr(),
				eve_alert_with_description: this.description().length > 0 || undefined,
				eve_alert_colors: this.colors(),
			}
		}

	}

}

