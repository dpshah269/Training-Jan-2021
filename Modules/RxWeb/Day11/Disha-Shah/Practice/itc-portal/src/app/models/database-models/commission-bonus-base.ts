import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionBonusBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region bonusID Prop
        @prop()
        bonusID : number;
//#endregion bonusID Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop

}