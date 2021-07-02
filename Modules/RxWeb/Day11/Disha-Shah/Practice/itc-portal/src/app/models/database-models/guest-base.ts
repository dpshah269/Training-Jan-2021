import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class GuestBase {

//#region guestID Prop
        @prop()
        guestID : number;
//#endregion guestID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region hostID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        hostID : number;
//#endregion hostID Prop


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


//#region gender Prop
        @required()
        @maxLength({value:1})
        gender : string;
//#endregion gender Prop


//#region guestStatusTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        guestStatusTypeID : number;
//#endregion guestStatusTypeID Prop


//#region languageID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        languageID : number;
//#endregion languageID Prop


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


//#region county Prop
        @required()
        @maxLength({value:50})
        county : string;
//#endregion county Prop


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


//#region email Prop
        @required()
        @maxLength({value:50})
        email : string;
//#endregion email Prop


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


//#region notes Prop
        @prop()
        notes : string;
//#endregion notes Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop


//#region createdBy Prop
        @required()
        @maxLength({value:30})
        createdBy : string;
//#endregion createdBy Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop

}