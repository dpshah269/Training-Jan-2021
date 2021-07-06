import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BillStatusBase {

//#region billStatusID Prop
        @prop()
        billStatusID : number;
//#endregion billStatusID Prop


//#region billStatusDescription Prop
        @required()
        @maxLength({value:20})
        billStatusDescription : string;
//#endregion billStatusDescription Prop

}