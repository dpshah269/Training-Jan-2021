import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerWallBase {

//#region customerWallItemID Prop
        @prop()
        customerWallItemID : number;
//#endregion customerWallItemID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop


//#region text Prop
        @required()
        @maxLength({value:2000})
        text : string;
//#endregion text Prop


//#region field1 Prop
        @maxLength({value:50})
        field1 : string;
//#endregion field1 Prop


//#region field2 Prop
        @maxLength({value:50})
        field2 : string;
//#endregion field2 Prop


//#region field3 Prop
        @maxLength({value:50})
        field3 : string;
//#endregion field3 Prop

}