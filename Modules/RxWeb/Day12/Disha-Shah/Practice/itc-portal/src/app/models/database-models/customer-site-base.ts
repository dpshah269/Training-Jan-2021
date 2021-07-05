import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerSiteBase {

//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region webAlias Prop
        @required()
        @maxLength({value:100})
        webAlias : string;
//#endregion webAlias Prop


//#region firstName Prop
        @required()
        @maxLength({value:100})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @required()
        @maxLength({value:100})
        lastName : string;
//#endregion lastName Prop


//#region company Prop
        @required()
        @maxLength({value:255})
        company : string;
//#endregion company Prop


//#region email Prop
        @required()
        @maxLength({value:100})
        email : string;
//#endregion email Prop


//#region phone Prop
        @required()
        @maxLength({value:100})
        phone : string;
//#endregion phone Prop


//#region phone2 Prop
        @required()
        @maxLength({value:100})
        phone2 : string;
//#endregion phone2 Prop


//#region fax Prop
        @required()
        @maxLength({value:100})
        fax : string;
//#endregion fax Prop


//#region address1 Prop
        @required()
        @maxLength({value:200})
        address1 : string;
//#endregion address1 Prop


//#region address2 Prop
        @required()
        @maxLength({value:200})
        address2 : string;
//#endregion address2 Prop


//#region city Prop
        @required()
        @maxLength({value:100})
        city : string;
//#endregion city Prop


//#region state Prop
        @required()
        @maxLength({value:100})
        state : string;
//#endregion state Prop


//#region zip Prop
        @required()
        @maxLength({value:100})
        zip : string;
//#endregion zip Prop


//#region country Prop
        @required()
        @maxLength({value:50})
        country : string;
//#endregion country Prop


//#region notes1 Prop
        @required()
        notes1 : string;
//#endregion notes1 Prop


//#region notes2 Prop
        @required()
        notes2 : string;
//#endregion notes2 Prop


//#region notes3 Prop
        @required()
        notes3 : string;
//#endregion notes3 Prop


//#region notes4 Prop
        @required()
        notes4 : string;
//#endregion notes4 Prop


//#region url1 Prop
        @required()
        @maxLength({value:200})
        url1 : string;
//#endregion url1 Prop


//#region url2 Prop
        @required()
        @maxLength({value:200})
        url2 : string;
//#endregion url2 Prop


//#region url3 Prop
        @required()
        @maxLength({value:200})
        url3 : string;
//#endregion url3 Prop


//#region url4 Prop
        @required()
        @maxLength({value:200})
        url4 : string;
//#endregion url4 Prop


//#region url5 Prop
        @required()
        @maxLength({value:200})
        url5 : string;
//#endregion url5 Prop


//#region url6 Prop
        @required()
        @maxLength({value:200})
        url6 : string;
//#endregion url6 Prop


//#region url7 Prop
        @required()
        @maxLength({value:200})
        url7 : string;
//#endregion url7 Prop


//#region url8 Prop
        @required()
        @maxLength({value:200})
        url8 : string;
//#endregion url8 Prop


//#region url9 Prop
        @required()
        @maxLength({value:200})
        url9 : string;
//#endregion url9 Prop


//#region url10 Prop
        @required()
        @maxLength({value:200})
        url10 : string;
//#endregion url10 Prop


//#region url1Description Prop
        @required()
        @maxLength({value:200})
        url1Description : string;
//#endregion url1Description Prop


//#region url2Description Prop
        @required()
        @maxLength({value:200})
        url2Description : string;
//#endregion url2Description Prop


//#region url3Description Prop
        @required()
        @maxLength({value:200})
        url3Description : string;
//#endregion url3Description Prop


//#region url4Description Prop
        @required()
        @maxLength({value:200})
        url4Description : string;
//#endregion url4Description Prop


//#region url5Description Prop
        @required()
        @maxLength({value:200})
        url5Description : string;
//#endregion url5Description Prop


//#region url6Description Prop
        @required()
        @maxLength({value:200})
        url6Description : string;
//#endregion url6Description Prop


//#region url7Description Prop
        @required()
        @maxLength({value:200})
        url7Description : string;
//#endregion url7Description Prop


//#region url8Description Prop
        @required()
        @maxLength({value:200})
        url8Description : string;
//#endregion url8Description Prop


//#region url9Description Prop
        @required()
        @maxLength({value:200})
        url9Description : string;
//#endregion url9Description Prop


//#region url10Description Prop
        @required()
        @maxLength({value:200})
        url10Description : string;
//#endregion url10Description Prop


//#region dataImage1 Prop
        @prop()
        dataImage1 : any;
//#endregion dataImage1 Prop


//#region dataImageType1 Prop
        @maxLength({value:200})
        dataImageType1 : string;
//#endregion dataImageType1 Prop


//#region dataImage2 Prop
        @prop()
        dataImage2 : any;
//#endregion dataImage2 Prop


//#region dataImageType2 Prop
        @maxLength({value:200})
        dataImageType2 : string;
//#endregion dataImageType2 Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}