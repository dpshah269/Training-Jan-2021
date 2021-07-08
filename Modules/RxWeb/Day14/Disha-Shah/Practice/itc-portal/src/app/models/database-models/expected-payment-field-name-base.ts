import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpectedPaymentFieldNameBase {

//#region billingName Prop
        @maxLength({value:200})
        billingName : string;
//#endregion billingName Prop


//#region bankName Prop
        @maxLength({value:200})
        bankName : string;
//#endregion bankName Prop


//#region memo Prop
        @maxLength({value:200})
        memo : string;
//#endregion memo Prop

}