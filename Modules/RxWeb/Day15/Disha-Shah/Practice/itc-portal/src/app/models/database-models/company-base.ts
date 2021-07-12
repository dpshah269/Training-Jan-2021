import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CompanyBase {

//#region companyKey Prop
        @maxLength({value:15})
        companyKey : string;
//#endregion companyKey Prop


//#region name Prop
        @required()
        @maxLength({value:50})
        name : string;
//#endregion name Prop

}