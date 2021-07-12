import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderStatusChangeLogBase {

//#region orderStatusChangeLogID Prop
        @prop()
        orderStatusChangeLogID : number;
//#endregion orderStatusChangeLogID Prop


//#region orderID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderID : number;
//#endregion orderID Prop


//#region orderStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderStatusID : number;
//#endregion orderStatusID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop

}