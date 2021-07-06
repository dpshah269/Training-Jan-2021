import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EnrollerTreeHistoryBase {

//#region enrollerTreeHistoryID Prop
        @prop()
        enrollerTreeHistoryID : number;
//#endregion enrollerTreeHistoryID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region moveDate Prop
        @required()
        moveDate : Date;
//#endregion moveDate Prop


//#region previousEnrollerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        previousEnrollerID : number;
//#endregion previousEnrollerID Prop


//#region previousNestedLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        previousNestedLevel : number;
//#endregion previousNestedLevel Prop


//#region newEnrollerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        newEnrollerID : number;
//#endregion newEnrollerID Prop


//#region newNestedLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        newNestedLevel : number;
//#endregion newNestedLevel Prop


//#region reason Prop
        @required()
        @maxLength({value:1000})
        reason : string;
//#endregion reason Prop

}