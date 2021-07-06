import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PointTransactionBase {

//#region pointTransactionID Prop
        @prop()
        pointTransactionID : number;
//#endregion pointTransactionID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region pointAccountID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        pointAccountID : number;
//#endregion pointAccountID Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region pointTransactionTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        pointTransactionTypeID : number;
//#endregion pointTransactionTypeID Prop


//#region transactionDate Prop
        @required()
        transactionDate : Date;
//#endregion transactionDate Prop


//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


//#region reference Prop
        @required()
        @maxLength({value:100})
        reference : string;
//#endregion reference Prop


//#region createdBy Prop
        @required()
        @maxLength({value:30})
        createdBy : string;
//#endregion createdBy Prop

}