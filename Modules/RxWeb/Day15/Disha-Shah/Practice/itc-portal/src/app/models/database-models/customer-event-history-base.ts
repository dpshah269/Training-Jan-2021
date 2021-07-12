import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerEventHistoryBase {

//#region customerEventID Prop
        @prop()
        customerEventID : number;
//#endregion customerEventID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region key1 Prop
        @prop()
        key1 : number;
//#endregion key1 Prop


//#region key2 Prop
        @prop()
        key2 : number;
//#endregion key2 Prop


//#region key3 Prop
        @prop()
        key3 : number;
//#endregion key3 Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop

}