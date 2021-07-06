import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MerchantDeclineReasonBase {

//#region merchantDeclineReasonID Prop
        @prop()
        merchantDeclineReasonID : number;
//#endregion merchantDeclineReasonID Prop


//#region merchantDeclineReasonDescription Prop
        @required()
        @maxLength({value:50})
        merchantDeclineReasonDescription : string;
//#endregion merchantDeclineReasonDescription Prop

}