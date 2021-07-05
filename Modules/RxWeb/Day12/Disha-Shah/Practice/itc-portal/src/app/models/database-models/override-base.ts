import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OverrideBase {

//#region planID Prop
        @prop()
        planID : number;
//#endregion planID Prop


//#region overrideID Prop
        @prop()
        overrideID : number;
//#endregion overrideID Prop


//#region overrideDescription Prop
        @required()
        @maxLength({value:200})
        overrideDescription : string;
//#endregion overrideDescription Prop

}