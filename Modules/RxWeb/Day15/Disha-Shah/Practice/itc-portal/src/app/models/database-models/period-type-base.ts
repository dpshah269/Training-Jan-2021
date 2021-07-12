import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PeriodTypeBase {

//#region periodTypeID Prop
        @prop()
        periodTypeID : number;
//#endregion periodTypeID Prop


//#region periodTypeDescription Prop
        @required()
        @maxLength({value:50})
        periodTypeDescription : string;
//#endregion periodTypeDescription Prop

}