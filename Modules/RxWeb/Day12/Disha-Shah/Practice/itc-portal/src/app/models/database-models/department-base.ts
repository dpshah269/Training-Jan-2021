import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class DepartmentBase {

//#region departmentID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        departmentID : number;
//#endregion departmentID Prop


//#region departmentDescription Prop
        @required()
        @maxLength({value:50})
        departmentDescription : string;
//#endregion departmentDescription Prop

}