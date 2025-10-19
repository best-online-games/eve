namespace $.$$ {

	export class $eve_app_page_sb_playground_button extends $.$eve_app_page_sb_playground_button {

		component_name(): string {
			return 'Live_button'
		}

		default_source(): string {
			return `Live_button $eve_button
	- Edit values of Button component
	colors \\primary
	variant \\solid
	size \\m
	label \\Click Me!
	sub /
		<= Icon $mol_icon_karate
		^
`
		}

	}

}

