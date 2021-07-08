import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpectedPaymentStatusTypeBase {

//#region expectedPaymentStatusTypeID Prop
        @prop()
        expectedPaymentStatusTypeID : number;
//#endregion expectedPaymentStatusTypeID Prop


//#region description Prop
        @required()
        @maxLength({value:50})
        description : string;
//#endregion description Prop

}