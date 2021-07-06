import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemStaticKitMemberBase {

//#region masterItemID Prop
        @prop()
        masterItemID : number;
//#endregion masterItemID Prop


//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region quantity Prop
        @required()
        quantity : number;
//#endregion quantity Prop

}