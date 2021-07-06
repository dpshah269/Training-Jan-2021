import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SmsStatusBase {

//#region smsStatusID Prop
        @prop()
        smsStatusID : number;
//#endregion smsStatusID Prop


//#region smsStatusDescription Prop
        @required()
        @maxLength({value:50})
        smsStatusDescription : string;
//#endregion smsStatusDescription Prop

}