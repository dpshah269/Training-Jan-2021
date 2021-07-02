import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PartyTypeBase {

//#region partyTypeID Prop
        @prop()
        partyTypeID : number;
//#endregion partyTypeID Prop


//#region partyTypeDescription Prop
        @required()
        @maxLength({value:100})
        partyTypeDescription : string;
//#endregion partyTypeDescription Prop

}