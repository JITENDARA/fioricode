sap.ui.define([
	"dell/controller/basecontroller","dell/model/model","sap/m/MessageBox","sap/m/MessageToast"
], function(Controller,oJitu,oMsg) {
	"use strict";

	return Controller.extend("dell.controller.view2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dell.view.view2
		 */
			onInit: function() {
		      //var oModel = oJitu.createModel();
		  
			},
			onCityConfirm : function(oEvent){
			    var oItem = oEvent.getParameter("selectedItem");
			    sap.ui.getCore().byId(this.inputValue).setValue(oItem.getTitle());
			    },
			cityPopup : null,
			countryPopup : null,
			inputValue  : null,
			onF4Help : function(oEvent){
			 //   input vale for f4
			  this.inputValue = oEvent.getSource().getId();  
			 if(this.cityPopup === null) {
	         this.cityPopup = new sap.ui.xmlfragment("dell.fragments.popup",this);
	         this.getView().addDependent(this.cityPopup);
	         this.cityPopup.bindAggregation("items",{
	             path : "/cities",
	             template : new sap.m.StandardListItem({
	                 title : "{city}",
	                 description : "{famousFor}"                
	                 })        
	             });
	        this.cityPopup.attachConfirm(this.onCityConfirm,this); 
			 }
	        this.cityPopup.open(); 
	         
			    },
			 onFilter : function(){
			   this.countryPopup =  new sap.ui.xmlfragment("dell.fragments.popup",this);
			   this.getView().addDependent(this.countryPopup);
			   this.countryPopup.bindAggregation("items",{
			       path : "/country",
			       template : new sap.m.StandardListItem({
			           title : "{code}",
			           description : "{name}"
			           
			           })
			       });
		     this.countryPopup.open();		 
			     },
			onAccept : function(){
			 var oMsg = new sap.m.MessageBox.confirm("Do you want to add the item to cart",{
			     title : "Confirm",
			     onClose : this.onConfirm
			     });   
			    return oMsg;
			    },
			 onConfirm : function(oAction){
			  if(oAction === "OK"){
			      return sap.m.MessageToast.show("item is Added to cart");
			      }
			      },
			 popover : null,    
			 onPopover : function(oEvent){
			  var  oButton = oEvent.getSource();
			   this.popover = new sap.ui.xmlfragment("dell.fragments.employee",this);
			   this.getView().addDependent(this.popover);
			   this.popover.bindElement("content");
			   this.popover.openBy(oButton);
			   
		     
			     }     
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dell.view.view2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dell.view.view2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dell.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});