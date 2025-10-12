declare namespace $ {

	type $mol_link__arg_ds_themer_1 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_ds_themer_3 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_ds_themer_5 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_ds_themer_7 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_ds_themer_9 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_ds_themer_11 = $mol_type_enforce<
		({ 
			'page': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_ds_themer_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_select__value_ds_themer_13 = $mol_type_enforce<
		ReturnType< $ds_themer['lang'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_ds_themer_14 = $mol_type_enforce<
		ReturnType< $ds_themer['lang_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_link_iconed__hint_ds_themer_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri_ds_themer_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__sub_ds_themer_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['sub'] >
	>
	type $mol_link_iconed__hint_ds_themer_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri_ds_themer_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__sub_ds_themer_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['sub'] >
	>
	type $mol_view__sub_ds_themer_21 = $mol_type_enforce<
		ReturnType< $ds_themer['page_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ds_themer extends $mol_page {
		Theme( ): $mol_theme_auto
		Libraries_title( ): string
		Libraries_link( ): $mol_link
		Components_title( ): string
		Components_link( ): $mol_link
		Design_title( ): string
		Design_link( ): $mol_link
		Icons_title( ): string
		Icons_link( ): $mol_link
		Themer_title( ): string
		Themer_link( ): $mol_link
		Media_title( ): string
		Media_link( ): $mol_link
		lang( next?: string ): string
		lang_options( ): readonly(any)[]
		Lang_select( ): $mol_select
		Telegram_icon( ): $mol_icon_telegram
		Telegram_link( ): $mol_link_iconed
		Github_icon( ): $mol_icon_github
		Github_link( ): $mol_link_iconed
		page_body( ): readonly(any)[]
		Page_content( ): $mol_view
		title( ): string
		plugins( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
	type $mol_dimmer__haystack_ds_themer_page_themer_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_page_themer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_ds_themer_page_themer_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_page_themer_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_5 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_back'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_7 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Back_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_8 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_card'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_10 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Card_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_11 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_field'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_13 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Field_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_14 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_hover'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_16 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Hover_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_page_themer_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_page_themer_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_page_themer_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_20 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_text'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_22 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Text_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_23 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_shade'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_25 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Shade_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_26 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_line'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_28 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Line_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_29 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_focus'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_31 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Focus_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_page_themer_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_ds_themer_page_themer_33 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_ds_themer_page_themer_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_35 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_control'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_37 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Control_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_38 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_current'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_39 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_40 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Current_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $ds_themer_color__value_ds_themer_page_themer_41 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['color_special'] >
		,
		ReturnType< $ds_themer_color['value'] >
	>
	type $mol_form_field__name_ds_themer_page_themer_42 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_ds_themer_page_themer_43 = $mol_type_enforce<
		ReturnType< $ds_themer_page_themer['Special_color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows_ds_themer_page_themer_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_ds_themer_page_themer_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_ds_themer_page_themer_46 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__style_ds_themer_page_themer_47 = $mol_type_enforce<
		({ 
			'--mol_theme_back': ReturnType< $ds_themer_page_themer['color_back'] >,
			'--mol_theme_card': ReturnType< $ds_themer_page_themer['color_card'] >,
			'--mol_theme_field': ReturnType< $ds_themer_page_themer['color_field'] >,
			'--mol_theme_hover': ReturnType< $ds_themer_page_themer['color_hover'] >,
			'--mol_theme_text': ReturnType< $ds_themer_page_themer['color_text'] >,
			'--mol_theme_shade': ReturnType< $ds_themer_page_themer['color_shade'] >,
			'--mol_theme_line': ReturnType< $ds_themer_page_themer['color_line'] >,
			'--mol_theme_focus': ReturnType< $ds_themer_page_themer['color_focus'] >,
			'--mol_theme_control': ReturnType< $ds_themer_page_themer['color_control'] >,
			'--mol_theme_current': ReturnType< $ds_themer_page_themer['color_current'] >,
			'--mol_theme_special': ReturnType< $ds_themer_page_themer['color_special'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_ds_themer_page_themer_48 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_ds_themer_page_themer_49 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $ds_themer_page_themer extends $mol_row {
		Controls_title_text( ): $mol_dimmer
		Controls_title( ): $mol_view
		Backgrounds_title_text( ): $mol_dimmer
		Backgrounds_title( ): $mol_view
		color_back( next?: string ): string
		Back_color( ): $ds_themer_color
		Back_field( ): $mol_form_field
		color_card( next?: string ): string
		Card_color( ): $ds_themer_color
		Card_field( ): $mol_form_field
		color_field( next?: string ): string
		Field_color( ): $ds_themer_color
		Field_field( ): $mol_form_field
		color_hover( next?: string ): string
		Hover_color( ): $ds_themer_color
		Hover_field( ): $mol_form_field
		Backgrounds_section( ): $mol_list
		Text_title_text( ): $mol_dimmer
		Text_title( ): $mol_view
		color_text( next?: string ): string
		Text_color( ): $ds_themer_color
		Text_field( ): $mol_form_field
		color_shade( next?: string ): string
		Shade_color( ): $ds_themer_color
		Shade_field( ): $mol_form_field
		color_line( next?: string ): string
		Line_color( ): $ds_themer_color
		Line_field( ): $mol_form_field
		color_focus( next?: string ): string
		Focus_color( ): $ds_themer_color
		Focus_field( ): $mol_form_field
		Text_section( ): $mol_list
		Controls_section_title_text( ): $mol_dimmer
		Controls_section_title( ): $mol_view
		color_control( next?: string ): string
		Control_color( ): $ds_themer_color
		Control_field( ): $mol_form_field
		color_current( next?: string ): string
		Current_color( ): $ds_themer_color
		Current_field( ): $mol_form_field
		color_special( next?: string ): string
		Special_color( ): $ds_themer_color
		Special_field( ): $mol_form_field
		Controls_section( ): $mol_list
		Controls_inner( ): $mol_list
		Controls( ): $mol_scroll
		Demo_site( ): $ds_themer_demo
		Preview_inner( ): $mol_view
		Preview( ): $mol_scroll
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_ds_themer_page_placeholder_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	export class $ds_themer_page_placeholder extends $mol_page {
		page_title( ): string
		Placeholder_text( ): $mol_text
		title( ): ReturnType< $ds_themer_page_placeholder['page_title'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=themer.view.tree.d.ts.map