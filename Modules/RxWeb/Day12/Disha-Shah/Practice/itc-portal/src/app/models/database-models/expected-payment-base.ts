import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpectedPaymentBase {

//#region expectedPaymentID Prop
        @prop()
        expectedPaymentID : number;
//#endregion expectedPaymentID Prop


//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


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


//#region creditNumber Prop
        @maxLength({value:50})
        creditNumber : string;
//#endregion creditNumber Prop


//#region creditIssue Prop
        @maxLength({value:10})
        creditIssue : string;
//#endregion creditIssue Prop


//#region creditExpiration Prop
        @prop()
        creditExpiration : Date;
//#endregion creditExpiration Prop


//#region creditAuthorization Prop
        @maxLength({value:50})
        creditAuthorization : string;
//#endregion creditAuthorization Prop


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
        @maxLength({value:2})
        billingCountry : string;
//#endregion billingCountry Prop


//#region bankName Prop
        @maxLength({value:50})
        bankName : string;
//#endregion bankName Prop


//#region bankAddress Prop
        @maxLength({value:200})
        bankAddress : string;
//#endregion bankAddress Prop


//#region bankCity Prop
        @maxLength({value:40})
        bankCity : string;
//#endregion bankCity Prop


//#region bankState Prop
        @maxLength({value:10})
        bankState : string;
//#endregion bankState Prop


//#region bankZip Prop
        @maxLength({value:20})
        bankZip : string;
//#endregion bankZip Prop


//#region expectedPaymentStatusTy Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        expectedPaymentStatusTy : number;
//#endregion expectedPaymentStatusTy Prop


//#region memo Prop
        @maxLength({value:500})
        memo : string;
//#endregion memo Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}