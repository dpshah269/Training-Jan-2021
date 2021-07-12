import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TaxNameTypeBase {

//#region taxNameTypeID Prop
        @prop()
        taxNameTypeID : number;
//#endregion taxNameTypeID Prop


//#region taxNameTypeDescription Prop
        @required()
        @maxLength({value:50})
        taxNameTypeDescription : string;
//#endregion taxNameTypeDescription Prop

}