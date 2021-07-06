import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderProcessTypeBase {

//#region autoOrderProcessTypeID Prop
        @prop()
        autoOrderProcessTypeID : number;
//#endregion autoOrderProcessTypeID Prop


//#region autoOrderProcessTypeDescription Prop
        @required()
        @maxLength({value:50})
        autoOrderProcessTypeDescription : string;
//#endregion autoOrderProcessTypeDescription Prop

}