import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PointTransactionTypeBase {

//#region pointTransactionTypeID Prop
        @prop()
        pointTransactionTypeID : number;
//#endregion pointTransactionTypeID Prop


//#region pointTransactionTypeDescription Prop
        @required()
        @maxLength({value:50})
        pointTransactionTypeDescription : string;
//#endregion pointTransactionTypeDescription Prop

}