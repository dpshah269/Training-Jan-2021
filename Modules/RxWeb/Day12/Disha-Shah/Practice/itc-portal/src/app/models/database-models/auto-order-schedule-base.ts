import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderScheduleBase {

//#region autoOrderID Prop
        @prop()
        autoOrderID : number;
//#endregion autoOrderID Prop


//#region scheduledDate Prop
        @prop()
        scheduledDate : Date;
//#endregion scheduledDate Prop


//#region isEnabled Prop
        @required()
        isEnabled : boolean;
//#endregion isEnabled Prop


//#region processedDate Prop
        @prop()
        processedDate : Date;
//#endregion processedDate Prop


//#region orderID Prop
        @prop()
        orderID : number;
//#endregion orderID Prop

}