import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentCardTypeBase {

//#region paymentCardTypeID Prop
        @prop()
        paymentCardTypeID : number;
//#endregion paymentCardTypeID Prop


//#region paymentCardTypeDescription Prop
        @required()
        @maxLength({value:50})
        paymentCardTypeDescription : string;
//#endregion paymentCardTypeDescription Prop

}