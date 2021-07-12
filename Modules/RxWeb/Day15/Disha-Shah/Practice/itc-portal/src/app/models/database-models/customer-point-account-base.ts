import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerPointAccountBase {

//#region pointAccountID Prop
        @prop()
        pointAccountID : number;
//#endregion pointAccountID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region pointBalance Prop
        @required()
        pointBalance : number;
//#endregion pointBalance Prop

}