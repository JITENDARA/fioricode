sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],
       function(oLocal,oModel){
         return{
        createModel : function(){
        var oModel = new oLocal();
        oModel.loadData("model/mockdata/fruit.json");
       return oModel;                  
            },
        createI18nModel : function(){
        var oI18nModel = new oModel({
            bundleUrl : "i18n/i18n.properties"
            });
        // oI18nModel.loadData("dell/i18n");    
        return oI18nModel;
            
            }    
             
             };  
           });