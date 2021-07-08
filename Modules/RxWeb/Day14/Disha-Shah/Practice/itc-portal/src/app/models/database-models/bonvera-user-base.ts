import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BonveraUserBase {

//#region userID Prop
        @prop()
        userID : number;
//#endregion userID Prop


//#region loginName Prop
        @required()
        @maxLength({value:100})
        loginName : string;
//#endregion loginName Prop


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


//#region departmentID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        departmentID : number;
//#endregion departmentID Prop


//#region isActive Prop
        @required()
        isActive : boolean;
//#endregion isActive Prop


//#region isDeleted Prop
        @required()
        isDeleted : boolean;
//#endregion isDeleted Prop

}