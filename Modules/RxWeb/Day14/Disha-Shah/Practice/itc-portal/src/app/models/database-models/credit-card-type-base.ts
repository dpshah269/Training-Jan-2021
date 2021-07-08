import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CreditCardTypeBase {

//#region creditCardTypeID Prop
        @prop()
        creditCardTypeID : number;
//#endregion creditCardTypeID Prop


//#region creditCardTypeDescription Prop
        @required()
        @maxLength({value:100})
        creditCardTypeDescription : string;
//#endregion creditCardTypeDescription Prop

}