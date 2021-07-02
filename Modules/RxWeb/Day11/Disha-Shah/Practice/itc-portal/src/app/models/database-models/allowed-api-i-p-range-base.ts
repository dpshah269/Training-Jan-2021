import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AllowedApiIPRangeBase {

//#region companyID Prop
        @prop()
        companyID : number;
//#endregion companyID Prop


//#region iPRangeID Prop
        @prop()
        iPRangeID : number;
//#endregion iPRangeID Prop


//#region description Prop
        @required()
        @maxLength({value:50})
        description : string;
//#endregion description Prop


//#region minIP Prop
        @required()
        @maxLength({value:50})
        minIP : string;
//#endregion minIP Prop


//#region maxIP Prop
        @required()
        @maxLength({value:50})
        maxIP : string;
//#endregion maxIP Prop

}