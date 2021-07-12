import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderBase {

//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region orderStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderStatusID : number;
//#endregion orderStatusID Prop


//#region orderDate Prop
        @required()
        orderDate : Date;
//#endregion orderDate Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region warehouseID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        warehouseID : number;
//#endregion warehouseID Prop


//#region shipMethodID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        shipMethodID : number;
//#endregion shipMethodID Prop


//#region orderTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderTypeID : number;
//#endregion orderTypeID Prop


//#region priceTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        priceTypeID : number;
//#endregion priceTypeID Prop


//#region firstName Prop
        @required()
        @maxLength({value:50})
        firstName : string;
//#endregion firstName Prop


//#region middleName Prop
        @required()
        @maxLength({value:50})
        middleName : string;
//#endregion middleName Prop


//#region lastName Prop
        @required()
        @maxLength({value:50})
        lastName : string;
//#endregion lastName Prop


//#region nameSuffix Prop
        @required()
        @maxLength({value:50})
        nameSuffix : string;
//#endregion nameSuffix Prop


//#region company Prop
        @required()
        @maxLength({value:50})
        company : string;
//#endregion company Prop


//#region address1 Prop
        @required()
        @maxLength({value:100})
        address1 : string;
//#endregion address1 Prop


//#region address2 Prop
        @required()
        @maxLength({value:100})
        address2 : string;
//#endregion address2 Prop


//#region address3 Prop
        @required()
        @maxLength({value:100})
        address3 : string;
//#endregion address3 Prop


//#region city Prop
        @required()
        @maxLength({value:50})
        city : string;
//#endregion city Prop


//#region state Prop
        @required()
        @maxLength({value:50})
        state : string;
//#endregion state Prop


//#region zip Prop
        @required()
        @maxLength({value:50})
        zip : string;
//#endregion zip Prop


//#region country Prop
        @required()
        @maxLength({value:50})
        country : string;
//#endregion country Prop


//#region county Prop
        @required()
        @maxLength({value:50})
        county : string;
//#endregion county Prop


//#region email Prop
        @required()
        @maxLength({value:200})
        email : string;
//#endregion email Prop


//#region phone Prop
        @required()
        @maxLength({value:50})
        phone : string;
//#endregion phone Prop


//#region notes Prop
        @required()
        @maxLength({value:500})
        notes : string;
//#endregion notes Prop


//#region total Prop
        @required()
        total : number;
//#endregion total Prop


//#region subTotal Prop
        @required()
        subTotal : number;
//#endregion subTotal Prop


//#region taxTotal Prop
        @required()
        taxTotal : number;
//#endregion taxTotal Prop


//#region shippingTotal Prop
        @required()
        shippingTotal : number;
//#endregion shippingTotal Prop


//#region discountTotal Prop
        @required()
        discountTotal : number;
//#endregion discountTotal Prop


//#region discountPercent Prop
        @required()
        discountPercent : number;
//#endregion discountPercent Prop


//#region weightTotal Prop
        @required()
        weightTotal : number;
//#endregion weightTotal Prop


//#region businessVolumeTotal Prop
        @required()
        businessVolumeTotal : number;
//#endregion businessVolumeTotal Prop


//#region commissionableVolumeTotal Prop
        @required()
        commissionableVolumeTotal : number;
//#endregion commissionableVolumeTotal Prop


//#region trackingNumber1 Prop
        @required()
        @maxLength({value:50})
        trackingNumber1 : string;
//#endregion trackingNumber1 Prop


//#region trackingNumber2 Prop
        @required()
        @maxLength({value:50})
        trackingNumber2 : string;
//#endregion trackingNumber2 Prop


//#region trackingNumber3 Prop
        @required()
        @maxLength({value:50})
        trackingNumber3 : string;
//#endregion trackingNumber3 Prop


//#region trackingNumber4 Prop
        @required()
        @maxLength({value:50})
        trackingNumber4 : string;
//#endregion trackingNumber4 Prop


//#region trackingNumber5 Prop
        @required()
        @maxLength({value:50})
        trackingNumber5 : string;
//#endregion trackingNumber5 Prop


//#region other1Total Prop
        @required()
        other1Total : number;
//#endregion other1Total Prop


//#region other2Total Prop
        @required()
        other2Total : number;
//#endregion other2Total Prop


//#region other3Total Prop
        @required()
        other3Total : number;
//#endregion other3Total Prop


//#region other4Total Prop
        @required()
        other4Total : number;
//#endregion other4Total Prop


//#region other5Total Prop
        @required()
        other5Total : number;
//#endregion other5Total Prop


//#region other6Total Prop
        @required()
        other6Total : number;
//#endregion other6Total Prop


//#region other7Total Prop
        @required()
        other7Total : number;
//#endregion other7Total Prop


//#region other8Total Prop
        @required()
        other8Total : number;
//#endregion other8Total Prop


//#region other9Total Prop
        @required()
        other9Total : number;
//#endregion other9Total Prop


//#region other10Total Prop
        @required()
        other10Total : number;
//#endregion other10Total Prop


//#region shippingTax Prop
        @required()
        shippingTax : number;
//#endregion shippingTax Prop


//#region orderTax Prop
        @required()
        orderTax : number;
//#endregion orderTax Prop


//#region fedTaxTotal Prop
        @required()
        fedTaxTotal : number;
//#endregion fedTaxTotal Prop


//#region stateTaxTotal Prop
        @required()
        stateTaxTotal : number;
//#endregion stateTaxTotal Prop


//#region fedShippingTax Prop
        @required()
        fedShippingTax : number;
//#endregion fedShippingTax Prop


//#region stateShippingTax Prop
        @required()
        stateShippingTax : number;
//#endregion stateShippingTax Prop


//#region cityShippingTax Prop
        @required()
        cityShippingTax : number;
//#endregion cityShippingTax Prop


//#region cityLocalShippingTax Prop
        @required()
        cityLocalShippingTax : number;
//#endregion cityLocalShippingTax Prop


//#region countyShippingTax Prop
        @required()
        countyShippingTax : number;
//#endregion countyShippingTax Prop


//#region countyLocalShippingTax Prop
        @required()
        countyLocalShippingTax : number;
//#endregion countyLocalShippingTax Prop


//#region other11 Prop
        @maxLength({value:200})
        other11 : string;
//#endregion other11 Prop


//#region other12 Prop
        @maxLength({value:200})
        other12 : string;
//#endregion other12 Prop


//#region other13 Prop
        @maxLength({value:200})
        other13 : string;
//#endregion other13 Prop


//#region other14 Prop
        @maxLength({value:200})
        other14 : string;
//#endregion other14 Prop


//#region other15 Prop
        @maxLength({value:200})
        other15 : string;
//#endregion other15 Prop


//#region other16 Prop
        @maxLength({value:200})
        other16 : string;
//#endregion other16 Prop


//#region other17 Prop
        @maxLength({value:200})
        other17 : string;
//#endregion other17 Prop


//#region other18 Prop
        @maxLength({value:200})
        other18 : string;
//#endregion other18 Prop


//#region other19 Prop
        @maxLength({value:200})
        other19 : string;
//#endregion other19 Prop


//#region other20 Prop
        @maxLength({value:200})
        other20 : string;
//#endregion other20 Prop


//#region isCommissionable Prop
        @required()
        isCommissionable : boolean;
//#endregion isCommissionable Prop


//#region autoOrderID Prop
        @prop()
        autoOrderID : number;
//#endregion autoOrderID Prop


//#region returnOrderID Prop
        @prop()
        returnOrderID : number;
//#endregion returnOrderID Prop


//#region replacementOrderID Prop
        @prop()
        replacementOrderID : number;
//#endregion replacementOrderID Prop


//#region parentOrderID Prop
        @prop()
        parentOrderID : number;
//#endregion parentOrderID Prop


//#region batchID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        batchID : number;
//#endregion batchID Prop


//#region declineCount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        declineCount : number;
//#endregion declineCount Prop


//#region transferToCustomerID Prop
        @prop()
        transferToCustomerID : number;
//#endregion transferToCustomerID Prop


//#region partyID Prop
        @prop()
        partyID : number;
//#endregion partyID Prop


//#region webCarrierID1 Prop
        @prop()
        webCarrierID1 : number;
//#endregion webCarrierID1 Prop


//#region webCarrierID2 Prop
        @prop()
        webCarrierID2 : number;
//#endregion webCarrierID2 Prop


//#region webCarrierID3 Prop
        @prop()
        webCarrierID3 : number;
//#endregion webCarrierID3 Prop


//#region webCarrierID4 Prop
        @prop()
        webCarrierID4 : number;
//#endregion webCarrierID4 Prop


//#region webCarrierID5 Prop
        @prop()
        webCarrierID5 : number;
//#endregion webCarrierID5 Prop


//#region shippedDate Prop
        @prop()
        shippedDate : Date;
//#endregion shippedDate Prop


//#region createdDate Prop
        @required()
        createdDate : Date;
//#endregion createdDate Prop


//#region lockedDate Prop
        @prop()
        lockedDate : Date;
//#endregion lockedDate Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region createdBy Prop
        @required()
        @maxLength({value:30})
        createdBy : string;
//#endregion createdBy Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop


//#region suppressPackSlipPrice Prop
        @required()
        suppressPackSlipPrice : boolean;
//#endregion suppressPackSlipPrice Prop


//#region returnCategoryID Prop
        @prop()
        returnCategoryID : number;
//#endregion returnCategoryID Prop


//#region replacementCategoryID Prop
        @prop()
        replacementCategoryID : number;
//#endregion replacementCategoryID Prop


//#region isRMA Prop
        @required()
        isRMA : boolean;
//#endregion isRMA Prop


//#region taxIntegrationCalculate Prop
        @maxLength({value:200})
        taxIntegrationCalculate : string;
//#endregion taxIntegrationCalculate Prop


//#region taxIntegrationCommit Prop
        @maxLength({value:200})
        taxIntegrationCommit : string;
//#endregion taxIntegrationCommit Prop


//#region handlingFee Prop
        @required()
        handlingFee : number;
//#endregion handlingFee Prop


//#region pickupName Prop
        @required()
        @maxLength({value:100})
        pickupName : string;
//#endregion pickupName Prop

}