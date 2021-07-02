import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderBatchBase {

//#region warehouseID Prop
        @prop()
        warehouseID : number;
//#endregion warehouseID Prop


//#region batchID Prop
        @prop()
        batchID : number;
//#endregion batchID Prop


//#region printedDate Prop
        @prop()
        printedDate : Date;
//#endregion printedDate Prop


//#region totalOrders Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalOrders : number;
//#endregion totalOrders Prop

}