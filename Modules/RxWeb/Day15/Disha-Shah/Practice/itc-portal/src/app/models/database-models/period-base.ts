import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PeriodBase {

//#region periodTypeID Prop
        @prop()
        periodTypeID : number;
//#endregion periodTypeID Prop


//#region periodID Prop
        @prop()
        periodID : number;
//#endregion periodID Prop


//#region periodDescription Prop
        @required()
        @maxLength({value:50})
        periodDescription : string;
//#endregion periodDescription Prop


//#region startDate Prop
        @required()
        startDate : Date;
//#endregion startDate Prop


//#region endDate Prop
        @required()
        endDate : Date;
//#endregion endDate Prop


//#region acceptedDate Prop
        @prop()
        acceptedDate : Date;
//#endregion acceptedDate Prop

}