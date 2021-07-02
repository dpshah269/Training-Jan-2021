import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MerchantTypeBase {

//#region merchantTypeID Prop
        @prop()
        merchantTypeID : number;
//#endregion merchantTypeID Prop


//#region description Prop
        @required()
        @maxLength({value:50})
        description : string;
//#endregion description Prop

}