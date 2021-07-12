import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WebCategoryBase {

//#region webID Prop
        @prop()
        webID : number;
//#endregion webID Prop


//#region webCategoryID Prop
        @prop()
        webCategoryID : number;
//#endregion webCategoryID Prop


//#region parentID Prop
        @prop()
        parentID : number;
//#endregion parentID Prop


//#region webCategoryDescription Prop
        @required()
        @maxLength({value:50})
        webCategoryDescription : string;
//#endregion webCategoryDescription Prop


//#region nestedLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        nestedLevel : number;
//#endregion nestedLevel Prop


//#region sortOrder Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        sortOrder : number;
//#endregion sortOrder Prop

}