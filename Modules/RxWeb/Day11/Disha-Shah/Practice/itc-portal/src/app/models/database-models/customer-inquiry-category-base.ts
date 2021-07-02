import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerInquiryCategoryBase {

//#region customerInquiryCategoryID Prop
        @prop()
        customerInquiryCategoryID : number;
//#endregion customerInquiryCategoryID Prop


//#region customerInquiryCategoryDescription Prop
        @required()
        @maxLength({value:100})
        customerInquiryCategoryDescription : string;
//#endregion customerInquiryCategoryDescription Prop

}