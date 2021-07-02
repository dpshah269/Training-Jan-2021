import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemDynamicKitCategoryMemberBase {

//#region masterItemID Prop
        @prop()
        masterItemID : number;
//#endregion masterItemID Prop


//#region dynamicKitCategoryID Prop
        @prop()
        dynamicKitCategoryID : number;
//#endregion dynamicKitCategoryID Prop


//#region quantity Prop
        @required()
        quantity : number;
//#endregion quantity Prop

}