import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ReplacementCategoryBase {

//#region replacementCategoryID Prop
        @prop()
        replacementCategoryID : number;
//#endregion replacementCategoryID Prop


//#region replacementCategoryDescription Prop
        @required()
        @maxLength({value:100})
        replacementCategoryDescription : string;
//#endregion replacementCategoryDescription Prop


//#region enabled Prop
        @required()
        enabled : boolean;
//#endregion enabled Prop

}