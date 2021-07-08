import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PartyStatusBase {

//#region partyStatusID Prop
        @prop()
        partyStatusID : number;
//#endregion partyStatusID Prop


//#region partyStatusDescription Prop
        @required()
        @maxLength({value:100})
        partyStatusDescription : string;
//#endregion partyStatusDescription Prop

}