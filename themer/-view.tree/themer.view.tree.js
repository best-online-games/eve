	($.$ds_themer) = class $ds_themer extends ($.$mol_page) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		export(next){
			if(next !== undefined) return next;
			return null;
		}
		Export(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Export CSS");
			(obj.click) = (next) => ((this.export(next)));
			return obj;
		}
		copy(next){
			if(next !== undefined) return next;
			return null;
		}
		Copy(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Copy Theme");
			(obj.click) = (next) => ((this.copy(next)));
			return obj;
		}
		reset(next){
			if(next !== undefined) return next;
			return null;
		}
		Reset(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Reset");
			(obj.click) = (next) => ((this.reset(next)));
			return obj;
		}
		Controls_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Theme Settings");
			return obj;
		}
		Controls_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Controls_title_text())]);
			return obj;
		}
		Backgrounds_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Backgrounds");
			return obj;
		}
		Backgrounds_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Backgrounds_title_text())]);
			return obj;
		}
		color_back(next){
			if(next !== undefined) return next;
			return "oklch(20% .01 240deg)";
		}
		Back_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_back(next)));
			return obj;
		}
		Back_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Background");
			(obj.Content) = () => ((this.Back_color()));
			return obj;
		}
		color_card(next){
			if(next !== undefined) return next;
			return "oklch(30% .05 240deg / .25)";
		}
		Card_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_card(next)));
			return obj;
		}
		Card_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Card");
			(obj.Content) = () => ((this.Card_color()));
			return obj;
		}
		color_field(next){
			if(next !== undefined) return next;
			return "oklch(15% 0 240deg / .25)";
		}
		Field_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_field(next)));
			return obj;
		}
		Field_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Field");
			(obj.Content) = () => ((this.Field_color()));
			return obj;
		}
		color_hover(next){
			if(next !== undefined) return next;
			return "oklch(70% 0 240deg / .1)";
		}
		Hover_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_hover(next)));
			return obj;
		}
		Hover_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Hover");
			(obj.Content) = () => ((this.Hover_color()));
			return obj;
		}
		Backgrounds_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Backgrounds_title()), 
				(this.Back_field()), 
				(this.Card_field()), 
				(this.Field_field()), 
				(this.Hover_field())
			]);
			return obj;
		}
		Text_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Text Colors");
			return obj;
		}
		Text_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Text_title_text())]);
			return obj;
		}
		color_text(next){
			if(next !== undefined) return next;
			return "oklch(80% 0 240deg)";
		}
		Text_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_text(next)));
			return obj;
		}
		Text_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Text");
			(obj.Content) = () => ((this.Text_color()));
			return obj;
		}
		color_shade(next){
			if(next !== undefined) return next;
			return "oklch(60% 0 240deg)";
		}
		Shade_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_shade(next)));
			return obj;
		}
		Shade_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Shade");
			(obj.Content) = () => ((this.Shade_color()));
			return obj;
		}
		color_line(next){
			if(next !== undefined) return next;
			return "oklch(60% 0 240deg / .25)";
		}
		Line_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_line(next)));
			return obj;
		}
		Line_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Line");
			(obj.Content) = () => ((this.Line_color()));
			return obj;
		}
		color_focus(next){
			if(next !== undefined) return next;
			return "oklch(80% .2 60deg)";
		}
		Focus_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_focus(next)));
			return obj;
		}
		Focus_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Focus");
			(obj.Content) = () => ((this.Focus_color()));
			return obj;
		}
		Text_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Text_title()), 
				(this.Text_field()), 
				(this.Shade_field()), 
				(this.Line_field()), 
				(this.Focus_field())
			]);
			return obj;
		}
		Controls_section_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Control Colors");
			return obj;
		}
		Controls_section_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Controls_section_title_text())]);
			return obj;
		}
		color_control(next){
			if(next !== undefined) return next;
			return "oklch(70% .1 240deg)";
		}
		Control_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_control(next)));
			return obj;
		}
		Control_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Control");
			(obj.Content) = () => ((this.Control_color()));
			return obj;
		}
		color_current(next){
			if(next !== undefined) return next;
			return "oklch(70% .2 150deg)";
		}
		Current_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_current(next)));
			return obj;
		}
		Current_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Current");
			(obj.Content) = () => ((this.Current_color()));
			return obj;
		}
		color_special(next){
			if(next !== undefined) return next;
			return "oklch(70% .2 330deg)";
		}
		Special_color(){
			const obj = new this.$.$ds_themer_color();
			(obj.value) = (next) => ((this.color_special(next)));
			return obj;
		}
		Special_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Special");
			(obj.Content) = () => ((this.Special_color()));
			return obj;
		}
		Controls_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Controls_section_title()), 
				(this.Control_field()), 
				(this.Current_field()), 
				(this.Special_field())
			]);
			return obj;
		}
		Controls_inner(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Controls_title()), 
				(this.Backgrounds_section()), 
				(this.Text_section()), 
				(this.Controls_section())
			]);
			return obj;
		}
		Controls(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Controls_inner())]);
			return obj;
		}
		Demo_site(){
			const obj = new this.$.$ds_themer_demo();
			return obj;
		}
		Preview_inner(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({
				"--mol_theme_back": (this.color_back()), 
				"--mol_theme_card": (this.color_card()), 
				"--mol_theme_field": (this.color_field()), 
				"--mol_theme_hover": (this.color_hover()), 
				"--mol_theme_text": (this.color_text()), 
				"--mol_theme_shade": (this.color_shade()), 
				"--mol_theme_line": (this.color_line()), 
				"--mol_theme_focus": (this.color_focus()), 
				"--mol_theme_control": (this.color_control()), 
				"--mol_theme_current": (this.color_current()), 
				"--mol_theme_special": (this.color_special())
			});
			(obj.sub) = () => ([(this.Demo_site())]);
			return obj;
		}
		Preview(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Preview_inner())]);
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
		tools(){
			return [
				(this.Export()), 
				(this.Copy()), 
				(this.Reset())
			];
		}
		body(){
			return [(this.Content())];
		}
	};
	($mol_mem(($.$ds_themer.prototype), "Theme"));
	($mol_mem(($.$ds_themer.prototype), "export"));
	($mol_mem(($.$ds_themer.prototype), "Export"));
	($mol_mem(($.$ds_themer.prototype), "copy"));
	($mol_mem(($.$ds_themer.prototype), "Copy"));
	($mol_mem(($.$ds_themer.prototype), "reset"));
	($mol_mem(($.$ds_themer.prototype), "Reset"));
	($mol_mem(($.$ds_themer.prototype), "Controls_title_text"));
	($mol_mem(($.$ds_themer.prototype), "Controls_title"));
	($mol_mem(($.$ds_themer.prototype), "Backgrounds_title_text"));
	($mol_mem(($.$ds_themer.prototype), "Backgrounds_title"));
	($mol_mem(($.$ds_themer.prototype), "color_back"));
	($mol_mem(($.$ds_themer.prototype), "Back_color"));
	($mol_mem(($.$ds_themer.prototype), "Back_field"));
	($mol_mem(($.$ds_themer.prototype), "color_card"));
	($mol_mem(($.$ds_themer.prototype), "Card_color"));
	($mol_mem(($.$ds_themer.prototype), "Card_field"));
	($mol_mem(($.$ds_themer.prototype), "color_field"));
	($mol_mem(($.$ds_themer.prototype), "Field_color"));
	($mol_mem(($.$ds_themer.prototype), "Field_field"));
	($mol_mem(($.$ds_themer.prototype), "color_hover"));
	($mol_mem(($.$ds_themer.prototype), "Hover_color"));
	($mol_mem(($.$ds_themer.prototype), "Hover_field"));
	($mol_mem(($.$ds_themer.prototype), "Backgrounds_section"));
	($mol_mem(($.$ds_themer.prototype), "Text_title_text"));
	($mol_mem(($.$ds_themer.prototype), "Text_title"));
	($mol_mem(($.$ds_themer.prototype), "color_text"));
	($mol_mem(($.$ds_themer.prototype), "Text_color"));
	($mol_mem(($.$ds_themer.prototype), "Text_field"));
	($mol_mem(($.$ds_themer.prototype), "color_shade"));
	($mol_mem(($.$ds_themer.prototype), "Shade_color"));
	($mol_mem(($.$ds_themer.prototype), "Shade_field"));
	($mol_mem(($.$ds_themer.prototype), "color_line"));
	($mol_mem(($.$ds_themer.prototype), "Line_color"));
	($mol_mem(($.$ds_themer.prototype), "Line_field"));
	($mol_mem(($.$ds_themer.prototype), "color_focus"));
	($mol_mem(($.$ds_themer.prototype), "Focus_color"));
	($mol_mem(($.$ds_themer.prototype), "Focus_field"));
	($mol_mem(($.$ds_themer.prototype), "Text_section"));
	($mol_mem(($.$ds_themer.prototype), "Controls_section_title_text"));
	($mol_mem(($.$ds_themer.prototype), "Controls_section_title"));
	($mol_mem(($.$ds_themer.prototype), "color_control"));
	($mol_mem(($.$ds_themer.prototype), "Control_color"));
	($mol_mem(($.$ds_themer.prototype), "Control_field"));
	($mol_mem(($.$ds_themer.prototype), "color_current"));
	($mol_mem(($.$ds_themer.prototype), "Current_color"));
	($mol_mem(($.$ds_themer.prototype), "Current_field"));
	($mol_mem(($.$ds_themer.prototype), "color_special"));
	($mol_mem(($.$ds_themer.prototype), "Special_color"));
	($mol_mem(($.$ds_themer.prototype), "Special_field"));
	($mol_mem(($.$ds_themer.prototype), "Controls_section"));
	($mol_mem(($.$ds_themer.prototype), "Controls_inner"));
	($mol_mem(($.$ds_themer.prototype), "Controls"));
	($mol_mem(($.$ds_themer.prototype), "Demo_site"));
	($mol_mem(($.$ds_themer.prototype), "Preview_inner"));
	($mol_mem(($.$ds_themer.prototype), "Preview"));
	($mol_mem(($.$ds_themer.prototype), "Content"));
	($.$ds_themer_demo) = class $ds_themer_demo extends ($.$mol_page) {
		Settings(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Settings");
			return obj;
		}
		Profile(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Profile");
			return obj;
		}
		Welcome_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Welcome to Theme Editor");
			return obj;
		}
		Welcome_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Welcome_title_text())]);
			return obj;
		}
		Welcome_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("This is a complete preview of your theme. \nAll components are rendered with your custom colors.\nTry changing the colors in the editor to see live updates!");
			return obj;
		}
		Welcome_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Welcome_title()), (this.Welcome_text())]);
			return obj;
		}
		Cards_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Cards Preview");
			return obj;
		}
		Cards_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Cards_title_text())]);
			return obj;
		}
		Card1_title(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Card 1");
			return obj;
		}
		Card1_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("This is a sample card with some text content.");
			return obj;
		}
		Card1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card1_title()), (this.Card1_text())]);
			return obj;
		}
		Card2_title(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Card 2");
			return obj;
		}
		Card2_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Another card to show how themes apply.");
			return obj;
		}
		Card2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card2_title()), (this.Card2_text())]);
			return obj;
		}
		Card3_title(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Card 3");
			return obj;
		}
		Card3_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Cards can have different content and styles.");
			return obj;
		}
		Card3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card3_title()), (this.Card3_text())]);
			return obj;
		}
		Cards_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Card1()), 
				(this.Card2()), 
				(this.Card3())
			]);
			return obj;
		}
		Cards_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Cards_title()), (this.Cards_row())]);
			return obj;
		}
		Forms_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Forms & Inputs");
			return obj;
		}
		Forms_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Forms_title_text())]);
			return obj;
		}
		demo_name(next){
			if(next !== undefined) return next;
			return "";
		}
		Name_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Enter your name");
			(obj.value) = (next) => ((this.demo_name(next)));
			return obj;
		}
		Name_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Name");
			(obj.Content) = () => ((this.Name_input()));
			return obj;
		}
		demo_email(next){
			if(next !== undefined) return next;
			return "";
		}
		Email_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("your@email.com");
			(obj.value) = (next) => ((this.demo_email(next)));
			return obj;
		}
		Email_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Email");
			(obj.Content) = () => ((this.Email_input()));
			return obj;
		}
		demo_message(next){
			if(next !== undefined) return next;
			return "";
		}
		Message_input(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ("Your message...");
			(obj.value) = (next) => ((this.demo_message(next)));
			return obj;
		}
		Message_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Message");
			(obj.Content) = () => ((this.Message_input()));
			return obj;
		}
		demo_check1(next){
			if(next !== undefined) return next;
			return false;
		}
		Check1(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Option 1");
			(obj.checked) = (next) => ((this.demo_check1(next)));
			return obj;
		}
		demo_check2(next){
			if(next !== undefined) return next;
			return false;
		}
		Check2(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Option 2");
			(obj.checked) = (next) => ((this.demo_check2(next)));
			return obj;
		}
		demo_check3(next){
			if(next !== undefined) return next;
			return false;
		}
		Check3(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Option 3");
			(obj.checked) = (next) => ((this.demo_check3(next)));
			return obj;
		}
		Options_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Check1()), 
				(this.Check2()), 
				(this.Check3())
			]);
			return obj;
		}
		Submit_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Submit");
			return obj;
		}
		Cancel_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Cancel");
			return obj;
		}
		Buttons_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Submit_button()), (this.Cancel_button())]);
			return obj;
		}
		Form_demo(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Name_field()), 
				(this.Email_field()), 
				(this.Message_field()), 
				(this.Options_row()), 
				(this.Buttons_row())
			]);
			return obj;
		}
		Forms_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Forms_title()), (this.Form_demo())]);
			return obj;
		}
		Table_title_text(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Table Example");
			return obj;
		}
		Table_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Table_title_text())]);
			return obj;
		}
		Header1(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Name");
			return obj;
		}
		Header2(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Status");
			return obj;
		}
		Header3(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ("Value");
			return obj;
		}
		Table_header(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Header1()), 
				(this.Header2()), 
				(this.Header3())
			]);
			return obj;
		}
		Row1_col1_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Item 1");
			return obj;
		}
		Row1_col1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row1_col1_text())]);
			return obj;
		}
		Row1_col2_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Active");
			return obj;
		}
		Row1_col2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row1_col2_text())]);
			return obj;
		}
		Row1_col3_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("100");
			return obj;
		}
		Row1_col3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row1_col3_text())]);
			return obj;
		}
		Table_row1(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Row1_col1()), 
				(this.Row1_col2()), 
				(this.Row1_col3())
			]);
			return obj;
		}
		Row2_col1_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Item 2");
			return obj;
		}
		Row2_col1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row2_col1_text())]);
			return obj;
		}
		Row2_col2_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Pending");
			return obj;
		}
		Row2_col2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row2_col2_text())]);
			return obj;
		}
		Row2_col3_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("250");
			return obj;
		}
		Row2_col3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row2_col3_text())]);
			return obj;
		}
		Table_row2(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Row2_col1()), 
				(this.Row2_col2()), 
				(this.Row2_col3())
			]);
			return obj;
		}
		Row3_col1_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Item 3");
			return obj;
		}
		Row3_col1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row3_col1_text())]);
			return obj;
		}
		Row3_col2_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Complete");
			return obj;
		}
		Row3_col2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row3_col2_text())]);
			return obj;
		}
		Row3_col3_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("500");
			return obj;
		}
		Row3_col3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Row3_col3_text())]);
			return obj;
		}
		Table_row3(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Row3_col1()), 
				(this.Row3_col2()), 
				(this.Row3_col3())
			]);
			return obj;
		}
		Table_demo(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Table_header()), 
				(this.Table_row1()), 
				(this.Table_row2()), 
				(this.Table_row3())
			]);
			return obj;
		}
		Table_section(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Table_title()), (this.Table_demo())]);
			return obj;
		}
		Demo_content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Welcome_section()), 
				(this.Cards_section()), 
				(this.Forms_section()), 
				(this.Table_section())
			]);
			return obj;
		}
		title(){
			return "Demo Website";
		}
		tools(){
			return [(this.Settings()), (this.Profile())];
		}
		body(){
			return [(this.Demo_content())];
		}
	};
	($mol_mem(($.$ds_themer_demo.prototype), "Settings"));
	($mol_mem(($.$ds_themer_demo.prototype), "Profile"));
	($mol_mem(($.$ds_themer_demo.prototype), "Welcome_title_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Welcome_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Welcome_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Welcome_section"));
	($mol_mem(($.$ds_themer_demo.prototype), "Cards_title_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Cards_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card1_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card1_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card2_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card2_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card3_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card3_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Card3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Cards_row"));
	($mol_mem(($.$ds_themer_demo.prototype), "Cards_section"));
	($mol_mem(($.$ds_themer_demo.prototype), "Forms_title_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Forms_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_name"));
	($mol_mem(($.$ds_themer_demo.prototype), "Name_input"));
	($mol_mem(($.$ds_themer_demo.prototype), "Name_field"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_email"));
	($mol_mem(($.$ds_themer_demo.prototype), "Email_input"));
	($mol_mem(($.$ds_themer_demo.prototype), "Email_field"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_message"));
	($mol_mem(($.$ds_themer_demo.prototype), "Message_input"));
	($mol_mem(($.$ds_themer_demo.prototype), "Message_field"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_check1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Check1"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_check2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Check2"));
	($mol_mem(($.$ds_themer_demo.prototype), "demo_check3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Check3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Options_row"));
	($mol_mem(($.$ds_themer_demo.prototype), "Submit_button"));
	($mol_mem(($.$ds_themer_demo.prototype), "Cancel_button"));
	($mol_mem(($.$ds_themer_demo.prototype), "Buttons_row"));
	($mol_mem(($.$ds_themer_demo.prototype), "Form_demo"));
	($mol_mem(($.$ds_themer_demo.prototype), "Forms_section"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_title_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_title"));
	($mol_mem(($.$ds_themer_demo.prototype), "Header1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Header2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Header3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_header"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col1_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col2_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col3_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row1_col3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_row1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col1_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col2_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col3_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row2_col3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_row2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col1_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col1"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col2_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col2"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col3_text"));
	($mol_mem(($.$ds_themer_demo.prototype), "Row3_col3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_row3"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_demo"));
	($mol_mem(($.$ds_themer_demo.prototype), "Table_section"));
	($mol_mem(($.$ds_themer_demo.prototype), "Demo_content"));

//# sourceMappingURL=themer.view.tree.js.map