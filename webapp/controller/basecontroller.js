sap.ui.define(["sap/ui/core/mvc/Controller"],
        function(baseController){
        return baseController.extend("dell.controller.baseController",{
        
        getAppObject : function(){
            return this.getView().getParent();
            }    
            
            });                          
            });