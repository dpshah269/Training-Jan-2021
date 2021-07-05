import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WarehouseBase {

//#region warehouseID Prop
        @prop()
        warehouseID : number;
//#endregion warehouseID Prop


//#region warehouseDescription Prop
        @required()
        @maxLength({value:50})
        warehouseDescription : string;
//#endregion warehouseDescription Prop


//#region warehouseAddress1 Prop
        @required()
        @maxLength({value:50})
        warehouseAddress1 : string;
//#endregion warehouseAddress1 Prop


//#region warehouseAddress2 Prop
        @required()
        @maxLength({value:50})
        warehouseAddress2 : string;
//#endregion warehouseAddress2 Prop


//#region warehouseCity Prop
        @required()
        @maxLength({value:30})
        warehouseCity : string;
//#endregion warehouseCity Prop


//#region warehouseState Prop
        @required()
        @maxLength({value:10})
        warehouseState : string;
//#endregion warehouseState Prop


//#region warehouseZip Prop
        @required()
        @maxLength({value:20})
        warehouseZip : string;
//#endregion warehouseZip Prop


//#region warehouseCountry Prop
        @required()
        @maxLength({value:20})
        warehouseCountry : string;
//#endregion warehouseCountry Prop


//#region timeZoneID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        timeZoneID : number;
//#endregion timeZoneID Prop

}