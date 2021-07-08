import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerExtendedDetailBase {

//#region customerExtendedDetailID Prop
        @prop()
        customerExtendedDetailID : number;
//#endregion customerExtendedDetailID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region customerExtendedGroupID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerExtendedGroupID : number;
//#endregion customerExtendedGroupID Prop


//#region field1 Prop
        @required()
        @maxLength({value:200})
        field1 : string;
//#endregion field1 Prop


//#region field2 Prop
        @required()
        @maxLength({value:200})
        field2 : string;
//#endregion field2 Prop


//#region field3 Prop
        @required()
        @maxLength({value:200})
        field3 : string;
//#endregion field3 Prop


//#region field4 Prop
        @required()
        @maxLength({value:200})
        field4 : string;
//#endregion field4 Prop


//#region field5 Prop
        @required()
        @maxLength({value:200})
        field5 : string;
//#endregion field5 Prop


//#region field6 Prop
        @required()
        @maxLength({value:200})
        field6 : string;
//#endregion field6 Prop


//#region field7 Prop
        @required()
        @maxLength({value:200})
        field7 : string;
//#endregion field7 Prop


//#region field8 Prop
        @required()
        @maxLength({value:200})
        field8 : string;
//#endregion field8 Prop


//#region field9 Prop
        @required()
        @maxLength({value:200})
        field9 : string;
//#endregion field9 Prop


//#region field10 Prop
        @required()
        @maxLength({value:200})
        field10 : string;
//#endregion field10 Prop


//#region field11 Prop
        @required()
        @maxLength({value:200})
        field11 : string;
//#endregion field11 Prop


//#region field12 Prop
        @required()
        @maxLength({value:200})
        field12 : string;
//#endregion field12 Prop


//#region field13 Prop
        @required()
        @maxLength({value:200})
        field13 : string;
//#endregion field13 Prop


//#region field14 Prop
        @required()
        @maxLength({value:200})
        field14 : string;
//#endregion field14 Prop


//#region field15 Prop
        @required()
        @maxLength({value:200})
        field15 : string;
//#endregion field15 Prop


//#region field16 Prop
        @required()
        @maxLength({value:200})
        field16 : string;
//#endregion field16 Prop


//#region field17 Prop
        @required()
        @maxLength({value:200})
        field17 : string;
//#endregion field17 Prop


//#region field18 Prop
        @required()
        @maxLength({value:200})
        field18 : string;
//#endregion field18 Prop


//#region field19 Prop
        @required()
        @maxLength({value:200})
        field19 : string;
//#endregion field19 Prop


//#region field20 Prop
        @required()
        @maxLength({value:200})
        field20 : string;
//#endregion field20 Prop


//#region field21 Prop
        @required()
        @maxLength({value:200})
        field21 : string;
//#endregion field21 Prop


//#region field22 Prop
        @required()
        @maxLength({value:200})
        field22 : string;
//#endregion field22 Prop


//#region field23 Prop
        @required()
        @maxLength({value:200})
        field23 : string;
//#endregion field23 Prop


//#region field24 Prop
        @required()
        @maxLength({value:200})
        field24 : string;
//#endregion field24 Prop


//#region field25 Prop
        @required()
        @maxLength({value:200})
        field25 : string;
//#endregion field25 Prop


//#region field26 Prop
        @required()
        @maxLength({value:200})
        field26 : string;
//#endregion field26 Prop


//#region field27 Prop
        @required()
        @maxLength({value:200})
        field27 : string;
//#endregion field27 Prop


//#region field28 Prop
        @required()
        @maxLength({value:200})
        field28 : string;
//#endregion field28 Prop


//#region field29 Prop
        @required()
        @maxLength({value:200})
        field29 : string;
//#endregion field29 Prop


//#region field30 Prop
        @required()
        @maxLength({value:200})
        field30 : string;
//#endregion field30 Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}