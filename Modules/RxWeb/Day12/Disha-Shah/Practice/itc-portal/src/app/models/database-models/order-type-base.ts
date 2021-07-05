import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderTypeBase {

//#region orderTypeID Prop
        @prop()
        orderTypeID : number;
//#endregion orderTypeID Prop


//#region orderTypeDescription Prop
        @required()
        @maxLength({value:50})
        orderTypeDescription : string;
//#endregion orderTypeDescription Prop

}