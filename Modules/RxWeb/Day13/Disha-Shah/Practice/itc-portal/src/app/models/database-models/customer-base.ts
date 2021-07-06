import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerBase {

//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


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


//#region customerTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerTypeID : number;
//#endregion customerTypeID Prop


//#region customerStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerStatusID : number;
//#endregion customerStatusID Prop


//#region email Prop
        @required()
        @maxLength({value:50})
        email : string;
//#endregion email Prop


//#region phone Prop
        @required()
        @maxLength({value:20})
        phone : string;
//#endregion phone Prop


//#region phone2 Prop
        @required()
        @maxLength({value:20})
        phone2 : string;
//#endregion phone2 Prop


//#region mobilePhone Prop
        @required()
        @maxLength({value:20})
        mobilePhone : string;
//#endregion mobilePhone Prop


//#region fax Prop
        @required()
        @maxLength({value:20})
        fax : string;
//#endregion fax Prop


//#region mainAddress1 Prop
        @required()
        @maxLength({value:100})
        mainAddress1 : string;
//#endregion mainAddress1 Prop


//#region mainAddress2 Prop
        @maxLength({value:100})
        mainAddress2 : string;
//#endregion mainAddress2 Prop


//#region mainAddress3 Prop
        @required()
        @maxLength({value:100})
        mainAddress3 : string;
//#endregion mainAddress3 Prop


//#region mainCity Prop
        @required()
        @maxLength({value:50})
        mainCity : string;
//#endregion mainCity Prop


//#region mainState Prop
        @required()
        @maxLength({value:50})
        mainState : string;
//#endregion mainState Prop


//#region mainZip Prop
        @required()
        @maxLength({value:50})
        mainZip : string;
//#endregion mainZip Prop


//#region mainCountry Prop
        @required()
        @maxLength({value:50})
        mainCountry : string;
//#endregion mainCountry Prop


//#region mainCounty Prop
        @required()
        @maxLength({value:50})
        mainCounty : string;
//#endregion mainCounty Prop


//#region mainVerified Prop
        @required()
        mainVerified : boolean;
//#endregion mainVerified Prop


//#region mailAddress1 Prop
        @required()
        @maxLength({value:100})
        mailAddress1 : string;
//#endregion mailAddress1 Prop


//#region mailAddress2 Prop
        @maxLength({value:100})
        mailAddress2 : string;
//#endregion mailAddress2 Prop


//#region mailAddress3 Prop
        @required()
        @maxLength({value:100})
        mailAddress3 : string;
//#endregion mailAddress3 Prop


//#region mailCity Prop
        @required()
        @maxLength({value:50})
        mailCity : string;
//#endregion mailCity Prop


//#region mailState Prop
        @required()
        @maxLength({value:50})
        mailState : string;
//#endregion mailState Prop


//#region mailZip Prop
        @required()
        @maxLength({value:50})
        mailZip : string;
//#endregion mailZip Prop


//#region mailCountry Prop
        @required()
        @maxLength({value:50})
        mailCountry : string;
//#endregion mailCountry Prop


//#region mailCounty Prop
        @required()
        @maxLength({value:50})
        mailCounty : string;
//#endregion mailCounty Prop


//#region mailVerified Prop
        @required()
        mailVerified : boolean;
//#endregion mailVerified Prop


//#region otherAddress1 Prop
        @required()
        @maxLength({value:100})
        otherAddress1 : string;
//#endregion otherAddress1 Prop


//#region otherAddress2 Prop
        @maxLength({value:100})
        otherAddress2 : string;
//#endregion otherAddress2 Prop


//#region otherAddress3 Prop
        @required()
        @maxLength({value:100})
        otherAddress3 : string;
//#endregion otherAddress3 Prop


//#region otherCity Prop
        @required()
        @maxLength({value:50})
        otherCity : string;
//#endregion otherCity Prop


//#region otherState Prop
        @required()
        @maxLength({value:50})
        otherState : string;
//#endregion otherState Prop


//#region otherZip Prop
        @required()
        @maxLength({value:50})
        otherZip : string;
//#endregion otherZip Prop


//#region otherCountry Prop
        @required()
        @maxLength({value:50})
        otherCountry : string;
//#endregion otherCountry Prop


//#region otherCounty Prop
        @required()
        @maxLength({value:50})
        otherCounty : string;
//#endregion otherCounty Prop


//#region otherVerified Prop
        @required()
        otherVerified : boolean;
//#endregion otherVerified Prop


//#region canLogin Prop
        @required()
        canLogin : boolean;
//#endregion canLogin Prop


//#region loginName Prop
        @maxLength({value:100})
        loginName : string;
//#endregion loginName Prop


//#region passwordHash Prop
        @maxLength({value:50})
        passwordHash : any;
//#endregion passwordHash Prop


//#region rankID Prop
        @prop()
        rankID : number;
//#endregion rankID Prop


//#region enrollerID Prop
        @prop()
        enrollerID : number;
//#endregion enrollerID Prop


//#region sponsorID Prop
        @prop()
        sponsorID : number;
//#endregion sponsorID Prop


//#region birthDate Prop
        @prop()
        birthDate : Date;
//#endregion birthDate Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region payableToName Prop
        @required()
        @maxLength({value:50})
        payableToName : string;
//#endregion payableToName Prop


//#region defaultWarehouseID Prop
        @prop()
        defaultWarehouseID : number;
//#endregion defaultWarehouseID Prop


//#region payableTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        payableTypeID : number;
//#endregion payableTypeID Prop


//#region checkThreshold Prop
        @required()
        checkThreshold : number;
//#endregion checkThreshold Prop


//#region languageID Prop
        @prop()
        languageID : number;
//#endregion languageID Prop


//#region gender Prop
        @required()
        @maxLength({value:1})
        gender : string;
//#endregion gender Prop


//#region taxCode Prop
        @maxLength({value:50})
        taxCode : string;
//#endregion taxCode Prop


//#region taxCodeTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxCodeTypeID : number;
//#endregion taxCodeTypeID Prop


//#region isSalesTaxExempt Prop
        @required()
        isSalesTaxExempt : boolean;
//#endregion isSalesTaxExempt Prop


//#region salesTaxCode Prop
        @maxLength({value:50})
        salesTaxCode : string;
//#endregion salesTaxCode Prop


//#region salesTaxExemptExpireDate Prop
        @prop()
        salesTaxExemptExpireDate : Date;
//#endregion salesTaxExemptExpireDate Prop


//#region vatRegistration Prop
        @required()
        @maxLength({value:50})
        vatRegistration : string;
//#endregion vatRegistration Prop


//#region binaryPlacementTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        binaryPlacementTypeID : number;
//#endregion binaryPlacementTypeID Prop


//#region useBinaryHoldingTank Prop
        @required()
        useBinaryHoldingTank : boolean;
//#endregion useBinaryHoldingTank Prop


//#region isInBinaryHoldingTank Prop
        @required()
        isInBinaryHoldingTank : boolean;
//#endregion isInBinaryHoldingTank Prop


//#region isEmailSubscribed Prop
        @prop()
        isEmailSubscribed : boolean;
//#endregion isEmailSubscribed Prop


//#region emailSubscribeIP Prop
        @maxLength({value:50})
        emailSubscribeIP : string;
//#endregion emailSubscribeIP Prop


//#region isSMSSubscribed Prop
        @prop()
        isSMSSubscribed : boolean;
//#endregion isSMSSubscribed Prop


//#region notes Prop
        @prop()
        notes : string;
//#endregion notes Prop


//#region field1 Prop
        @required()
        @maxLength({value:100})
        field1 : string;
//#endregion field1 Prop


//#region field2 Prop
        @required()
        @maxLength({value:100})
        field2 : string;
//#endregion field2 Prop


//#region field3 Prop
        @required()
        @maxLength({value:100})
        field3 : string;
//#endregion field3 Prop


//#region field4 Prop
        @required()
        @maxLength({value:100})
        field4 : string;
//#endregion field4 Prop


//#region field5 Prop
        @required()
        @maxLength({value:100})
        field5 : string;
//#endregion field5 Prop


//#region field6 Prop
        @required()
        @maxLength({value:100})
        field6 : string;
//#endregion field6 Prop


//#region field7 Prop
        @required()
        @maxLength({value:100})
        field7 : string;
//#endregion field7 Prop


//#region field8 Prop
        @required()
        @maxLength({value:100})
        field8 : string;
//#endregion field8 Prop


//#region field9 Prop
        @required()
        @maxLength({value:100})
        field9 : string;
//#endregion field9 Prop


//#region field10 Prop
        @required()
        @maxLength({value:100})
        field10 : string;
//#endregion field10 Prop


//#region field11 Prop
        @required()
        @maxLength({value:100})
        field11 : string;
//#endregion field11 Prop


//#region field12 Prop
        @required()
        @maxLength({value:100})
        field12 : string;
//#endregion field12 Prop


//#region field13 Prop
        @required()
        @maxLength({value:100})
        field13 : string;
//#endregion field13 Prop


//#region field14 Prop
        @required()
        @maxLength({value:100})
        field14 : string;
//#endregion field14 Prop


//#region field15 Prop
        @required()
        @maxLength({value:100})
        field15 : string;
//#endregion field15 Prop


//#region date1 Prop
        @prop()
        date1 : Date;
//#endregion date1 Prop


//#region date2 Prop
        @prop()
        date2 : Date;
//#endregion date2 Prop


//#region date3 Prop
        @prop()
        date3 : Date;
//#endregion date3 Prop


//#region date4 Prop
        @prop()
        date4 : Date;
//#endregion date4 Prop


//#region date5 Prop
        @prop()
        date5 : Date;
//#endregion date5 Prop


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


//#region emailUnsubscribeDate Prop
        @prop()
        emailUnsubscribeDate : Date;
//#endregion emailUnsubscribeDate Prop


//#region emailSubscribeDate Prop
        @prop()
        emailSubscribeDate : Date;
//#endregion emailSubscribeDate Prop


//#region sMSSubscribeDate Prop
        @prop()
        sMSSubscribeDate : Date;
//#endregion sMSSubscribeDate Prop


//#region sMSUnsubscribeDate Prop
        @prop()
        sMSUnsubscribeDate : Date;
//#endregion sMSUnsubscribeDate Prop


//#region terminationReason Prop
        @prop()
        terminationReason : number;
//#endregion terminationReason Prop

}