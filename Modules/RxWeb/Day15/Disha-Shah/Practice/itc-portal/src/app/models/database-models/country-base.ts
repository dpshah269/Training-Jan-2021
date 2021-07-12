import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CountryBase {

//#region countryCode Prop
        @maxLength({value:2})
        countryCode : string;
//#endregion countryCode Prop


//#region countryDescription Prop
        @maxLength({value:50})
        countryDescription : string;
//#endregion countryDescription Prop


//#region priority Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        priority : number;
//#endregion priority Prop

}