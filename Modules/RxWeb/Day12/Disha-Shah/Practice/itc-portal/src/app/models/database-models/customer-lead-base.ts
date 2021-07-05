import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerLeadBase {

//#region customerLeadID Prop
        @prop()
        customerLeadID : number;
//#endregion customerLeadID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region firstName Prop
        @required()
        @maxLength({value:50})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @required()
        @maxLength({value:50})
        lastName : string;
//#endregion lastName Prop


//#region company Prop
        @required()
        @maxLength({value:50})
        company : string;
//#endregion company Prop


//#region email Prop
        @required()
        @maxLength({value:50})
        email : string;
//#endregion email Prop


//#region phone Prop
        @required()
        @maxLength({value:50})
        phone : string;
//#endregion phone Prop


//#region phone2 Prop
        @required()
        @maxLength({value:50})
        phone2 : string;
//#endregion phone2 Prop


//#region mobilePhone Prop
        @required()
        @maxLength({value:50})
        mobilePhone : string;
//#endregion mobilePhone Prop


//#region fax Prop
        @required()
        @maxLength({value:50})
        fax : string;
//#endregion fax Prop


//#region address1 Prop
        @required()
        @maxLength({value:50})
        address1 : string;
//#endregion address1 Prop


//#region address2 Prop
        @required()
        @maxLength({value:50})
        address2 : string;
//#endregion address2 Prop


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


//#region birthDate Prop
        @prop()
        birthDate : Date;
//#endregion birthDate Prop


//#region notes Prop
        @required()
        @maxLength({value:2000})
        notes : string;
//#endregion notes Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}