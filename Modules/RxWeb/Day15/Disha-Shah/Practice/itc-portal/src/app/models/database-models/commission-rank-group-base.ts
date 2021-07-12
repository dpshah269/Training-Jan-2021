import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionRankGroupBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region rankGroupID Prop
        @prop()
        rankGroupID : number;
//#endregion rankGroupID Prop


//#region rankID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rankID : number;
//#endregion rankID Prop


//#region paidRankID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paidRankID : number;
//#endregion paidRankID Prop


//#region legRankID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        legRankID : number;
//#endregion legRankID Prop

}