import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemCountryRegionBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region countryCode Prop
        @maxLength({value:2})
        countryCode : string;
//#endregion countryCode Prop


//#region regionCode Prop
        @maxLength({value:3})
        regionCode : string;
//#endregion regionCode Prop


//#region useTaxOverride Prop
        @required()
        useTaxOverride : boolean;
//#endregion useTaxOverride Prop


//#region taxOverridePercent Prop
        @required()
        taxOverridePercent : number;
//#endregion taxOverridePercent Prop


//#region taxed Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxed : number;
//#endregion taxed Prop


//#region taxedFederal Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxedFederal : number;
//#endregion taxedFederal Prop


//#region taxedState Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        taxedState : number;
//#endregion taxedState Prop

}