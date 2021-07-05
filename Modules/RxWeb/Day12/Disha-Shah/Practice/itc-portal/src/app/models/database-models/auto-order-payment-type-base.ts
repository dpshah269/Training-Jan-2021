import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderPaymentTypeBase {

//#region autoOrderPaymentTypeID Prop
        @prop()
        autoOrderPaymentTypeID : number;
//#endregion autoOrderPaymentTypeID Prop


//#region autoOrderPaymentTypeDescription Prop
        @required()
        @maxLength({value:50})
        autoOrderPaymentTypeDescription : string;
//#endregion autoOrderPaymentTypeDescription Prop

}