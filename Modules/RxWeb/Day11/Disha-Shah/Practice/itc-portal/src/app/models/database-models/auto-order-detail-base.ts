import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderDetailBase {

//#region autoOrderID Prop
        @prop()
        autoOrderID : number;
//#endregion autoOrderID Prop


//#region orderLine Prop
        @prop()
        orderLine : number;
//#endregion orderLine Prop


//#region autoOrderDetailID Prop
        @prop()
        autoOrderDetailID : any;
//#endregion autoOrderDetailID Prop


//#region parentAutoOrderDetailID Prop
        @prop()
        parentAutoOrderDetailID : any;
//#endregion parentAutoOrderDetailID Prop


//#region itemID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        itemID : number;
//#endregion itemID Prop


//#region itemCode Prop
        @prop()
        itemCode : string;
//#endregion itemCode Prop


//#region itemDescription Prop
        @required()
        @maxLength({value:255})
        itemDescription : string;
//#endregion itemDescription Prop


//#region quantity Prop
        @required()
        quantity : number;
//#endregion quantity Prop


//#region priceEach Prop
        @required()
        priceEach : number;
//#endregion priceEach Prop


//#region priceTotal Prop
        @required()
        priceTotal : number;
//#endregion priceTotal Prop


//#region businessVolumeEach Prop
        @required()
        businessVolumeEach : number;
//#endregion businessVolumeEach Prop


//#region businessVolume Prop
        @required()
        businessVolume : number;
//#endregion businessVolume Prop


//#region commissionableVolumeEach Prop
        @required()
        commissionableVolumeEach : number;
//#endregion commissionableVolumeEach Prop


//#region commissionableVolume Prop
        @required()
        commissionableVolume : number;
//#endregion commissionableVolume Prop


//#region priceEachOverride Prop
        @prop()
        priceEachOverride : number;
//#endregion priceEachOverride Prop


//#region taxableEachOverride Prop
        @prop()
        taxableEachOverride : number;
//#endregion taxableEachOverride Prop


//#region shippingPriceEachOverride Prop
        @prop()
        shippingPriceEachOverride : number;
//#endregion shippingPriceEachOverride Prop


//#region businessVolumeEachOverride Prop
        @prop()
        businessVolumeEachOverride : number;
//#endregion businessVolumeEachOverride Prop


//#region commissionableVolumeEachOverride Prop
        @prop()
        commissionableVolumeEachOverride : number;
//#endregion commissionableVolumeEachOverride Prop


//#region parentItemID Prop
        @prop()
        parentItemID : number;
//#endregion parentItemID Prop


//#region reference1 Prop
        @required()
        @maxLength({value:100})
        reference1 : string;
//#endregion reference1 Prop


//#region detailStartDate Prop
        @prop()
        detailStartDate : Date;
//#endregion detailStartDate Prop


//#region detailEndDate Prop
        @prop()
        detailEndDate : Date;
//#endregion detailEndDate Prop


//#region detailInterval Prop
        @prop()
        detailInterval : number;
//#endregion detailInterval Prop


//#region detailNextRunDate Prop
        @prop()
        detailNextRunDate : Date;
//#endregion detailNextRunDate Prop

}