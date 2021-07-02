import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemDynamicKitCategoryBase {

//#region dynamicKitCategoryID Prop
        @prop()
        dynamicKitCategoryID : number;
//#endregion dynamicKitCategoryID Prop


//#region dynamicKitCategoryDescription Prop
        @required()
        @maxLength({value:50})
        dynamicKitCategoryDescription : string;
//#endregion dynamicKitCategoryDescription Prop

}