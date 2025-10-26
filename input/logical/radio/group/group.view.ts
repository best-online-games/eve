namespace $.$$ {

	/**
	 * Radio group - manages a set of radio buttons with single selection
	 * Based on $mol_switch for state management
	 * Uses $eve_radio_labelled for each option
	 * 
	 * Props:
	 * - size: button size (xs, s, m, l, xl) from eve_surface
	 * - options: dictionary of values and labels
	 * - value: currently selected value
	 * - disabled: disable all radios
	 * 
	 * Example:
	 * ```tree
	 * My_radio_group $eve_radio_group
	 *   size \m
	 *   options *
	 *     option1 \First Option
	 *     option2 \Second Option
	 *   value? \option1
	 * ```
	 */
	export class $eve_input_logical_radio_group extends $.$eve_input_logical_radio_group {

		@$mol_mem
		size( next?: $eve_surface_size ): $eve_surface_size {
			return next ?? 'm'
		}

	}
}

