import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class GuestStatusTypeBase {

//#region guestStatusTypeID Prop
        @prop()
        guestStatusTypeID : number;
//#endregion guestStatusTypeID Prop


//#region guestStatusTypeDescription Prop
        @required()
        @maxLength({value:50})
        guestStatusTypeDescription : string;
//#endregion guestStatusTypeDescription Prop

}