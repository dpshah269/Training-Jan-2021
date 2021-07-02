import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CodingTypeBase {

//#region codingTypeID Prop
        @prop()
        codingTypeID : number;
//#endregion codingTypeID Prop


//#region codingTypeDescription Prop
        @maxLength({value:100})
        codingTypeDescription : string;
//#endregion codingTypeDescription Prop

}