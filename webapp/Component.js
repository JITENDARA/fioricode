sap.ui.define(["sap/ui/core/UIComponent"],
	function(UIComponent) {
		return UIComponent.extend("dell.Component", {

			metaData: {},
			init: function() {

				// UIComponent.protoType.init.apply(this);
				UIComponent.prototype.init.apply(this);
			},
			createContent: function() {
				var oApp = new sap.ui.view({
					id: "idAppView",
					viewName: "dell.view.appview",
					type: "XML"
				});
				return oApp;
			},
			destory: function() {

			}

		});

	});