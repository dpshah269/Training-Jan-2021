import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PriceTypeBase {

//#region priceTypeID Prop
        @prop()
        priceTypeID : number;
//#endregion priceTypeID Prop


//#region priceTypeDescription Prop
        @required()
        @maxLength({value:50})
        priceTypeDescription : string;
//#endregion priceTypeDescription Prop

}