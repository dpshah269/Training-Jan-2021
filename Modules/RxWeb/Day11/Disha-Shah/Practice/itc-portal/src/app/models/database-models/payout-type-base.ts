import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PayoutTypeBase {

//#region payoutTypeID Prop
        @prop()
        payoutTypeID : number;
//#endregion payoutTypeID Prop


//#region payoutDescription Prop
        @required()
        @maxLength({value:50})
        payoutDescription : string;
//#endregion payoutDescription Prop

}