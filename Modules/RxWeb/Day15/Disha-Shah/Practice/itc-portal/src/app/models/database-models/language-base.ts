import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class LanguageBase {

//#region languageID Prop
        @prop()
        languageID : number;
//#endregion languageID Prop


//#region languageDescription Prop
        @required()
        @maxLength({value:50})
        languageDescription : string;
//#endregion languageDescription Prop

}