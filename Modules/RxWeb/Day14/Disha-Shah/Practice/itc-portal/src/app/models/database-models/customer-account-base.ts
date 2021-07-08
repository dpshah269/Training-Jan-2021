import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerAccountBase {

//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region primaryCreditCardDisplay Prop
        @maxLength({value:50})
        primaryCreditCardDisplay : string;
//#endregion primaryCreditCardDisplay Prop


//#region primaryExpirationMonth Prop
        @prop()
        primaryExpirationMonth : number;
//#endregion primaryExpirationMonth Prop


//#region primaryExpirationYear Prop
        @prop()
        primaryExpirationYear : number;
//#endregion primaryExpirationYear Prop


//#region primaryCreditCardTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        primaryCreditCardTypeID : number;
//#endregion primaryCreditCardTypeID Prop


//#region primaryBillingName Prop
        @required()
        @maxLength({value:50})
        primaryBillingName : string;
//#endregion primaryBillingName Prop


//#region primaryBillingAddress Prop
        @maxLength({value:100})
        primaryBillingAddress : string;
//#endregion primaryBillingAddress Prop


//#region primaryBillingAddress2 Prop
        @maxLength({value:100})
        primaryBillingAddress2 : string;
//#endregion primaryBillingAddress2 Prop


//#region primaryBillingCity Prop
        @maxLength({value:50})
        primaryBillingCity : string;
//#endregion primaryBillingCity Prop


//#region primaryBillingState Prop
        @maxLength({value:50})
        primaryBillingState : string;
//#endregion primaryBillingState Prop


//#region primaryBillingZip Prop
        @maxLength({value:50})
        primaryBillingZip : string;
//#endregion primaryBillingZip Prop


//#region primaryBillingCountry Prop
        @maxLength({value:50})
        primaryBillingCountry : string;
//#endregion primaryBillingCountry Prop


//#region secondaryCreditCardDisplay Prop
        @maxLength({value:50})
        secondaryCreditCardDisplay : string;
//#endregion secondaryCreditCardDisplay Prop


//#region secondaryExpirationMonth Prop
        @prop()
        secondaryExpirationMonth : number;
//#endregion secondaryExpirationMonth Prop


//#region secondaryExpirationYear Prop
        @prop()
        secondaryExpirationYear : number;
//#endregion secondaryExpirationYear Prop


//#region secondaryCreditCardTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        secondaryCreditCardTypeID : number;
//#endregion secondaryCreditCardTypeID Prop


//#region secondaryBillingName Prop
        @required()
        @maxLength({value:50})
        secondaryBillingName : string;
//#endregion secondaryBillingName Prop


//#region secondaryBillingAddress Prop
        @maxLength({value:100})
        secondaryBillingAddress : string;
//#endregion secondaryBillingAddress Prop


//#region secondaryBillingAddress2 Prop
        @maxLength({value:100})
        secondaryBillingAddress2 : string;
//#endregion secondaryBillingAddress2 Prop


//#region secondaryBillingCity Prop
        @maxLength({value:50})
        secondaryBillingCity : string;
//#endregion secondaryBillingCity Prop


//#region secondaryBillingState Prop
        @maxLength({value:50})
        secondaryBillingState : string;
//#endregion secondaryBillingState Prop


//#region secondaryBillingZip Prop
        @maxLength({value:50})
        secondaryBillingZip : string;
//#endregion secondaryBillingZip Prop


//#region secondaryBillingCountry Prop
        @maxLength({value:50})
        secondaryBillingCountry : string;
//#endregion secondaryBillingCountry Prop


//#region bankAccountNumber Prop
        @maxLength({value:50})
        bankAccountNumber : string;
//#endregion bankAccountNumber Prop


//#region bankRoutingNumber Prop
        @required()
        @maxLength({value:50})
        bankRoutingNumber : string;
//#endregion bankRoutingNumber Prop


//#region bankNameOnAccount Prop
        @required()
        @maxLength({value:50})
        bankNameOnAccount : string;
//#endregion bankNameOnAccount Prop


//#region bankAccountAddress Prop
        @maxLength({value:100})
        bankAccountAddress : string;
//#endregion bankAccountAddress Prop


//#region bankAccountCity Prop
        @maxLength({value:50})
        bankAccountCity : string;
//#endregion bankAccountCity Prop


//#region bankAccountState Prop
        @maxLength({value:50})
        bankAccountState : string;
//#endregion bankAccountState Prop


//#region bankAccountZip Prop
        @maxLength({value:50})
        bankAccountZip : string;
//#endregion bankAccountZip Prop


//#region bankAccountCountry Prop
        @maxLength({value:50})
        bankAccountCountry : string;
//#endregion bankAccountCountry Prop


//#region driversLicenseNumber Prop
        @required()
        @maxLength({value:50})
        driversLicenseNumber : string;
//#endregion driversLicenseNumber Prop


//#region depositNameOnAcount Prop
        @required()
        @maxLength({value:50})
        depositNameOnAcount : string;
//#endregion depositNameOnAcount Prop


//#region depositAccountNumber Prop
        @required()
        @maxLength({value:50})
        depositAccountNumber : string;
//#endregion depositAccountNumber Prop


//#region depositRoutingNumber Prop
        @required()
        @maxLength({value:50})
        depositRoutingNumber : string;
//#endregion depositRoutingNumber Prop


//#region iban Prop
        @required()
        @maxLength({value:50})
        iban : string;
//#endregion iban Prop


//#region swiftCode Prop
        @required()
        @maxLength({value:50})
        swiftCode : string;
//#endregion swiftCode Prop


//#region checkIban Prop
        @required()
        @maxLength({value:50})
        checkIban : string;
//#endregion checkIban Prop


//#region checkSwiftCode Prop
        @required()
        @maxLength({value:50})
        checkSwiftCode : string;
//#endregion checkSwiftCode Prop


//#region depositBankName Prop
        @required()
        @maxLength({value:100})
        depositBankName : string;
//#endregion depositBankName Prop


//#region depositBankAddress Prop
        @required()
        @maxLength({value:250})
        depositBankAddress : string;
//#endregion depositBankAddress Prop


//#region depositBankCity Prop
        @required()
        @maxLength({value:50})
        depositBankCity : string;
//#endregion depositBankCity Prop


//#region depositBankState Prop
        @required()
        @maxLength({value:50})
        depositBankState : string;
//#endregion depositBankState Prop


//#region depositBankZip Prop
        @required()
        @maxLength({value:50})
        depositBankZip : string;
//#endregion depositBankZip Prop


//#region depositBankCountry Prop
        @required()
        @maxLength({value:50})
        depositBankCountry : string;
//#endregion depositBankCountry Prop


//#region primaryWalletTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        primaryWalletTypeID : number;
//#endregion primaryWalletTypeID Prop


//#region primaryWalletAccount Prop
        @prop()
        primaryWalletAccount : string;
//#endregion primaryWalletAccount Prop


//#region primaryWalletOther1 Prop
        @maxLength({value:200})
        primaryWalletOther1 : string;
//#endregion primaryWalletOther1 Prop


//#region primaryWalletOther2 Prop
        @maxLength({value:200})
        primaryWalletOther2 : string;
//#endregion primaryWalletOther2 Prop


//#region primaryWalletOther3 Prop
        @maxLength({value:200})
        primaryWalletOther3 : string;
//#endregion primaryWalletOther3 Prop


//#region secondaryWalletTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        secondaryWalletTypeID : number;
//#endregion secondaryWalletTypeID Prop


//#region secondaryWalletAccount Prop
        @prop()
        secondaryWalletAccount : string;
//#endregion secondaryWalletAccount Prop


//#region secondaryWalletOther1 Prop
        @maxLength({value:200})
        secondaryWalletOther1 : string;
//#endregion secondaryWalletOther1 Prop


//#region secondaryWalletOther2 Prop
        @maxLength({value:200})
        secondaryWalletOther2 : string;
//#endregion secondaryWalletOther2 Prop


//#region secondaryWalletOther3 Prop
        @maxLength({value:200})
        secondaryWalletOther3 : string;
//#endregion secondaryWalletOther3 Prop


//#region tertiaryWalletTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        tertiaryWalletTypeID : number;
//#endregion tertiaryWalletTypeID Prop


//#region tertiaryWalletAccount Prop
        @prop()
        tertiaryWalletAccount : string;
//#endregion tertiaryWalletAccount Prop


//#region tertiaryWalletOther1 Prop
        @maxLength({value:200})
        tertiaryWalletOther1 : string;
//#endregion tertiaryWalletOther1 Prop


//#region tertiaryWalletOther2 Prop
        @maxLength({value:200})
        tertiaryWalletOther2 : string;
//#endregion tertiaryWalletOther2 Prop


//#region tertiaryWalletOther3 Prop
        @maxLength({value:200})
        tertiaryWalletOther3 : string;
//#endregion tertiaryWalletOther3 Prop


//#region quaternaryWalletTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        quaternaryWalletTypeID : number;
//#endregion quaternaryWalletTypeID Prop


//#region quaternaryWalletAccount Prop
        @prop()
        quaternaryWalletAccount : string;
//#endregion quaternaryWalletAccount Prop


//#region quaternaryWalletOther1 Prop
        @maxLength({value:200})
        quaternaryWalletOther1 : string;
//#endregion quaternaryWalletOther1 Prop


//#region quaternaryWalletOther2 Prop
        @maxLength({value:200})
        quaternaryWalletOther2 : string;
//#endregion quaternaryWalletOther2 Prop


//#region quaternaryWalletOther3 Prop
        @maxLength({value:200})
        quaternaryWalletOther3 : string;
//#endregion quaternaryWalletOther3 Prop


//#region quinaryWalletTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        quinaryWalletTypeID : number;
//#endregion quinaryWalletTypeID Prop


//#region quinaryWalletAccount Prop
        @prop()
        quinaryWalletAccount : string;
//#endregion quinaryWalletAccount Prop


//#region quinaryWalletOther1 Prop
        @maxLength({value:200})
        quinaryWalletOther1 : string;
//#endregion quinaryWalletOther1 Prop


//#region quinaryWalletOther2 Prop
        @maxLength({value:200})
        quinaryWalletOther2 : string;
//#endregion quinaryWalletOther2 Prop


//#region quinaryWalletOther3 Prop
        @maxLength({value:200})
        quinaryWalletOther3 : string;
//#endregion quinaryWalletOther3 Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:50})
        modifiedBy : string;
//#endregion modifiedBy Prop


//#region bankAccountType Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bankAccountType : number;
//#endregion bankAccountType Prop

}