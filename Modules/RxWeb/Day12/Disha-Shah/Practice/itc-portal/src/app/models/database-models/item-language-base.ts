import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemLanguageBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region languageID Prop
        @prop()
        languageID : number;
//#endregion languageID Prop


//#region itemDescription Prop
        @required()
        @maxLength({value:255})
        itemDescription : string;
//#endregion itemDescription Prop


//#region shortDetail Prop
        @required()
        @maxLength({value:2048})
        shortDetail : string;
//#endregion shortDetail Prop


//#region shortDetail2 Prop
        @required()
        @maxLength({value:2048})
        shortDetail2 : string;
//#endregion shortDetail2 Prop


//#region shortDetail3 Prop
        @required()
        @maxLength({value:2048})
        shortDetail3 : string;
//#endregion shortDetail3 Prop


//#region shortDetail4 Prop
        @required()
        @maxLength({value:2048})
        shortDetail4 : string;
//#endregion shortDetail4 Prop


//#region longDetail Prop
        @required()
        longDetail : string;
//#endregion longDetail Prop


//#region longDetail2 Prop
        @required()
        longDetail2 : string;
//#endregion longDetail2 Prop


//#region longDetail3 Prop
        @required()
        longDetail3 : string;
//#endregion longDetail3 Prop


//#region longDetail4 Prop
        @required()
        longDetail4 : string;
//#endregion longDetail4 Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}