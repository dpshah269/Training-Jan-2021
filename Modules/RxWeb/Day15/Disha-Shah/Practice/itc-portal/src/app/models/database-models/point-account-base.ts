import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PointAccountBase {

//#region pointAccountID Prop
        @prop()
        pointAccountID : number;
//#endregion pointAccountID Prop


//#region pointAccountDescription Prop
        @required()
        @maxLength({value:50})
        pointAccountDescription : string;
//#endregion pointAccountDescription Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop

}