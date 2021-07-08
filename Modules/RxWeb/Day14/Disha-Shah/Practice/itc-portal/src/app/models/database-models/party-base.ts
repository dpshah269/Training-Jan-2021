import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PartyBase {

//#region partyID Prop
        @prop()
        partyID : number;
//#endregion partyID Prop


//#region hostID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        hostID : number;
//#endregion hostID Prop


//#region distributorID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        distributorID : number;
//#endregion distributorID Prop


//#region startDate Prop
        @required()
        startDate : Date;
//#endregion startDate Prop


//#region closeDate Prop
        @prop()
        closeDate : Date;
//#endregion closeDate Prop


//#region description Prop
        @required()
        @maxLength({value:100})
        description : string;
//#endregion description Prop


//#region eventStartDate Prop
        @prop()
        eventStartDate : Date;
//#endregion eventStartDate Prop


//#region eventEndDate Prop
        @prop()
        eventEndDate : Date;
//#endregion eventEndDate Prop


//#region partyTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        partyTypeID : number;
//#endregion partyTypeID Prop


//#region partyStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        partyStatusID : number;
//#endregion partyStatusID Prop


//#region languageID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        languageID : number;
//#endregion languageID Prop


//#region information Prop
        @required()
        @maxLength({value:500})
        information : string;
//#endregion information Prop


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


//#region city Prop
        @required()
        @maxLength({value:100})
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


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region bookingPartyID Prop
        @prop()
        bookingPartyID : number;
//#endregion bookingPartyID Prop


//#region field1 Prop
        @maxLength({value:250})
        field1 : string;
//#endregion field1 Prop


//#region field2 Prop
        @maxLength({value:250})
        field2 : string;
//#endregion field2 Prop


//#region field3 Prop
        @maxLength({value:250})
        field3 : string;
//#endregion field3 Prop


//#region field4 Prop
        @maxLength({value:250})
        field4 : string;
//#endregion field4 Prop


//#region field5 Prop
        @maxLength({value:250})
        field5 : string;
//#endregion field5 Prop

}