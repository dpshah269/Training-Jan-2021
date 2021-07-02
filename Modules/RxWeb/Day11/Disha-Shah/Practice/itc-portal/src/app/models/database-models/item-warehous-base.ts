import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemWarehousBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region warehouseID Prop
        @prop()
        warehouseID : number;
//#endregion warehouseID Prop


//#region maxAllowedOnOrder Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        maxAllowedOnOrder : number;
//#endregion maxAllowedOnOrder Prop


//#region stockLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        stockLevel : number;
//#endregion stockLevel Prop

}