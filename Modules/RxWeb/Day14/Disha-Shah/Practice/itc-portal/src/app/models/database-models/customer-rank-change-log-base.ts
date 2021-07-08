import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerRankChangeLogBase {

//#region customerRankChangeLogID Prop
        @prop()
        customerRankChangeLogID : number;
//#endregion customerRankChangeLogID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region rankID Prop
        @prop()
        rankID : number;
//#endregion rankID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}