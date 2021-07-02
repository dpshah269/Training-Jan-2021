import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BillTypeBase {

//#region billTypeID Prop
        @prop()
        billTypeID : number;
//#endregion billTypeID Prop


//#region billTypeDescription Prop
        @required()
        @maxLength({value:50})
        billTypeDescription : string;
//#endregion billTypeDescription Prop

}