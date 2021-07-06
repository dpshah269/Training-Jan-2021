import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerInquiryTypeBase {

//#region customerInquiryTypeID Prop
        @prop()
        customerInquiryTypeID : number;
//#endregion customerInquiryTypeID Prop


//#region customerInquiryTypeDescription Prop
        @required()
        @maxLength({value:50})
        customerInquiryTypeDescription : string;
//#endregion customerInquiryTypeDescription Prop

}