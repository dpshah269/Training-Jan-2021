import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TaxAddressTypeBase {

//#region taxAddressTypeID Prop
        @prop()
        taxAddressTypeID : number;
//#endregion taxAddressTypeID Prop


//#region taxAddressTypeDescription Prop
        @required()
        @maxLength({value:50})
        taxAddressTypeDescription : string;
//#endregion taxAddressTypeDescription Prop

}