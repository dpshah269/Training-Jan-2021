import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemPointAccountBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region pointAccountID Prop
        @prop()
        pointAccountID : number;
//#endregion pointAccountID Prop


//#region increment Prop
        @required()
        increment : number;
//#endregion increment Prop

}