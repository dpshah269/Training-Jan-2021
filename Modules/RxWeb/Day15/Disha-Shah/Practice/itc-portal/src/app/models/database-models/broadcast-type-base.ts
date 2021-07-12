import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BroadcastTypeBase {

//#region broadcastTypeID Prop
        @prop()
        broadcastTypeID : number;
//#endregion broadcastTypeID Prop


//#region broadcastTypeDescription Prop
        @required()
        @maxLength({value:50})
        broadcastTypeDescription : string;
//#endregion broadcastTypeDescription Prop

}