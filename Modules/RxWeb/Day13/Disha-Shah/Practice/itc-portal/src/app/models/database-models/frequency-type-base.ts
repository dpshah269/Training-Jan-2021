import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class FrequencyTypeBase {

//#region frequencyTypeID Prop
        @prop()
        frequencyTypeID : number;
//#endregion frequencyTypeID Prop


//#region frequencyTypeDescription Prop
        @required()
        @maxLength({value:50})
        frequencyTypeDescription : string;
//#endregion frequencyTypeDescription Prop

}