import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CompanyNewBase {

//#region companyNewsID Prop
        @prop()
        companyNewsID : number;
//#endregion companyNewsID Prop


//#region title Prop
        @maxLength({value:1000})
        title : string;
//#endregion title Prop


//#region content Prop
        @required()
        content : string;
//#endregion content Prop


//#region isCompanyWide Prop
        @required()
        isCompanyWide : boolean;
//#endregion isCompanyWide Prop


//#region availableOnWeb Prop
        @required()
        availableOnWeb : boolean;
//#endregion availableOnWeb Prop


//#region createdDate Prop
        @required()
        createdDate : Date;
//#endregion createdDate Prop

}