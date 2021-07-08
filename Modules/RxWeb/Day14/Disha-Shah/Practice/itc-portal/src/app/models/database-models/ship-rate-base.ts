import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ShipRateBase {

//#region shipMethodID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        shipMethodID : number;
//#endregion shipMethodID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region chargeLineID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        chargeLineID : number;
//#endregion chargeLineID Prop


//#region minRange Prop
        @required()
        minRange : number;
//#endregion minRange Prop


//#region maxRange Prop
        @required()
        maxRange : number;
//#endregion maxRange Prop


//#region flatAmount Prop
        @required()
        flatAmount : number;
//#endregion flatAmount Prop


//#region percentageAmount Prop
        @required()
        percentageAmount : number;
//#endregion percentageAmount Prop


//#region minCharge Prop
        @required()
        minCharge : number;
//#endregion minCharge Prop


//#region byPrice Prop
        @required()
        byPrice : boolean;
//#endregion byPrice Prop


//#region byWeight Prop
        @required()
        byWeight : boolean;
//#endregion byWeight Prop


//#region usePercentage Prop
        @required()
        usePercentage : boolean;
//#endregion usePercentage Prop

}