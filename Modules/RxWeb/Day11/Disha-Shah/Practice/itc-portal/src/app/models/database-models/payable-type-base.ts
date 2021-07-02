import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PayableTypeBase {

//#region payableTypeID Prop
        @prop()
        payableTypeID : number;
//#endregion payableTypeID Prop


//#region payableTypeDescription Prop
        @maxLength({value:50})
        payableTypeDescription : string;
//#endregion payableTypeDescription Prop

}