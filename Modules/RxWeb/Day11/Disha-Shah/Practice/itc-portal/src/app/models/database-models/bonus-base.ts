import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BonusBase {

//#region bonusID Prop
        @prop()
        bonusID : number;
//#endregion bonusID Prop


//#region bonusDescription Prop
        @required()
        @maxLength({value:100})
        bonusDescription : string;
//#endregion bonusDescription Prop


//#region periodTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        periodTypeID : number;
//#endregion periodTypeID Prop

}