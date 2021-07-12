import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionRunStatusBase {

//#region commissionRunStatusID Prop
        @prop()
        commissionRunStatusID : number;
//#endregion commissionRunStatusID Prop


//#region commissionRunStatusDescription Prop
        @required()
        @maxLength({value:50})
        commissionRunStatusDescription : string;
//#endregion commissionRunStatusDescription Prop

}