import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionExchangeRateBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region currencyCode Prop
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region rate Prop
        @required()
        rate : number;
//#endregion rate Prop


//#region fee Prop
        @required()
        fee : number;
//#endregion fee Prop

}