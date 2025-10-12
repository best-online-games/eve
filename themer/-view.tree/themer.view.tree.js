	($.$ds_themer) = class $ds_themer extends ($.$mol_page) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Libraries_title(){
			return "Libraries";
		}
		Libraries_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "libraries"});
			(obj.sub) = () => ([(this.Libraries_title())]);
			return obj;
		}
		Components_title(){
			return "Components";
		}
		Components_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "components"});
			(obj.sub) = () => ([(this.Components_title())]);
			return obj;
		}
		Design_title(){
			return "Design";
		}
		Design_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "design"});
			(obj.sub) = () => ([(this.Design_title())]);
			return obj;
		}
		Icons_title(){
			return "Icons";
		}
		Icons_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "icons"});
			(obj.sub) = () => ([(this.Icons_title())]);
			return obj;
		}
		Themer_title(){
			return "Themer";
		}
		Themer_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "themer"});
			(obj.sub) = () => ([(this.Themer_title())]);
			return obj;
		}
		Media_title(){
			return "Media";
		}
		Media_link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"page": "media"});
			(obj.sub) = () => ([(this.Media_title())]);
			return obj;
		}
		lang(next){
			if(next !== undefined) return next;
			return "en";
		}
		lang_options(){
			return ["en", "ru"];
		}
		Lang_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.lang(next)));
			(obj.options) = () => ((this.lang_options()));
			return obj;
		}
		Telegram_icon(){
			const obj = new this.$.$mol_icon_telegram();
			return obj;
		}
		Telegram_link(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ("Telegram");
			(obj.uri) = () => ("https://t.me/your_channel");
			(obj.sub) = () => ([(this.Telegram_icon())]);
			return obj;
		}
		Github_icon(){
			const obj = new this.$.$mol_icon_github();
			return obj;
		}
		Github_link(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ("GitHub");
			(obj.uri) = () => ("https://github.com/best-online-games/ds");
			(obj.sub) = () => ([(this.Github_icon())]);
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
		page_body(){
			return [];
		}
		Page_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.page_body()));
			return obj;
		}
		title(){
			return "DS Themer";
		}
		plugins(){
			return [(this.Theme())];
		}
		tools(){
			return [
				(this.Lights()), 
				(this.Libraries_link()), 
				(this.Components_link()), 
				(this.Design_link()), 
				(this.Icons_link()), 
				(this.Themer_link()), 
				(this.Media_link()), 
				(this.Lang_select()), 
				(this.Telegram_link()), 
				(this.Github_link()), 
				(this.Export()), 
				(this.Copy()), 
				(this.Reset())
			];
		}
		body(){
			return [(this.Page_content())];
		}
	};
	($mol_mem(($.$ds_themer.prototype), "Theme"));
	($mol_mem(($.$ds_themer.prototype), "Lights"));
	($mol_mem(($.$ds_themer.prototype), "Libraries_link"));
	($mol_mem(($.$ds_themer.prototype), "Components_link"));
	($mol_mem(($.$ds_themer.prototype), "Design_link"));
	($mol_mem(($.$ds_themer.prototype), "Icons_link"));
	($mol_mem(($.$ds_themer.prototype), "Themer_link"));
	($mol_mem(($.$ds_themer.prototype), "Media_link"));
	($mol_mem(($.$ds_themer.prototype), "lang"));
	($mol_mem(($.$ds_themer.prototype), "Lang_select"));
	($mol_mem(($.$ds_themer.prototype), "Telegram_icon"));
	($mol_mem(($.$ds_themer.prototype), "Telegram_link"));
	($mol_mem(($.$ds_themer.prototype), "Github_icon"));
	($mol_mem(($.$ds_themer.prototype), "Github_link"));
	($mol_mem(($.$ds_themer.prototype), "export"));
	($mol_mem(($.$ds_themer.prototype), "Export"));
	($mol_mem(($.$ds_themer.prototype), "copy"));
	($mol_mem(($.$ds_themer.prototype), "Copy"));
	($mol_mem(($.$ds_themer.prototype), "reset"));
	($mol_mem(($.$ds_themer.prototype), "Reset"));
	($mol_mem(($.$ds_themer.prototype), "Page_content"));
	($.$ds_themer_page_themer) = class $ds_themer_page_themer extends ($.$mol_row) {
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
		sub(){
			return [(this.Controls()), (this.Preview())];
		}
	};
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_title_text"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_title"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Backgrounds_title_text"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Backgrounds_title"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_back"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Back_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Back_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_card"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Card_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Card_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Field_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Field_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_hover"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Hover_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Hover_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Backgrounds_section"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Text_title_text"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Text_title"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_text"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Text_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Text_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_shade"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Shade_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Shade_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_line"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Line_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Line_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_focus"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Focus_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Focus_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Text_section"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_section_title_text"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_section_title"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_control"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Control_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Control_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_current"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Current_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Current_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "color_special"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Special_color"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Special_field"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_section"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls_inner"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Controls"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Demo_site"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Preview_inner"));
	($mol_mem(($.$ds_themer_page_themer.prototype), "Preview"));
	($.$ds_themer_page_placeholder) = class $ds_themer_page_placeholder extends ($.$mol_page) {
		page_title(){
			return "";
		}
		Placeholder_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Coming soon...");
			return obj;
		}
		title(){
			return (this.page_title());
		}
		body(){
			return [(this.Placeholder_text())];
		}
	};
	($mol_mem(($.$ds_themer_page_placeholder.prototype), "Placeholder_text"));

//# sourceMappingURL=themer.view.tree.js.map