import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemPriceBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region currencyCode Prop
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region priceTypeID Prop
        @prop()
        priceTypeID : number;
//#endregion priceTypeID Prop


//#region price Prop
        @required()
        price : number;
//#endregion price Prop


//#region commissionableVolume Prop
        @required()
        commissionableVolume : number;
//#endregion commissionableVolume Prop


//#region businessVolume Prop
        @required()
        businessVolume : number;
//#endregion businessVolume Prop


//#region taxablePrice Prop
        @required()
        taxablePrice : number;
//#endregion taxablePrice Prop


//#region shippingPrice Prop
        @required()
        shippingPrice : number;
//#endregion shippingPrice Prop


//#region other1Price Prop
        @required()
        other1Price : number;
//#endregion other1Price Prop


//#region other2Price Prop
        @required()
        other2Price : number;
//#endregion other2Price Prop


//#region other3Price Prop
        @required()
        other3Price : number;
//#endregion other3Price Prop


//#region other4Price Prop
        @required()
        other4Price : number;
//#endregion other4Price Prop


//#region other5Price Prop
        @required()
        other5Price : number;
//#endregion other5Price Prop


//#region other6Price Prop
        @required()
        other6Price : number;
//#endregion other6Price Prop


//#region other7Price Prop
        @required()
        other7Price : number;
//#endregion other7Price Prop


//#region other8Price Prop
        @required()
        other8Price : number;
//#endregion other8Price Prop


//#region other9Price Prop
        @required()
        other9Price : number;
//#endregion other9Price Prop


//#region other10Price Prop
        @required()
        other10Price : number;
//#endregion other10Price Prop

}