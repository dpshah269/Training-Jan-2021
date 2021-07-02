import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ImageFileBase {

//#region path Prop
        @maxLength({value:700})
        path : string;
//#endregion path Prop


//#region name Prop
        @maxLength({value:100})
        name : string;
//#endregion name Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region size Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        size : number;
//#endregion size Prop


//#region imageData Prop
        @required()
        imageData : any;
//#endregion imageData Prop

}