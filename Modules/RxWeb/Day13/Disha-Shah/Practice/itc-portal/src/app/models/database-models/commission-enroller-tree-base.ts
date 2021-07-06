import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionEnrollerTreeBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region enrollerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        enrollerID : number;
//#endregion enrollerID Prop


//#region nestedLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        nestedLevel : number;
//#endregion nestedLevel Prop


//#region lft Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        lft : number;
//#endregion lft Prop


//#region rgt Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rgt : number;
//#endregion rgt Prop

}