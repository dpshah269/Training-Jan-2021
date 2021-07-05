import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MerchantDeclineLogBase {

//#region merchantDeclineLogID Prop
        @prop()
        merchantDeclineLogID : number;
//#endregion merchantDeclineLogID Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop


//#region merchantDeclineReasonID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        merchantDeclineReasonID : number;
//#endregion merchantDeclineReasonID Prop


//#region message Prop
        @required()
        @maxLength({value:500})
        message : string;
//#endregion message Prop


//#region merchantTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        merchantTypeID : number;
//#endregion merchantTypeID Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region orderID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderID : number;
//#endregion orderID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region creditCardDisplay Prop
        @maxLength({value:50})
        creditCardDisplay : string;
//#endregion creditCardDisplay Prop


//#region passedCvvCode Prop
        @prop()
        passedCvvCode : boolean;
//#endregion passedCvvCode Prop


//#region expirationMonth Prop
        @prop()
        expirationMonth : number;
//#endregion expirationMonth Prop


//#region expirationYear Prop
        @prop()
        expirationYear : number;
//#endregion expirationYear Prop


//#region billingName Prop
        @maxLength({value:100})
        billingName : string;
//#endregion billingName Prop


//#region billingAddress Prop
        @maxLength({value:100})
        billingAddress : string;
//#endregion billingAddress Prop


//#region billingCity Prop
        @maxLength({value:50})
        billingCity : string;
//#endregion billingCity Prop


//#region billingState Prop
        @maxLength({value:50})
        billingState : string;
//#endregion billingState Prop


//#region billingZip Prop
        @maxLength({value:50})
        billingZip : string;
//#endregion billingZip Prop


//#region billingCountry Prop
        @maxLength({value:50})
        billingCountry : string;
//#endregion billingCountry Prop


//#region additionalReturnData Prop
        @prop()
        additionalReturnData : string;
//#endregion additionalReturnData Prop

}