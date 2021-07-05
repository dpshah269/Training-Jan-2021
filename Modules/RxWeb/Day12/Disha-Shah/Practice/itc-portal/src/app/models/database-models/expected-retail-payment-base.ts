import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpectedRetailPaymentBase {

//#region retailOrderID Prop
        @prop()
        retailOrderID : number;
//#endregion retailOrderID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region paymentType Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentType : number;
//#endregion paymentType Prop


//#region paymentDate Prop
        @required()
        paymentDate : Date;
//#endregion paymentDate Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region creditCardDescription Prop
        @maxLength({value:50})
        creditCardDescription : string;
//#endregion creditCardDescription Prop


//#region creditCardNumber Prop
        @maxLength({value:50})
        creditCardNumber : string;
//#endregion creditCardNumber Prop


//#region creditCardExpiration Prop
        @prop()
        creditCardExpiration : Date;
//#endregion creditCardExpiration Prop


//#region creditCardAuthorization Prop
        @maxLength({value:50})
        creditCardAuthorization : string;
//#endregion creditCardAuthorization Prop


//#region checkNumber Prop
        @maxLength({value:50})
        checkNumber : string;
//#endregion checkNumber Prop


//#region checkAccountNumber Prop
        @maxLength({value:50})
        checkAccountNumber : string;
//#endregion checkAccountNumber Prop


//#region checkRoutingNumber Prop
        @maxLength({value:50})
        checkRoutingNumber : string;
//#endregion checkRoutingNumber Prop


//#region checkDate Prop
        @prop()
        checkDate : Date;
//#endregion checkDate Prop


//#region billingName Prop
        @maxLength({value:50})
        billingName : string;
//#endregion billingName Prop


//#region billingAddress1 Prop
        @maxLength({value:50})
        billingAddress1 : string;
//#endregion billingAddress1 Prop


//#region billingAddress2 Prop
        @maxLength({value:50})
        billingAddress2 : string;
//#endregion billingAddress2 Prop


//#region billingCity Prop
        @maxLength({value:40})
        billingCity : string;
//#endregion billingCity Prop


//#region billingState Prop
        @maxLength({value:10})
        billingState : string;
//#endregion billingState Prop


//#region billingZip Prop
        @maxLength({value:20})
        billingZip : string;
//#endregion billingZip Prop


//#region billingCountry Prop
        @maxLength({value:20})
        billingCountry : string;
//#endregion billingCountry Prop

}