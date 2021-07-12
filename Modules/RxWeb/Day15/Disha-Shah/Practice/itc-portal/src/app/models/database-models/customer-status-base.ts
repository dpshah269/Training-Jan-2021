import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerStatusBase {

//#region customerStatusID Prop
        @prop()
        customerStatusID : number;
//#endregion customerStatusID Prop


//#region customerStatusDescription Prop
        @required()
        @maxLength({value:50})
        customerStatusDescription : string;
//#endregion customerStatusDescription Prop

}