namespace $.$$ {

	/**
	 * Checkbox with label - based on eve_button ghost variant
	 * Checkbox size is fixed at 1rem, button size controls padding/spacing
	 */
	export class $eve_checkbox_labelled extends $.$eve_checkbox_labelled {

		override dom_name() {
			return 'label'
		}

		override click( event?: MouseEvent ) {
			if( this.disabled() ) {
				event?.preventDefault()
				return
			}
		}

	}
}

