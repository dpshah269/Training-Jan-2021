import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemDynamicKitCategoryItemMemberBase {

//#region dynamicKitCategoryID Prop
        @prop()
        dynamicKitCategoryID : number;
//#endregion dynamicKitCategoryID Prop


//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop

}