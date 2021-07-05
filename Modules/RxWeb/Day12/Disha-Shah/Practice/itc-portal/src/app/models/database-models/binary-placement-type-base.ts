import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BinaryPlacementTypeBase {

//#region binaryPlacementTypeID Prop
        @prop()
        binaryPlacementTypeID : number;
//#endregion binaryPlacementTypeID Prop


//#region binaryPlacementDescription Prop
        @required()
        @maxLength({value:50})
        binaryPlacementDescription : string;
//#endregion binaryPlacementDescription Prop

}