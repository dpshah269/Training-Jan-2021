import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderStatusBase {

//#region autoOrderStatusID Prop
        @prop()
        autoOrderStatusID : number;
//#endregion autoOrderStatusID Prop


//#region autoOrderStatusDescription Prop
        @required()
        @maxLength({value:50})
        autoOrderStatusDescription : string;
//#endregion autoOrderStatusDescription Prop

}