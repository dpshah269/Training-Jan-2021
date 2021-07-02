import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionRunBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region commissionRunDescription Prop
        @required()
        @maxLength({value:100})
        commissionRunDescription : string;
//#endregion commissionRunDescription Prop


//#region periodTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        periodTypeID : number;
//#endregion periodTypeID Prop


//#region periodID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        periodID : number;
//#endregion periodID Prop


//#region runDate Prop
        @prop()
        runDate : Date;
//#endregion runDate Prop


//#region acceptedDate Prop
        @prop()
        acceptedDate : Date;
//#endregion acceptedDate Prop


//#region commissionRunStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        commissionRunStatusID : number;
//#endregion commissionRunStatusID Prop


//#region hideFromWeb Prop
        @required()
        hideFromWeb : boolean;
//#endregion hideFromWeb Prop


//#region planID Prop
        @prop()
        planID : number;
//#endregion planID Prop

}