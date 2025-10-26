namespace $.$$ {

	/**
	 * Radio with label - based on eve_button ghost variant
	 * Radio size is fixed at 1rem, button size controls padding/spacing
	 */
	export class $eve_input_logical_radio_labelled extends $.$eve_input_logical_radio_labelled {

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

