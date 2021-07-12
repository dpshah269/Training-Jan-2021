import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ShipCarrierBase {

//#region shipCarrierID Prop
        @prop()
        shipCarrierID : number;
//#endregion shipCarrierID Prop


//#region shipCarrierDescription Prop
        @required()
        @maxLength({value:50})
        shipCarrierDescription : string;
//#endregion shipCarrierDescription Prop


//#region trackingUrl Prop
        @maxLength({value:255})
        trackingUrl : string;
//#endregion trackingUrl Prop

}