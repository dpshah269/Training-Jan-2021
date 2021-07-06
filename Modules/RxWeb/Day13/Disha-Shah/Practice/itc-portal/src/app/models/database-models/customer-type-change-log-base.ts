import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerTypeChangeLogBase {

//#region customerTypeChangeLogID Prop
        @prop()
        customerTypeChangeLogID : number;
//#endregion customerTypeChangeLogID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region customerTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerTypeID : number;
//#endregion customerTypeID Prop


//#region prevousCustomerTypeID Prop
        @prop()
        prevousCustomerTypeID : number;
//#endregion prevousCustomerTypeID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:50})
        modifiedBy : string;
//#endregion modifiedBy Prop

}