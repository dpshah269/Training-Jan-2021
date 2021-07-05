import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TaxCodeTypeBase {

//#region taxCodeTypeID Prop
        @prop()
        taxCodeTypeID : number;
//#endregion taxCodeTypeID Prop


//#region taxCodeDescription Prop
        @required()
        @maxLength({value:50})
        taxCodeDescription : string;
//#endregion taxCodeDescription Prop

}