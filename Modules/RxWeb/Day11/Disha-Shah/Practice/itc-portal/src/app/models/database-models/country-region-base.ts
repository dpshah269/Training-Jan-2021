import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CountryRegionBase {

//#region countryCode Prop
        @maxLength({value:2})
        countryCode : string;
//#endregion countryCode Prop


//#region regionCode Prop
        @maxLength({value:50})
        regionCode : string;
//#endregion regionCode Prop


//#region regionDescription Prop
        @maxLength({value:50})
        regionDescription : string;
//#endregion regionDescription Prop

}