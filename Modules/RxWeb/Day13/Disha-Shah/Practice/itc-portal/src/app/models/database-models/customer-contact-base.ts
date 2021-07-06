import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerContactBase {

//#region customerContactID Prop
        @prop()
        customerContactID : number;
//#endregion customerContactID Prop


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
        @maxLength({value:20})
        state : string;
//#endregion state Prop


//#region zip Prop
        @required()
        @maxLength({value:20})
        zip : string;
//#endregion zip Prop


//#region country Prop
        @required()
        @maxLength({value:10})
        country : string;
//#endregion country Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}