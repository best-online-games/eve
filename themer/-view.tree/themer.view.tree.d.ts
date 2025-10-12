declare namespace $ {

	type $mol_number__value_ds_themer_1 = $mol_type_enforce<
		ReturnType< $ds_themer['hue'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change_ds_themer_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_form_field__name_ds_themer_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_4 = $mol_type_enforce<
		ReturnType< $ds_themer['Hue'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__value_ds_themer_5 = $mol_type_enforce<
		ReturnType< $ds_themer['hue_spread'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change_ds_themer_6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_form_field__name_ds_themer_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_8 = $mol_type_enforce<
		ReturnType< $ds_themer['Hue_spread'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_field__name_ds_themer_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_10 = $mol_type_enforce<
		ReturnType< $ds_themer['Lights'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ds_themer_case__title_ds_themer_14 = $mol_type_enforce<
		string
		,
		ReturnType< $ds_themer_case['title'] >
	>
	type $ds_themer_case__title_ds_themer_15 = $mol_type_enforce<
		string
		,
		ReturnType< $ds_themer_case['title'] >
	>
	type $ds_themer_case__title_ds_themer_16 = $mol_type_enforce<
		string
		,
		ReturnType< $ds_themer_case['title'] >
	>
	type $ds_themer_case__title_ds_themer_17 = $mol_type_enforce<
		string
		,
		ReturnType< $ds_themer_case['title'] >
	>
	type $mol_list__rows_ds_themer_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_major__title_ds_themer_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_minor__title_ds_themer_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_string__hint_ds_themer_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_22 = $mol_type_enforce<
		ReturnType< $ds_themer['demo_input'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_check_box__title_ds_themer_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ds_themer_24 = $mol_type_enforce<
		ReturnType< $ds_themer['demo_check'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_list__rows_ds_themer_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_row__sub_ds_themer_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $ds_themer extends $mol_page {
		Theme( ): $mol_theme_auto
		hue_deg( ): string
		hue_spread_deg( ): string
		hue( next?: number ): number
		Hue( ): $mol_number
		Hue_field( ): $mol_form_field
		hue_spread( next?: number ): number
		Hue_spread( ): $mol_number
		Hue_spread_field( ): $mol_form_field
		Lights( ): $mol_lights_toggle
		Lights_field( ): $mol_form_field
		Controls( ): $mol_list
		Preview_title_text( ): $mol_dimmer
		Preview_title( ): $mol_view
		Base_demo( ): $ds_themer_case
		Current_demo( ): $ds_themer_case
		Special_demo( ): $ds_themer_case
		Accent_demo( ): $ds_themer_case
		Colors_demo( ): $mol_list
		Button_demo( ): $mol_button_major
		Button_minor_demo( ): $mol_button_minor
		demo_input( next?: string ): string
		Input_demo( ): $mol_string
		demo_check( next?: boolean ): boolean
		Check_demo( ): $mol_check_box
		Components_demo( ): $mol_list
		Preview( ): $mol_list
		Content( ): $mol_row
		title( ): string
		plugins( ): readonly(any)[]
		style( ): ({ 
			'--mol_theme_hue': ReturnType< $ds_themer['hue_deg'] >,
			'--mol_theme_hue_spread': ReturnType< $ds_themer['hue_spread_deg'] >,
		}) 
		body( ): readonly(any)[]
	}
	
	type $mol_button_copy__title_ds_themer_case_1 = $mol_type_enforce<
		ReturnType< $ds_themer_case['title'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_row__sub_ds_themer_case_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_copy__title_ds_themer_case_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title_ds_themer_case_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_list__rows_ds_themer_case_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ds_themer_case extends $mol_view {
		Title( ): $mol_button_copy
		Card_inner( ): $mol_row
		Back( ): $mol_button_copy
		Line( ): $mol_button_copy
		Text( ): $mol_button_copy
		Field( ): $mol_button_copy
		Shade( ): $mol_button_copy
		Focus( ): $mol_button_copy
		Control( ): $mol_button_copy
		Hover( ): $mol_button_copy
		Card( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=themer.view.tree.d.ts.map