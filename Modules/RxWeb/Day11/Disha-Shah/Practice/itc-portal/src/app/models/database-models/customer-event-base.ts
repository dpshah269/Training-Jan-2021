import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerEventBase {

//#region customerEventID Prop
        @prop()
        customerEventID : number;
//#endregion customerEventID Prop


//#region customerEventDescription Prop
        @required()
        @maxLength({value:50})
        customerEventDescription : string;
//#endregion customerEventDescription Prop


//#region key1Description Prop
        @required()
        @maxLength({value:50})
        key1Description : string;
//#endregion key1Description Prop


//#region key2Description Prop
        @required()
        @maxLength({value:50})
        key2Description : string;
//#endregion key2Description Prop


//#region key3Description Prop
        @required()
        @maxLength({value:50})
        key3Description : string;
//#endregion key3Description Prop


//#region notes Prop
        @required()
        notes : string;
//#endregion notes Prop

}