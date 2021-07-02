import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CurrencyBase {

//#region currencyCode Prop
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region currencyDescription Prop
        @maxLength({value:50})
        currencyDescription : string;
//#endregion currencyDescription Prop


//#region currencySymbol Prop
        @maxLength({value:10})
        currencySymbol : string;
//#endregion currencySymbol Prop

}