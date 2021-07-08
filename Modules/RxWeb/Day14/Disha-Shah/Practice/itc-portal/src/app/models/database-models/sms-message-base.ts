import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SmsMessageBase {

//#region messageID Prop
        @prop()
        messageID : any;
//#endregion messageID Prop


//#region messageDate Prop
        @required()
        messageDate : Date;
//#endregion messageDate Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region smsStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        smsStatusID : number;
//#endregion smsStatusID Prop


//#region parentMessageID Prop
        @prop()
        parentMessageID : any;
//#endregion parentMessageID Prop


//#region fromNumber Prop
        @required()
        @maxLength({value:30})
        fromNumber : string;
//#endregion fromNumber Prop


//#region toNumber Prop
        @required()
        @maxLength({value:30})
        toNumber : string;
//#endregion toNumber Prop


//#region message Prop
        @required()
        message : string;
//#endregion message Prop


//#region exception Prop
        @maxLength({value:500})
        exception : string;
//#endregion exception Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region broadcastID Prop
        @prop()
        broadcastID : number;
//#endregion broadcastID Prop

}