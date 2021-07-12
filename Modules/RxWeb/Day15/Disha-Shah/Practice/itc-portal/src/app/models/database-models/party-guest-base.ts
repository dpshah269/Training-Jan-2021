import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PartyGuestBase {

//#region partyID Prop
        @prop()
        partyID : number;
//#endregion partyID Prop


//#region guestID Prop
        @prop()
        guestID : number;
//#endregion guestID Prop

}