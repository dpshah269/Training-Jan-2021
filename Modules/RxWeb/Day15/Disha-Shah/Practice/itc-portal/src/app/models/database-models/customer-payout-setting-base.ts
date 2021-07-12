import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerPayoutSettingBase {

//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region produce1099 Prop
        @required()
        produce1099 : boolean;
//#endregion produce1099 Prop


//#region taxAddressTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxAddressTypeID : number;
//#endregion taxAddressTypeID Prop


//#region taxNameTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxNameTypeID : number;
//#endregion taxNameTypeID Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop

}