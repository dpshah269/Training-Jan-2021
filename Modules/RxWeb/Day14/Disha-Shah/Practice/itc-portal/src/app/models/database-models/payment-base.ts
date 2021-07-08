import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentBase {

//#region paymentID Prop
        @prop()
        paymentID : number;
//#endregion paymentID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop


//#region paymentTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentTypeID : number;
//#endregion paymentTypeID Prop


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


//#region warehouseID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        warehouseID : number;
//#endregion warehouseID Prop


//#region billingName Prop
        @maxLength({value:50})
        billingName : string;
//#endregion billingName Prop


//#region creditCardTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        creditCardTypeID : number;
//#endregion creditCardTypeID Prop


//#region creditCardNumber Prop
        @maxLength({value:50})
        creditCardNumber : string;
//#endregion creditCardNumber Prop


//#region authorizationCode Prop
        @maxLength({value:50})
        authorizationCode : string;
//#endregion authorizationCode Prop


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


//#region checkBankName Prop
        @maxLength({value:100})
        checkBankName : string;
//#endregion checkBankName Prop


//#region checkBankAddress Prop
        @maxLength({value:100})
        checkBankAddress : string;
//#endregion checkBankAddress Prop


//#region checkBankCityAddress Prop
        @maxLength({value:50})
        checkBankCityAddress : string;
//#endregion checkBankCityAddress Prop


//#region checkBankStateAddress Prop
        @maxLength({value:50})
        checkBankStateAddress : string;
//#endregion checkBankStateAddress Prop


//#region checkBankZipAddress Prop
        @maxLength({value:50})
        checkBankZipAddress : string;
//#endregion checkBankZipAddress Prop


//#region memo Prop
        @maxLength({value:500})
        memo : string;
//#endregion memo Prop


//#region walletTypeID Prop
        @prop()
        walletTypeID : number;
//#endregion walletTypeID Prop


//#region driversLicenseNumber Prop
        @maxLength({value:50})
        driversLicenseNumber : string;
//#endregion driversLicenseNumber Prop


//#region merchantTypeID Prop
        @prop()
        merchantTypeID : number;
//#endregion merchantTypeID Prop


//#region merchantTransactionKey Prop
        @maxLength({value:200})
        merchantTransactionKey : string;
//#endregion merchantTransactionKey Prop


//#region pointAccountID Prop
        @prop()
        pointAccountID : number;
//#endregion pointAccountID Prop


//#region billingAddress1 Prop
        @maxLength({value:100})
        billingAddress1 : string;
//#endregion billingAddress1 Prop


//#region billingAddress2 Prop
        @maxLength({value:100})
        billingAddress2 : string;
//#endregion billingAddress2 Prop


//#region billingCity Prop
        @maxLength({value:50})
        billingCity : string;
//#endregion billingCity Prop


//#region billingState Prop
        @maxLength({value:50})
        billingState : string;
//#endregion billingState Prop


//#region billingZipAddress Prop
        @maxLength({value:50})
        billingZipAddress : string;
//#endregion billingZipAddress Prop


//#region billingCountry Prop
        @maxLength({value:50})
        billingCountry : string;
//#endregion billingCountry Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}