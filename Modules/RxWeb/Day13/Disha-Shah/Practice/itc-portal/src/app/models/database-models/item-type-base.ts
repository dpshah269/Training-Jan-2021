import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemTypeBase {

//#region itemTypeID Prop
        @prop()
        itemTypeID : number;
//#endregion itemTypeID Prop


//#region itemTypeDescription Prop
        @maxLength({value:50})
        itemTypeDescription : string;
//#endregion itemTypeDescription Prop

}