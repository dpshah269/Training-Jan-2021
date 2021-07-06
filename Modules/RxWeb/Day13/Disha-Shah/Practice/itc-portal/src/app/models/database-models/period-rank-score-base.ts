import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PeriodRankScoreBase {

//#region periodTypeID Prop
        @prop()
        periodTypeID : number;
//#endregion periodTypeID Prop


//#region periodID Prop
        @prop()
        periodID : number;
//#endregion periodID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region paidRankID Prop
        @prop()
        paidRankID : number;
//#endregion paidRankID Prop


//#region score Prop
        @required()
        score : number;
//#endregion score Prop

}