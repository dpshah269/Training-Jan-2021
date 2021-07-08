import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerTransactionTypeBase {

//#region customerTransactionTypeID Prop
        @prop()
        customerTransactionTypeID : number;
//#endregion customerTransactionTypeID Prop


//#region customerTransactionTypeDescription Prop
        @required()
        @maxLength({value:50})
        customerTransactionTypeDescription : string;
//#endregion customerTransactionTypeDescription Prop

}