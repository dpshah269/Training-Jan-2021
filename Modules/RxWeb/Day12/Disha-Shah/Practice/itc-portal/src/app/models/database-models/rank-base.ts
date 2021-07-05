import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RankBase {

//#region rankID Prop
        @prop()
        rankID : number;
//#endregion rankID Prop


//#region rankDescription Prop
        @required()
        @maxLength({value:50})
        rankDescription : string;
//#endregion rankDescription Prop

}