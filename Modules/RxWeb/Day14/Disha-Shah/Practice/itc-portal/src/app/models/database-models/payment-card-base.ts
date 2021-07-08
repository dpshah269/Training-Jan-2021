import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentCardBase {

//#region paymentCardID Prop
        @prop()
        paymentCardID : number;
//#endregion paymentCardID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region paymentCardTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentCardTypeID : number;
//#endregion paymentCardTypeID Prop


//#region cardNumberDisplay Prop
        @maxLength({value:50})
        cardNumberDisplay : string;
//#endregion cardNumberDisplay Prop


//#region isPrimary Prop
        @required()
        isPrimary : boolean;
//#endregion isPrimary Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}