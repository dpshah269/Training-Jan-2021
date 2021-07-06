import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerAdjustmentBase {

//#region transactionID Prop
        @prop()
        transactionID : number;
//#endregion transactionID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region customerTransactionTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerTransactionTypeID : number;
//#endregion customerTransactionTypeID Prop


//#region transactionDate Prop
        @required()
        transactionDate : Date;
//#endregion transactionDate Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop


//#region notes Prop
        @required()
        @maxLength({value:50})
        notes : string;
//#endregion notes Prop

}