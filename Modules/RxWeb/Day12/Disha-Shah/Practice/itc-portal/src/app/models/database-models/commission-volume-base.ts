import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionVolumeBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region volumeTypeID Prop
        @prop()
        volumeTypeID : number;
//#endregion volumeTypeID Prop


//#region volume Prop
        @required()
        volume : number;
//#endregion volume Prop

}