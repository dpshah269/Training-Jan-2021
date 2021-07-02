import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionOverrideBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region overrideID Prop
        @prop()
        overrideID : number;
//#endregion overrideID Prop


//#region qualifies Prop
        @required()
        qualifies : boolean;
//#endregion qualifies Prop


//#region periodTypeID Prop
        @prop()
        periodTypeID : number;
//#endregion periodTypeID Prop


//#region startPeriodID Prop
        @prop()
        startPeriodID : number;
//#endregion startPeriodID Prop


//#region endPeriodID Prop
        @prop()
        endPeriodID : number;
//#endregion endPeriodID Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop

}