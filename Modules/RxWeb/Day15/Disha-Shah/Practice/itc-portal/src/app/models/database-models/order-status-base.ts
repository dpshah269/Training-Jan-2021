import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderStatusBase {

//#region orderStatusID Prop
        @prop()
        orderStatusID : number;
//#endregion orderStatusID Prop


//#region orderStatusDescription Prop
        @maxLength({value:50})
        orderStatusDescription : string;
//#endregion orderStatusDescription Prop

}