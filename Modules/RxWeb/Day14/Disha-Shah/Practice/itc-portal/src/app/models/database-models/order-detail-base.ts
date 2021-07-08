import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderDetailBase {

//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


//#region orderLine Prop
        @prop()
        orderLine : number;
//#endregion orderLine Prop


//#region orderDetailID Prop
        @prop()
        orderDetailID : any;
//#endregion orderDetailID Prop


//#region parentOrderDetailID Prop
        @prop()
        parentOrderDetailID : any;
//#endregion parentOrderDetailID Prop


//#region itemID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        itemID : number;
//#endregion itemID Prop


//#region itemCode Prop
        @required()
        @maxLength({value:20})
        itemCode : string;
//#endregion itemCode Prop


//#region itemDescription Prop
        @required()
        @maxLength({value:500})
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


//#region tax Prop
        @required()
        tax : number;
//#endregion tax Prop


//#region weightEach Prop
        @required()
        weightEach : number;
//#endregion weightEach Prop


//#region weight Prop
        @prop()
        weight : number;
//#endregion weight Prop


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


//#region other1Each Prop
        @required()
        other1Each : number;
//#endregion other1Each Prop


//#region other1 Prop
        @required()
        other1 : number;
//#endregion other1 Prop


//#region other2Each Prop
        @required()
        other2Each : number;
//#endregion other2Each Prop


//#region other2 Prop
        @required()
        other2 : number;
//#endregion other2 Prop


//#region other3Each Prop
        @required()
        other3Each : number;
//#endregion other3Each Prop


//#region other3 Prop
        @required()
        other3 : number;
//#endregion other3 Prop


//#region other4Each Prop
        @required()
        other4Each : number;
//#endregion other4Each Prop


//#region other4 Prop
        @required()
        other4 : number;
//#endregion other4 Prop


//#region other5Each Prop
        @required()
        other5Each : number;
//#endregion other5Each Prop


//#region other5 Prop
        @required()
        other5 : number;
//#endregion other5 Prop


//#region originalTaxableEach Prop
        @required()
        originalTaxableEach : number;
//#endregion originalTaxableEach Prop


//#region originalBusinessVolumeEach Prop
        @required()
        originalBusinessVolumeEach : number;
//#endregion originalBusinessVolumeEach Prop


//#region originalCommissionableVolumeEach Prop
        @required()
        originalCommissionableVolumeEach : number;
//#endregion originalCommissionableVolumeEach Prop


//#region other6Each Prop
        @required()
        other6Each : number;
//#endregion other6Each Prop


//#region other6 Prop
        @required()
        other6 : number;
//#endregion other6 Prop


//#region other7Each Prop
        @required()
        other7Each : number;
//#endregion other7Each Prop


//#region other7 Prop
        @required()
        other7 : number;
//#endregion other7 Prop


//#region other8Each Prop
        @required()
        other8Each : number;
//#endregion other8Each Prop


//#region other8 Prop
        @required()
        other8 : number;
//#endregion other8 Prop


//#region other9Each Prop
        @required()
        other9Each : number;
//#endregion other9Each Prop


//#region other9 Prop
        @required()
        other9 : number;
//#endregion other9 Prop


//#region other10Each Prop
        @required()
        other10Each : number;
//#endregion other10Each Prop


//#region other10 Prop
        @required()
        other10 : number;
//#endregion other10 Prop


//#region parentItemID Prop
        @prop()
        parentItemID : number;
//#endregion parentItemID Prop


//#region taxable Prop
        @required()
        taxable : number;
//#endregion taxable Prop


//#region fedTax Prop
        @required()
        fedTax : number;
//#endregion fedTax Prop


//#region stateTax Prop
        @required()
        stateTax : number;
//#endregion stateTax Prop


//#region cityTax Prop
        @required()
        cityTax : number;
//#endregion cityTax Prop


//#region cityLocalTax Prop
        @required()
        cityLocalTax : number;
//#endregion cityLocalTax Prop


//#region countyTax Prop
        @required()
        countyTax : number;
//#endregion countyTax Prop


//#region countyLocalTax Prop
        @required()
        countyLocalTax : number;
//#endregion countyLocalTax Prop


//#region manualTax Prop
        @required()
        manualTax : number;
//#endregion manualTax Prop


//#region isStateTaxOverride Prop
        @required()
        isStateTaxOverride : boolean;
//#endregion isStateTaxOverride Prop


//#region reference1 Prop
        @required()
        @maxLength({value:100})
        reference1 : string;
//#endregion reference1 Prop

}