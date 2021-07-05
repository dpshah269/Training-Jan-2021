import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SocialNetworkBase {

//#region socialNetworkID Prop
        @prop()
        socialNetworkID : number;
//#endregion socialNetworkID Prop


//#region socialNetworkDescription Prop
        @required()
        @maxLength({value:100})
        socialNetworkDescription : string;
//#endregion socialNetworkDescription Prop

}