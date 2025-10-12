declare namespace $ {

	type $mol_button_major__title_ds_themer_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_ds_themer_2 = $mol_type_enforce<
		ReturnType< $ds_themer['export'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_minor__title_ds_themer_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ds_themer_4 = $mol_type_enforce<
		ReturnType< $ds_themer['copy'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_ds_themer_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ds_themer_6 = $mol_type_enforce<
		ReturnType< $ds_themer['reset'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_dimmer__haystack_ds_themer_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_ds_themer_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_12 = $mol_type_enforce<
		ReturnType< $ds_themer['color_back'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_14 = $mol_type_enforce<
		ReturnType< $ds_themer['Back_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_16 = $mol_type_enforce<
		ReturnType< $ds_themer['color_card'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_18 = $mol_type_enforce<
		ReturnType< $ds_themer['Card_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_20 = $mol_type_enforce<
		ReturnType< $ds_themer['color_field'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_22 = $mol_type_enforce<
		ReturnType< $ds_themer['Field_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_24 = $mol_type_enforce<
		ReturnType< $ds_themer['color_hover'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_26 = $mol_type_enforce<
		ReturnType< $ds_themer['Hover_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_ds_themer_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_31 = $mol_type_enforce<
		ReturnType< $ds_themer['color_text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_33 = $mol_type_enforce<
		ReturnType< $ds_themer['Text_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_35 = $mol_type_enforce<
		ReturnType< $ds_themer['color_shade'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_37 = $mol_type_enforce<
		ReturnType< $ds_themer['Shade_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_39 = $mol_type_enforce<
		ReturnType< $ds_themer['color_line'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_40 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_41 = $mol_type_enforce<
		ReturnType< $ds_themer['Line_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_42 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_43 = $mol_type_enforce<
		ReturnType< $ds_themer['color_focus'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_44 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_45 = $mol_type_enforce<
		ReturnType< $ds_themer['Focus_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_46 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_47 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_48 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_ds_themer_49 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_50 = $mol_type_enforce<
		ReturnType< $ds_themer['color_control'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_51 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_52 = $mol_type_enforce<
		ReturnType< $ds_themer['Control_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_53 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_54 = $mol_type_enforce<
		ReturnType< $ds_themer['color_current'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_55 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_56 = $mol_type_enforce<
		ReturnType< $ds_themer['Current_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_57 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_58 = $mol_type_enforce<
		ReturnType< $ds_themer['color_special'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_59 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_60 = $mol_type_enforce<
		ReturnType< $ds_themer['Special_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_61 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_62 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_ds_themer_63 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__style_ds_themer_64 = $mol_type_enforce<
		({ 
			'--mol_theme_back': ReturnType< $ds_themer['color_back'] >,
			'--mol_theme_card': ReturnType< $ds_themer['color_card'] >,
			'--mol_theme_field': ReturnType< $ds_themer['color_field'] >,
			'--mol_theme_hover': ReturnType< $ds_themer['color_hover'] >,
			'--mol_theme_text': ReturnType< $ds_themer['color_text'] >,
			'--mol_theme_shade': ReturnType< $ds_themer['color_shade'] >,
			'--mol_theme_line': ReturnType< $ds_themer['color_line'] >,
			'--mol_theme_focus': ReturnType< $ds_themer['color_focus'] >,
			'--mol_theme_control': ReturnType< $ds_themer['color_control'] >,
			'--mol_theme_current': ReturnType< $ds_themer['color_current'] >,
			'--mol_theme_special': ReturnType< $ds_themer['color_special'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_ds_themer_65 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_ds_themer_66 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_row__sub_ds_themer_67 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $ds_themer extends $mol_page {
		Theme( ): $mol_theme_auto
		export( next?: any ): any
		Export( ): $mol_button_major
		copy( next?: any ): any
		Copy( ): $mol_button_minor
		reset( next?: any ): any
		Reset( ): $mol_button_minor
		Controls_title_text( ): $mol_dimmer
		Controls_title( ): $mol_view
		Backgrounds_title_text( ): $mol_dimmer
		Backgrounds_title( ): $mol_view
		color_back( next?: string ): string
		Back_color( ): $mol_string
		Back_field( ): $mol_form_field
		color_card( next?: string ): string
		Card_color( ): $mol_string
		Card_field( ): $mol_form_field
		color_field( next?: string ): string
		Field_color( ): $mol_string
		Field_field( ): $mol_form_field
		color_hover( next?: string ): string
		Hover_color( ): $mol_string
		Hover_field( ): $mol_form_field
		Backgrounds_section( ): $mol_list
		Text_title_text( ): $mol_dimmer
		Text_title( ): $mol_view
		color_text( next?: string ): string
		Text_color( ): $mol_string
		Text_field( ): $mol_form_field
		color_shade( next?: string ): string
		Shade_color( ): $mol_string
		Shade_field( ): $mol_form_field
		color_line( next?: string ): string
		Line_color( ): $mol_string
		Line_field( ): $mol_form_field
		color_focus( next?: string ): string
		Focus_color( ): $mol_string
		Focus_field( ): $mol_form_field
		Text_section( ): $mol_list
		Controls_section_title_text( ): $mol_dimmer
		Controls_section_title( ): $mol_view
		color_control( next?: string ): string
		Control_color( ): $mol_string
		Control_field( ): $mol_form_field
		color_current( next?: string ): string
		Current_color( ): $mol_string
		Current_field( ): $mol_form_field
		color_special( next?: string ): string
		Special_color( ): $mol_string
		Special_field( ): $mol_form_field
		Controls_section( ): $mol_list
		Controls_inner( ): $mol_list
		Controls( ): $mol_scroll
		Demo_site( ): $ds_themer_demo
		Preview_inner( ): $mol_view
		Preview( ): $mol_scroll
		Content( ): $mol_row
		title( ): string
		plugins( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
	type $mol_button_minor__title_ds_themer_demo_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title_ds_themer_demo_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_demo_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_demo_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text__text_ds_themer_demo_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text__text_ds_themer_demo_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text__text_ds_themer_demo_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub_ds_themer_demo_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows_ds_themer_demo_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_demo_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_ds_themer_demo_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_demo_23 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_demo_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_demo_25 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['Name_input'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint_ds_themer_demo_26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_ds_themer_demo_27 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_email'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name_ds_themer_demo_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_demo_29 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['Email_input'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__hint_ds_themer_demo_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_ds_themer_demo_31 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_message'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_ds_themer_demo_32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_demo_33 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['Message_input'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_check_box__title_ds_themer_demo_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ds_themer_demo_35 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_check1'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title_ds_themer_demo_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ds_themer_demo_37 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_check2'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title_ds_themer_demo_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ds_themer_demo_39 = $mol_type_enforce<
		ReturnType< $ds_themer_demo['demo_check3'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_row__sub_ds_themer_demo_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_major__title_ds_themer_demo_41 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_minor__title_ds_themer_demo_42 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_row__sub_ds_themer_demo_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows_ds_themer_demo_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_demo_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_46 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_demo_47 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_48 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_49 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__haystack_ds_themer_demo_50 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_row__sub_ds_themer_demo_51 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_text__text_ds_themer_demo_52 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_53 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_54 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_55 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_56 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_57 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub_ds_themer_demo_58 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_text__text_ds_themer_demo_59 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_60 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_61 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_62 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_63 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_64 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub_ds_themer_demo_65 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_text__text_ds_themer_demo_66 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_67 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_68 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_69 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_ds_themer_demo_70 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_ds_themer_demo_71 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub_ds_themer_demo_72 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows_ds_themer_demo_73 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_demo_74 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_demo_75 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ds_themer_demo extends $mol_page {
		Settings( ): $mol_button_minor
		Profile( ): $mol_button_minor
		Welcome_title_text( ): $mol_dimmer
		Welcome_title( ): $mol_view
		Welcome_text( ): $mol_text
		Welcome_section( ): $mol_view
		Cards_title_text( ): $mol_dimmer
		Cards_title( ): $mol_view
		Card1_title( ): $mol_dimmer
		Card1_text( ): $mol_text
		Card1( ): $mol_view
		Card2_title( ): $mol_dimmer
		Card2_text( ): $mol_text
		Card2( ): $mol_view
		Card3_title( ): $mol_dimmer
		Card3_text( ): $mol_text
		Card3( ): $mol_view
		Cards_row( ): $mol_row
		Cards_section( ): $mol_list
		Forms_title_text( ): $mol_dimmer
		Forms_title( ): $mol_view
		demo_name( next?: string ): string
		Name_input( ): $mol_string
		Name_field( ): $mol_form_field
		demo_email( next?: string ): string
		Email_input( ): $mol_string
		Email_field( ): $mol_form_field
		demo_message( next?: string ): string
		Message_input( ): $mol_textarea
		Message_field( ): $mol_form_field
		demo_check1( next?: boolean ): boolean
		Check1( ): $mol_check_box
		demo_check2( next?: boolean ): boolean
		Check2( ): $mol_check_box
		demo_check3( next?: boolean ): boolean
		Check3( ): $mol_check_box
		Options_row( ): $mol_row
		Submit_button( ): $mol_button_major
		Cancel_button( ): $mol_button_minor
		Buttons_row( ): $mol_row
		Form_demo( ): $mol_list
		Forms_section( ): $mol_list
		Table_title_text( ): $mol_dimmer
		Table_title( ): $mol_view
		Header1( ): $mol_dimmer
		Header2( ): $mol_dimmer
		Header3( ): $mol_dimmer
		Table_header( ): $mol_row
		Row1_col1_text( ): $mol_text
		Row1_col1( ): $mol_view
		Row1_col2_text( ): $mol_text
		Row1_col2( ): $mol_view
		Row1_col3_text( ): $mol_text
		Row1_col3( ): $mol_view
		Table_row1( ): $mol_row
		Row2_col1_text( ): $mol_text
		Row2_col1( ): $mol_view
		Row2_col2_text( ): $mol_text
		Row2_col2( ): $mol_view
		Row2_col3_text( ): $mol_text
		Row2_col3( ): $mol_view
		Table_row2( ): $mol_row
		Row3_col1_text( ): $mol_text
		Row3_col1( ): $mol_view
		Row3_col2_text( ): $mol_text
		Row3_col2( ): $mol_view
		Row3_col3_text( ): $mol_text
		Row3_col3( ): $mol_view
		Table_row3( ): $mol_row
		Table_demo( ): $mol_list
		Table_section( ): $mol_list
		Demo_content( ): $mol_list
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=themer.view.tree.d.ts.map