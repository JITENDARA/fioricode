sap.ui.define([
	"dell/controller/basecontroller","dell/model/model"
], function(Controller,oJitu) {
	"use strict";

	return Controller.extend("dell.controller.appview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dell.view.appview
		 */
			onInit: function() {
		     var oModel = oJitu.createModel();
		     this.getView().setModel(oModel);
		     var oResModel = oJitu.createI18nModel();
		     this.getView().setModel(oResModel,"superman");
		  // create 2 view object for 2 views
		  var oView1 = new sap.ui.view({
		      id : "idVIew1",
		      viewName : "dell.view.view1",
		      type   : "XML"
		       });
		   var oView2 = new sap.ui.view({
		       id : "idVIew2",
		       viewName : "dell.view.view2",
		       type  : "XML"
		        });
		    var oEmpty = new sap.ui.view({
		        id : "idEmpty",
		        viewName : "dell.view.empty",
		        type    : "XML"		        
		        });    
		  var oApp = this.getView().byId("myApp");
		  oApp.addMasterPage(oView1);
		  oApp.addDetailPage(oView2);
		  oApp.addDetailPage(oEmpty);
		  
		  oApp.setInitialDetail(oEmpty);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dell.view.appview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dell.view.appview
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dell.view.appview
		 */
		//	onExit: function() {
		//
		//	}

	});

});