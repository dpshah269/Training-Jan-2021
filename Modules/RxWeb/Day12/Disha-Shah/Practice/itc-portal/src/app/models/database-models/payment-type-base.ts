import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentTypeBase {

//#region paymentTypeID Prop
        @prop()
        paymentTypeID : number;
//#endregion paymentTypeID Prop


//#region paymentTypeDescription Prop
        @required()
        @maxLength({value:50})
        paymentTypeDescription : string;
//#endregion paymentTypeDescription Prop

}