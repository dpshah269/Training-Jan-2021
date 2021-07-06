import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionCustomerBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region customerTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerTypeID : number;
//#endregion customerTypeID Prop


//#region customerStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerStatusID : number;
//#endregion customerStatusID Prop


//#region rankID Prop
        @prop()
        rankID : number;
//#endregion rankID Prop


//#region newRankID Prop
        @prop()
        newRankID : number;
//#endregion newRankID Prop


//#region paidRankID Prop
        @prop()
        paidRankID : number;
//#endregion paidRankID Prop


//#region country Prop
        @maxLength({value:50})
        country : string;
//#endregion country Prop

}