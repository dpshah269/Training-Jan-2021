import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ResourceUsageBase {

//#region collectionID Prop
        @required()
        collectionID : any;
//#endregion collectionID Prop


//#region objectName Prop
        @required()
        @maxLength({value:128})
        objectName : string;
//#endregion objectName Prop


//#region counterName Prop
        @required()
        @maxLength({value:128})
        counterName : string;
//#endregion counterName Prop


//#region instanceName Prop
        @maxLength({value:128})
        instanceName : string;
//#endregion instanceName Prop


//#region counterValue Prop
        @prop()
        counterValue : any;
//#endregion counterValue Prop


//#region collectionDate Prop
        @required()
        collectionDate : Date;
//#endregion collectionDate Prop

}