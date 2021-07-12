import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SchemaVersionBase {

//#region id Prop
        @prop()
        id : number;
//#endregion id Prop


//#region scriptName Prop
        @required()
        @maxLength({value:255})
        scriptName : string;
//#endregion scriptName Prop


//#region applied Prop
        @required()
        applied : Date;
//#endregion applied Prop

}