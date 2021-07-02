import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerInquiryStatusBase {

//#region customerInquiryStatusID Prop
        @prop()
        customerInquiryStatusID : number;
//#endregion customerInquiryStatusID Prop


//#region customerInquiryStatusDescription Prop
        @required()
        @maxLength({value:50})
        customerInquiryStatusDescription : string;
//#endregion customerInquiryStatusDescription Prop

}