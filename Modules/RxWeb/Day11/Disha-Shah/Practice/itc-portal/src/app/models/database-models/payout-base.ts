import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PayoutBase {

//#region payoutID Prop
        @prop()
        payoutID : number;
//#endregion payoutID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region payoutDate Prop
        @required()
        payoutDate : Date;
//#endregion payoutDate Prop


//#region payoutTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        payoutTypeID : number;
//#endregion payoutTypeID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region payeeName Prop
        @maxLength({value:101})
        payeeName : string;
//#endregion payeeName Prop


//#region payeeCompany Prop
        @required()
        @maxLength({value:50})
        payeeCompany : string;
//#endregion payeeCompany Prop


//#region payeeAddress1 Prop
        @maxLength({value:100})
        payeeAddress1 : string;
//#endregion payeeAddress1 Prop


//#region payeeAddress2 Prop
        @maxLength({value:100})
        payeeAddress2 : string;
//#endregion payeeAddress2 Prop


//#region payeeCity Prop
        @maxLength({value:50})
        payeeCity : string;
//#endregion payeeCity Prop


//#region payeeState Prop
        @maxLength({value:50})
        payeeState : string;
//#endregion payeeState Prop


//#region payeeZip Prop
        @maxLength({value:50})
        payeeZip : string;
//#endregion payeeZip Prop


//#region payeeCountry Prop
        @maxLength({value:50})
        payeeCountry : string;
//#endregion payeeCountry Prop


//#region checkNumber Prop
        @prop()
        checkNumber : number;
//#endregion checkNumber Prop


//#region checkDate Prop
        @prop()
        checkDate : Date;
//#endregion checkDate Prop


//#region voidedDate Prop
        @prop()
        voidedDate : Date;
//#endregion voidedDate Prop


//#region depositNumber Prop
        @prop()
        depositNumber : number;
//#endregion depositNumber Prop


//#region isTaxable Prop
        @required()
        isTaxable : boolean;
//#endregion isTaxable Prop


//#region bankAccountID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bankAccountID : number;
//#endregion bankAccountID Prop


//#region reference Prop
        @required()
        @maxLength({value:50})
        reference : string;
//#endregion reference Prop


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