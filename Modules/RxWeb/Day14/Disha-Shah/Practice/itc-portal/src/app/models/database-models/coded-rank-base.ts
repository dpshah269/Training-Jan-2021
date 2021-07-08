import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CodedRankBase {

//#region codedRankEntryID Prop
        @prop()
        codedRankEntryID : number;
//#endregion codedRankEntryID Prop


//#region codingTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        codingTypeID : number;
//#endregion codingTypeID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region rankID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rankID : number;
//#endregion rankID Prop


//#region codedDate Prop
        @required()
        codedDate : Date;
//#endregion codedDate Prop


//#region codedToCustomerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        codedToCustomerID : number;
//#endregion codedToCustomerID Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}