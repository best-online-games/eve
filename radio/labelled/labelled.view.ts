namespace $.$$ {

	/**
	 * Radio with label - based on eve_button ghost variant
	 * Radio size is fixed at 1rem, button size controls padding/spacing
	 * Uses native <label for="..."> to link with <input id="...">
	 */
	export class $eve_radio_labelled extends $.$eve_radio_labelled {

		override dom_name() {
			return 'label'
		}

		@$mol_mem
		radio_id() {
			return `${ this }:radio`
		}

	}
}

