import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerChangeLogBase {

//#region customerChangeLogID Prop
        @prop()
        customerChangeLogID : number;
//#endregion customerChangeLogID Prop


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
        @maxLength({value:100})
        modifiedBy : string;
//#endregion modifiedBy Prop


//#region detail Prop
        @required()
        @maxLength({value:4000})
        detail : string;
//#endregion detail Prop

}