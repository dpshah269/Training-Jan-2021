import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderStatusChangeLogBase {

//#region autoOrderStatusChangeLogID Prop
        @prop()
        autoOrderStatusChangeLogID : number;
//#endregion autoOrderStatusChangeLogID Prop


//#region autoOrderID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        autoOrderID : number;
//#endregion autoOrderID Prop


//#region autoOrderStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        autoOrderStatusID : number;
//#endregion autoOrderStatusID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}