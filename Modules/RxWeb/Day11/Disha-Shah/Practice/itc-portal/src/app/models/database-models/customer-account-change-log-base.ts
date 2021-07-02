import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerAccountChangeLogBase {

//#region customerAccountChangeLogID Prop
        @prop()
        customerAccountChangeLogID : number;
//#endregion customerAccountChangeLogID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:50})
        modifiedBy : string;
//#endregion modifiedBy Prop


//#region detail Prop
        @required()
        detail : string;
//#endregion detail Prop

}