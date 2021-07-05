import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WalletTypeBase {

//#region walletTypeID Prop
        @prop()
        walletTypeID : number;
//#endregion walletTypeID Prop


//#region walletTypeDescription Prop
        @required()
        @maxLength({value:50})
        walletTypeDescription : string;
//#endregion walletTypeDescription Prop

}