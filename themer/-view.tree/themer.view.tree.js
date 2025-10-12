	($.$ds_themer) = class $ds_themer extends ($.$mol_page) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		hue_deg(){
			return "";
		}
		hue_spread_deg(){
			return "";
		}
		hue(next){
			if(next !== undefined) return next;
			return 240;
		}
		Hue(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.hue(next)));
			(obj.precision_change) = () => (15);
			return obj;
		}
		Hue_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Hue");
			(obj.Content) = () => ((this.Hue()));
			return obj;
		}
		hue_spread(next){
			if(next !== undefined) return next;
			return 90;
		}
		Hue_spread(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.hue_spread(next)));
			(obj.precision_change) = () => (15);
			return obj;
		}
		Hue_spread_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Hue spread");
			(obj.Content) = () => ((this.Hue_spread()));
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Lights_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Lights");
			(obj.Content) = () => ((this.Lights()));
			return obj;
		}
		Controls(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Hue_field()), 
				(this.Hue_spread_field()), 
				(this.Lights_field())
			]);
			return obj;
		}
		Preview_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Theme Preview");
			return obj;
		}
		Preview_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Preview_title_text())]);
			return obj;
		}
		Base_demo(){
			const obj = new this.$.$ds_themer_case();
			(obj.title) = () => ("$mol_theme_base");
			return obj;
		}
		Current_demo(){
			const obj = new this.$.$ds_themer_case();
			(obj.title) = () => ("$mol_theme_current");
			return obj;
		}
		Special_demo(){
			const obj = new this.$.$ds_themer_case();
			(obj.title) = () => ("$mol_theme_special");
			return obj;
		}
		Accent_demo(){
			const obj = new this.$.$ds_themer_case();
			(obj.title) = () => ("$mol_theme_accent");
			return obj;
		}
		Colors_demo(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Base_demo()), 
				(this.Current_demo()), 
				(this.Special_demo()), 
				(this.Accent_demo())
			]);
			return obj;
		}
		Button_demo(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Major Button");
			return obj;
		}
		Button_minor_demo(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Minor Button");
			return obj;
		}
		demo_input(next){
			if(next !== undefined) return next;
			return "Sample text";
		}
		Input_demo(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Text input");
			(obj.value) = (next) => ((this.demo_input(next)));
			return obj;
		}
		demo_check(next){
			if(next !== undefined) return next;
			return false;
		}
		Check_demo(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Checkbox");
			(obj.checked) = (next) => ((this.demo_check(next)));
			return obj;
		}
		Components_demo(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Button_demo()), 
				(this.Button_minor_demo()), 
				(this.Input_demo()), 
				(this.Check_demo())
			]);
			return obj;
		}
		Preview(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Preview_title()), 
				(this.Colors_demo()), 
				(this.Components_demo())
			]);
			return obj;
		}
		Content(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Controls()), (this.Preview())]);
			return obj;
		}
		title(){
			return "Theme Editor";
		}
		plugins(){
			return [(this.Theme())];
		}
		style(){
			return {"--mol_theme_hue": (this.hue_deg()), "--mol_theme_hue_spread": (this.hue_spread_deg())};
		}
		body(){
			return [(this.Content())];
		}
	};
	($mol_mem(($.$ds_themer.prototype), "Theme"));
	($mol_mem(($.$ds_themer.prototype), "hue"));
	($mol_mem(($.$ds_themer.prototype), "Hue"));
	($mol_mem(($.$ds_themer.prototype), "Hue_field"));
	($mol_mem(($.$ds_themer.prototype), "hue_spread"));
	($mol_mem(($.$ds_themer.prototype), "Hue_spread"));
	($mol_mem(($.$ds_themer.prototype), "Hue_spread_field"));
	($mol_mem(($.$ds_themer.prototype), "Lights"));
	($mol_mem(($.$ds_themer.prototype), "Lights_field"));
	($mol_mem(($.$ds_themer.prototype), "Controls"));
	($mol_mem(($.$ds_themer.prototype), "Preview_title_text"));
	($mol_mem(($.$ds_themer.prototype), "Preview_title"));
	($mol_mem(($.$ds_themer.prototype), "Base_demo"));
	($mol_mem(($.$ds_themer.prototype), "Current_demo"));
	($mol_mem(($.$ds_themer.prototype), "Special_demo"));
	($mol_mem(($.$ds_themer.prototype), "Accent_demo"));
	($mol_mem(($.$ds_themer.prototype), "Colors_demo"));
	($mol_mem(($.$ds_themer.prototype), "Button_demo"));
	($mol_mem(($.$ds_themer.prototype), "Button_minor_demo"));
	($mol_mem(($.$ds_themer.prototype), "demo_input"));
	($mol_mem(($.$ds_themer.prototype), "Input_demo"));
	($mol_mem(($.$ds_themer.prototype), "demo_check"));
	($mol_mem(($.$ds_themer.prototype), "Check_demo"));
	($mol_mem(($.$ds_themer.prototype), "Components_demo"));
	($mol_mem(($.$ds_themer.prototype), "Preview"));
	($mol_mem(($.$ds_themer.prototype), "Content"));
	($.$ds_themer_case) = class $ds_themer_case extends ($.$mol_view) {
		Title(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ((this.title()));
			return obj;
		}
		Card_inner(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Title())]);
			return obj;
		}
		Back(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.back");
			return obj;
		}
		Line(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.line");
			return obj;
		}
		Text(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.text");
			return obj;
		}
		Field(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.field");
			return obj;
		}
		Shade(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.shade");
			return obj;
		}
		Focus(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.focus");
			return obj;
		}
		Control(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.control");
			return obj;
		}
		Hover(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ("$mol_theme.hover");
			return obj;
		}
		Card(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Card_inner()), 
				(this.Back()), 
				(this.Line()), 
				(this.Text()), 
				(this.Field()), 
				(this.Shade()), 
				(this.Focus()), 
				(this.Control()), 
				(this.Hover())
			]);
			return obj;
		}
		title(){
			return "";
		}
		sub(){
			return [(this.Card())];
		}
	};
	($mol_mem(($.$ds_themer_case.prototype), "Title"));
	($mol_mem(($.$ds_themer_case.prototype), "Card_inner"));
	($mol_mem(($.$ds_themer_case.prototype), "Back"));
	($mol_mem(($.$ds_themer_case.prototype), "Line"));
	($mol_mem(($.$ds_themer_case.prototype), "Text"));
	($mol_mem(($.$ds_themer_case.prototype), "Field"));
	($mol_mem(($.$ds_themer_case.prototype), "Shade"));
	($mol_mem(($.$ds_themer_case.prototype), "Focus"));
	($mol_mem(($.$ds_themer_case.prototype), "Control"));
	($mol_mem(($.$ds_themer_case.prototype), "Hover"));
	($mol_mem(($.$ds_themer_case.prototype), "Card"));

//# sourceMappingURL=themer.view.tree.js.map