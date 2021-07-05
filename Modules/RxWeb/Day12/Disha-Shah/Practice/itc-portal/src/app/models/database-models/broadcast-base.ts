import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BroadcastBase {

//#region broadCastID Prop
        @prop()
        broadCastID : number;
//#endregion broadCastID Prop


//#region broadcastTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        broadcastTypeID : number;
//#endregion broadcastTypeID Prop


//#region subject Prop
        @required()
        @maxLength({value:255})
        subject : string;
//#endregion subject Prop


//#region sendEmail Prop
        @required()
        sendEmail : boolean;
//#endregion sendEmail Prop


//#region emailContent Prop
        @required()
        emailContent : string;
//#endregion emailContent Prop


//#region sendSms Prop
        @required()
        sendSms : boolean;
//#endregion sendSms Prop


//#region smsContent Prop
        @required()
        smsContent : string;
//#endregion smsContent Prop


//#region notes Prop
        @required()
        notes : string;
//#endregion notes Prop


//#region isEnabled Prop
        @required()
        isEnabled : boolean;
//#endregion isEnabled Prop


//#region createdDate Prop
        @required()
        createdDate : Date;
//#endregion createdDate Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}