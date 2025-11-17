namespace $.$$ {

	/**
	 * Button component based on Flex
	 * 
	 * Features:
	 * - Inherits all surface colors and variants (primary, secondary, danger, etc.)
	 * - Inherits all surface sizes (xs, sm, md, lg, xl)
	 * - Interactive states (enabled, hovered, pressed, disabled)
	 * - Flex layout for content alignment
	 */
	export class $eve_button extends $.$eve_button {

		override dom_name() {
			return 'button'
		}

		override attr() {
			const attrs = super.attr()

			return {
				...attrs,
				type: 'button',
				disabled: this.disabled() ? true : false,
			}
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}

		override state() {
			if( this.disabled() ) return 'disabled'
			return super.state()
		}

		/**
		 * Click handler
		 */
		click( event?: MouseEvent ) {
			console.log( 'button', event )
			if( this.disabled() ) {
				event?.preventDefault()
				return
			}
			// Override in subclasses or via binding
		}

	}

}

