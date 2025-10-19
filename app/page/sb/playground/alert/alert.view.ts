namespace $.$$ {

	export class $eve_app_page_sb_playground_alert extends $eve_app_page_sb_playground {

		component_name(): string {
			return 'Live_alert'
		}

		default_source(): string {
			return `Live_alert $eve_alert
	- Edit values of Alert component
	colors \\info
	variant \\soft
	message /
		\\This is an alert message
	description /
		\\This is a detailed description providing additional context.
	- Icon null
	- Close_button null

`
		}

	}

}

