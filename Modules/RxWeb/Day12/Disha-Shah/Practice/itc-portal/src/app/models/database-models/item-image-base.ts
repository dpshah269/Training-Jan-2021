import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemImageBase {

//#region itemImageID Prop
        @prop()
        itemImageID : number;
//#endregion itemImageID Prop


//#region imageName Prop
        @required()
        @maxLength({value:500})
        imageName : string;
//#endregion imageName Prop


//#region imageData Prop
        @prop()
        imageData : any;
//#endregion imageData Prop


//#region compressionTypeID Prop
        @prop()
        compressionTypeID : number;
//#endregion compressionTypeID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}