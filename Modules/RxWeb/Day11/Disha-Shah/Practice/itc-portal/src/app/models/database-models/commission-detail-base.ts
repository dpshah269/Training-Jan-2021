import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionDetailBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region commissionDetailID Prop
        @prop()
        commissionDetailID : any;
//#endregion commissionDetailID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region bonusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bonusID : number;
//#endregion bonusID Prop


//#region fromCustomerID Prop
        @prop()
        fromCustomerID : number;
//#endregion fromCustomerID Prop


//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


//#region sourceAmount Prop
        @required()
        sourceAmount : number;
//#endregion sourceAmount Prop


//#region percentage Prop
        @required()
        percentage : number;
//#endregion percentage Prop


//#region commissionAmount Prop
        @required()
        commissionAmount : number;
//#endregion commissionAmount Prop


//#region level Prop
        @prop()
        level : number;
//#endregion level Prop


//#region paidLevel Prop
        @prop()
        paidLevel : number;
//#endregion paidLevel Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region entryCurrencyCode Prop
        @required()
        @maxLength({value:3})
        entryCurrencyCode : string;
//#endregion entryCurrencyCode Prop


//#region entrySourceAmount Prop
        @required()
        entrySourceAmount : number;
//#endregion entrySourceAmount Prop


//#region entryCommissionAmount Prop
        @required()
        entryCommissionAmount : number;
//#endregion entryCommissionAmount Prop


//#region toRankID Prop
        @prop()
        toRankID : number;
//#endregion toRankID Prop


//#region fromRankID Prop
        @prop()
        fromRankID : number;
//#endregion fromRankID Prop

}