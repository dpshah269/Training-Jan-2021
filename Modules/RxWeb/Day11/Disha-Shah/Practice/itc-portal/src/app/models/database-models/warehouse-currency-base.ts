import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WarehouseCurrencyBase {

//#region warehouseID Prop
        @prop()
        warehouseID : number;
//#endregion warehouseID Prop


//#region currencyCode Prop
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region priority Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        priority : number;
//#endregion priority Prop

}