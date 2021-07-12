import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WebCategoryItemBase {

//#region webID Prop
        @prop()
        webID : number;
//#endregion webID Prop


//#region webCategoryID Prop
        @prop()
        webCategoryID : number;
//#endregion webCategoryID Prop


//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region sortOrder Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        sortOrder : number;
//#endregion sortOrder Prop

}