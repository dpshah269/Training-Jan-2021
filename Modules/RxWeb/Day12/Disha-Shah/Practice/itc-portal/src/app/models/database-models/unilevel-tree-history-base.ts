import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UnilevelTreeHistoryBase {

//#region unilevelTreeHistoryID Prop
        @prop()
        unilevelTreeHistoryID : number;
//#endregion unilevelTreeHistoryID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region moveDate Prop
        @required()
        moveDate : Date;
//#endregion moveDate Prop


//#region previousSponsorID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        previousSponsorID : number;
//#endregion previousSponsorID Prop


//#region previousNestedLevel Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        previousNestedLevel : number;
//#endregion previousNestedLevel Prop


//#region newSponsorID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        newSponsorID : number;
//#endregion newSponsorID Prop


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


//#region previousPlacement Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        previousPlacement : number;
//#endregion previousPlacement Prop


//#region newPlacement Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        newPlacement : number;
//#endregion newPlacement Prop

}