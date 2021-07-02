import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderChangeLogBase {

//#region orderChangeLogID Prop
        @prop()
        orderChangeLogID : number;
//#endregion orderChangeLogID Prop


//#region orderID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderID : number;
//#endregion orderID Prop


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