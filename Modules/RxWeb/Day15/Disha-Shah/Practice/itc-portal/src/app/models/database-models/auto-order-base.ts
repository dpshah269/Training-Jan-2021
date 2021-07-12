import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderBase {

//#region autoOrderID Prop
        @prop()
        autoOrderID : number;
//#endregion autoOrderID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region autoOrderStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        autoOrderStatusID : number;
//#endregion autoOrderStatusID Prop


//#region frequencyTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        frequencyTypeID : number;
//#endregion frequencyTypeID Prop


//#region startDate Prop
        @required()
        startDate : Date;
//#endregion startDate Prop


//#region stopDate Prop
        @prop()
        stopDate : Date;
//#endregion stopDate Prop


//#region lastRunDate Prop
        @prop()
        lastRunDate : Date;
//#endregion lastRunDate Prop


//#region nextRunDate Prop
        @prop()
        nextRunDate : Date;
//#endregion nextRunDate Prop


//#region cancelledDate Prop
        @prop()
        cancelledDate : Date;
//#endregion cancelledDate Prop


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


//#region autoOrderPaymentTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        autoOrderPaymentTypeID : number;
//#endregion autoOrderPaymentTypeID Prop


//#region autoOrderProcessTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        autoOrderProcessTypeID : number;
//#endregion autoOrderProcessTypeID Prop


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


//#region businessVolumeTotal Prop
        @required()
        businessVolumeTotal : number;
//#endregion businessVolumeTotal Prop


//#region commissionableVolumeTotal Prop
        @required()
        commissionableVolumeTotal : number;
//#endregion commissionableVolumeTotal Prop


//#region autoOrderDescription Prop
        @required()
        @maxLength({value:100})
        autoOrderDescription : string;
//#endregion autoOrderDescription Prop


//#region other11 Prop
        @maxLength({value:400})
        other11 : string;
//#endregion other11 Prop


//#region other12 Prop
        @maxLength({value:400})
        other12 : string;
//#endregion other12 Prop


//#region other13 Prop
        @maxLength({value:400})
        other13 : string;
//#endregion other13 Prop


//#region other14 Prop
        @maxLength({value:400})
        other14 : string;
//#endregion other14 Prop


//#region other15 Prop
        @maxLength({value:400})
        other15 : string;
//#endregion other15 Prop


//#region other16 Prop
        @maxLength({value:400})
        other16 : string;
//#endregion other16 Prop


//#region other17 Prop
        @maxLength({value:400})
        other17 : string;
//#endregion other17 Prop


//#region other18 Prop
        @maxLength({value:400})
        other18 : string;
//#endregion other18 Prop


//#region other19 Prop
        @maxLength({value:400})
        other19 : string;
//#endregion other19 Prop


//#region other20 Prop
        @maxLength({value:400})
        other20 : string;
//#endregion other20 Prop


//#region createdDate Prop
        @required()
        createdDate : Date;
//#endregion createdDate Prop


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

}