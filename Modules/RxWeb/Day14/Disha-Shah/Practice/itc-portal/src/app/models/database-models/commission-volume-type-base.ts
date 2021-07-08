import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CommissionVolumeTypeBase {

//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region volumeTypeID Prop
        @prop()
        volumeTypeID : number;
//#endregion volumeTypeID Prop


//#region volumeTypeDescription Prop
        @required()
        @maxLength({value:500})
        volumeTypeDescription : string;
//#endregion volumeTypeDescription Prop

}