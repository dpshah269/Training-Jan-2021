import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region earnings Prop
        @required()
        earnings : number;
//#endregion earnings Prop


//#region previousBalance Prop
        @required()
        previousBalance : number;
//#endregion previousBalance Prop


//#region balanceForward Prop
        @required()
        balanceForward : number;
//#endregion balanceForward Prop


//#region fee Prop
        @required()
        fee : number;
//#endregion fee Prop


//#region total Prop
        @required()
        total : number;
//#endregion total Prop

}