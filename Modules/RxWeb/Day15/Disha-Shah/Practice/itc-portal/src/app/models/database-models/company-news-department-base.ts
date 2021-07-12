import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CompanyNewsDepartmentBase {

//#region newsID Prop
        @prop()
        newsID : number;
//#endregion newsID Prop


//#region departmentID Prop
        @prop()
        departmentID : number;
//#endregion departmentID Prop

}