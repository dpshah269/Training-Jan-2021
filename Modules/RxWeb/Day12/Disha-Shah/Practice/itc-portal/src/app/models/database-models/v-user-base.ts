import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vUserBase {

//#region localeCode Prop
        @gridColumn({ visible: true, columnIndex: 8, allowSorting: true, headerKey: 'localeCode', keyColumn: false })
        localeCode : string;
//#endregion localeCode Prop


//#region loginBlocked Prop
        @gridColumn({ visible: true, columnIndex: 7, allowSorting: true, headerKey: 'loginBlocked', keyColumn: false })
        loginBlocked : boolean;
//#endregion loginBlocked Prop


//#region isDeleted Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'isDeleted', keyColumn: false})
        isDeleted : boolean;
//#endregion isDeleted Prop


//#region isActive Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'isActive', keyColumn: false})
        isActive : boolean;
//#endregion isActive Prop


//#region departmentID Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'departmentID', keyColumn: true})
        departmentID : number;
//#endregion departmentID Prop


//#region jwtToken Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'jwtToken', keyColumn: false})
        jwtToken : string;
//#endregion jwtToken Prop


//#region salt Prop
        @gridColumn({ visible: true, columnIndex: 6, allowSorting: true, headerKey: 'salt', keyColumn: false })
        salt : any;
//#endregion salt Prop


//#region passwordHash Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'passwordHash', keyColumn: false})
        passwordHash : any;
//#endregion passwordHash Prop


//#region email Prop
        @gridColumn({ visible: true, columnIndex: 0, allowSorting: true, headerKey: 'email', keyColumn: false })
        email : string;
//#endregion email Prop


//#region loginName Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'loginName', keyColumn: false})
        loginName : string;
//#endregion loginName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region languageCode Prop
        @gridColumn({ visible: true, columnIndex: 3, allowSorting: true, headerKey: 'languageCode', keyColumn: false })
        languageCode : string;
//#endregion languageCode Prop


//#region applicationTimeZoneName Prop
        @gridColumn({ visible: true, columnIndex: 2, allowSorting: true, headerKey: 'applicationTimeZoneName', keyColumn: false })
        applicationTimeZoneName : string;
//#endregion applicationTimeZoneName Prop


//#region userId Prop
        @gridColumn({ visible: true, columnIndex: 1, allowSorting: true, headerKey: 'userId', keyColumn: true })
        userId : number;
//#endregion userId Prop

}