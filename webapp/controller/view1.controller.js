sap.ui.define([
	"dell/controller/basecontroller", "dell/model/model"
], function(Controller, oJitu) {
	"use strict";

	return Controller.extend("dell.controller.view1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dell.view.view1
		 */
		//	onInit: function() {
		//
		//	},
		onSearch: function(oEvent) {
			var queryString = oEvent.getParameter("query");
			var oFilter1 = new sap.ui.model.Filter("name",
				sap.ui.model.FilterOperator.Contains, queryString);
			var oFilter2 = new sap.ui.model.Filter("benefit",sap.ui.model.FilterOperator.Contains,queryString);
			var mainFilter = new sap.ui.model.Filter({
			    filters : [oFilter1,oFilter2],
			    and     : false
			    });
			var aFilter = [mainFilter];
			var oList = this.getView().byId("idList");
			oList.getBinding("items").filter(aFilter);

		},
		onChange : function(oEvent){
		    var queryString = oEvent.getParameter("newValue");
		    var oFilter1 = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,queryString);
		    var oFilter2 = new sap.ui.model.Filter("benefit",sap.ui.model.FilterOperator.Contains,queryString);
		    var mainFilter = new sap.ui.model.Filter({
		        filters : [oFilter1,oFilter2],
		        and     : false
		        });
		  var aFilter = [mainFilter];
		  var oList = this.getView().byId("idList");
		  oList.getBinding("items").filter(aFilter);	    
		    },
		 itPress : function(oEvent){
		    var listItem = oEvent.getParameter("listItem");
		    var path = listItem.getBindingContextPath();
		    var oApp = this.getAppObject().getParent();
		    var oView2 = oApp.getDetailPages()[0];
		    oView2.bindElement(path);
		    oApp.to(oView2);		     
		     }  

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dell.view.view1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dell.view.view1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dell.view.view1
		 */
		//	onExit: function() {
		//
		//	}

	});

});