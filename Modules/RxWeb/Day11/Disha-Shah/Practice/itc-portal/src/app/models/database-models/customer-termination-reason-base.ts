import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerTerminationReasonBase {

//#region reasonID Prop
        @prop()
        reasonID : number;
//#endregion reasonID Prop


//#region reason Prop
        @required()
        @maxLength({value:256})
        reason : string;
//#endregion reason Prop

}