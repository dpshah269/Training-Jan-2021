import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemGroupMemberBase {

//#region masterItemID Prop
        @prop()
        masterItemID : number;
//#endregion masterItemID Prop


//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region priority Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        priority : number;
//#endregion priority Prop


//#region groupMemberDescription Prop
        @required()
        @maxLength({value:100})
        groupMemberDescription : string;
//#endregion groupMemberDescription Prop

}