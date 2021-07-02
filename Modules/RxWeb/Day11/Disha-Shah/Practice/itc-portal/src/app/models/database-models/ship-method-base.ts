import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ShipMethodBase {

//#region shipMethodID Prop
        @prop()
        shipMethodID : number;
//#endregion shipMethodID Prop


//#region shipMethodDescription Prop
        @maxLength({value:50})
        shipMethodDescription : string;
//#endregion shipMethodDescription Prop


//#region warehouseID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        warehouseID : number;
//#endregion warehouseID Prop


//#region shipCarrierID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        shipCarrierID : number;
//#endregion shipCarrierID Prop


//#region displayOnWeb Prop
        @required()
        displayOnWeb : boolean;
//#endregion displayOnWeb Prop

}