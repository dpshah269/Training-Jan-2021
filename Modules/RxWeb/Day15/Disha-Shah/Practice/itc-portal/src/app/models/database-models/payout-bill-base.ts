import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PayoutBillBase {

//#region transactionID Prop
        @prop()
        transactionID : number;
//#endregion transactionID Prop


//#region payoutID Prop
        @prop()
        payoutID : number;
//#endregion payoutID Prop


//#region billID Prop
        @prop()
        billID : number;
//#endregion billID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}