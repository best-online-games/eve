declare namespace $ {

	type $mol_string__value_ds_themer_color_1 = $mol_type_enforce<
		ReturnType< $ds_themer_color['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__attr_ds_themer_color_2 = $mol_type_enforce<
		({ 
			'type': string,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__dom_name_ds_themer_color_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__event_ds_themer_color_4 = $mol_type_enforce<
		({ 
			input( next?: ReturnType< $ds_themer_color['picker_input'] > ): ReturnType< $ds_themer_color['picker_input'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_ds_themer_color_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ds_themer_color extends $mol_view {
		Input( ): $mol_string
		picker_input( next?: any ): any
		Picker( ): $mol_view
		Picker_wrapper( ): $mol_view
		value( next?: string ): string
		attr( ): ({ 
			'ds_themer_color': string,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=color.view.tree.d.ts.map