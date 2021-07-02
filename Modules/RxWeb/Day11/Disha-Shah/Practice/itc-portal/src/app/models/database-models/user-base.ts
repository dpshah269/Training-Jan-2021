import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UserBase {

//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop


//#region applicationLocaleId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationLocaleId : number;
//#endregion applicationLocaleId Prop


//#region applicationTimeZoneId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationTimeZoneId : number;
//#endregion applicationTimeZoneId Prop


//#region languageCode Prop
        @required()
        @maxLength({value:3})
        languageCode : string;
//#endregion languageCode Prop


//#region loginName Prop
        @required()
        @maxLength({value:50})
        loginName : string;
//#endregion loginName Prop


//#region passwordHash Prop
        @required()
        @maxLength({value:132})
        passwordHash : any;
//#endregion passwordHash Prop


//#region salt Prop
        @required()
        @maxLength({value:140})
        salt : any;
//#endregion salt Prop


//#region loginBlocked Prop
        @required()
        loginBlocked : boolean;
//#endregion loginBlocked Prop


//#region statusId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        statusId : number;
//#endregion statusId Prop


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