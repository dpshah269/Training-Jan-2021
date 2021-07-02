import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerSocialNetworkBase {

//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region socialNetworkID Prop
        @prop()
        socialNetworkID : number;
//#endregion socialNetworkID Prop


//#region url Prop
        @maxLength({value:500})
        url : string;
//#endregion url Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}