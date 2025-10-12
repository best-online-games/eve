	($.$ds_themer_color) = class $ds_themer_color extends ($.$mol_view) {
		Input(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.value(next)));
			return obj;
		}
		picker_input(next){
			if(next !== undefined) return next;
			return null;
		}
		Picker(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({"type": "color"});
			(obj.dom_name) = () => ("input");
			(obj.event) = () => ({"input": (next) => (this.picker_input(next))});
			return obj;
		}
		Picker_wrapper(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Picker())]);
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		attr(){
			return {...(super.attr()), "ds_themer_color": ""};
		}
		sub(){
			return [(this.Input()), (this.Picker_wrapper())];
		}
	};
	($mol_mem(($.$ds_themer_color.prototype), "Input"));
	($mol_mem(($.$ds_themer_color.prototype), "picker_input"));
	($mol_mem(($.$ds_themer_color.prototype), "Picker"));
	($mol_mem(($.$ds_themer_color.prototype), "Picker_wrapper"));
	($mol_mem(($.$ds_themer_color.prototype), "value"));

//# sourceMappingURL=color.view.tree.js.map