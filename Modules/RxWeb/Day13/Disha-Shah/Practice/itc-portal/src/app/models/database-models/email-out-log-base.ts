import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EmailOutLogBase {

//#region outMailID Prop
        @prop()
        outMailID : number;
//#endregion outMailID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region submitDate Prop
        @required()
        submitDate : Date;
//#endregion submitDate Prop


//#region mailTo Prop
        @required()
        @maxLength({value:200})
        mailTo : string;
//#endregion mailTo Prop


//#region subject Prop
        @required()
        @maxLength({value:200})
        subject : string;
//#endregion subject Prop


//#region broadCastID Prop
        @prop()
        broadCastID : number;
//#endregion broadCastID Prop


//#region deliveryStatus Prop
        @required()
        @maxLength({value:500})
        deliveryStatus : string;
//#endregion deliveryStatus Prop

}