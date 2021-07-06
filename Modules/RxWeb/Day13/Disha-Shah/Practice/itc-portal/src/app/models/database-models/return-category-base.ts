import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ReturnCategoryBase {

//#region returnCategoryID Prop
        @prop()
        returnCategoryID : number;
//#endregion returnCategoryID Prop


//#region returnCategoryDescription Prop
        @required()
        @maxLength({value:100})
        returnCategoryDescription : string;
//#endregion returnCategoryDescription Prop


//#region enabled Prop
        @required()
        enabled : boolean;
//#endregion enabled Prop

}