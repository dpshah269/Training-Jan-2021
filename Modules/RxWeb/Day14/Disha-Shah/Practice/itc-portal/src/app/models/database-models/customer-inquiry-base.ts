import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerInquiryBase {

//#region customerInquiryID Prop
        @prop()
        customerInquiryID : number;
//#endregion customerInquiryID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region customerInquiryTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerInquiryTypeID : number;
//#endregion customerInquiryTypeID Prop


//#region customerInquiryCategoryID Prop
        @prop()
        customerInquiryCategoryID : number;
//#endregion customerInquiryCategoryID Prop


//#region customerInquiryStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerInquiryStatusID : number;
//#endregion customerInquiryStatusID Prop


//#region parentID Prop
        @prop()
        parentID : number;
//#endregion parentID Prop


//#region createdDate Prop
        @required()
        createdDate : Date;
//#endregion createdDate Prop


//#region description Prop
        @required()
        @maxLength({value:200})
        description : string;
//#endregion description Prop


//#region detail Prop
        @required()
        detail : string;
//#endregion detail Prop


//#region createdBy Prop
        @maxLength({value:50})
        createdBy : string;
//#endregion createdBy Prop


//#region assignedTo Prop
        @maxLength({value:50})
        assignedTo : string;
//#endregion assignedTo Prop


//#region closedDate Prop
        @prop()
        closedDate : Date;
//#endregion closedDate Prop


//#region closedBy Prop
        @maxLength({value:50})
        closedBy : string;
//#endregion closedBy Prop


//#region reference Prop
        @required()
        @maxLength({value:200})
        reference : string;
//#endregion reference Prop

}