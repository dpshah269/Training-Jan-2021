import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerTypeBase {

//#region customerTypeID Prop
        @prop()
        customerTypeID : number;
//#endregion customerTypeID Prop


//#region customerTypeDescription Prop
        @required()
        @maxLength({value:50})
        customerTypeDescription : string;
//#endregion customerTypeDescription Prop


//#region priceTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        priceTypeID : number;
//#endregion priceTypeID Prop

}