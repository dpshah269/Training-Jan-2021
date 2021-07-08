import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SubscriptionBase {

//#region subscriptionID Prop
        @prop()
        subscriptionID : number;
//#endregion subscriptionID Prop


//#region subscriptionDescription Prop
        @required()
        @maxLength({value:50})
        subscriptionDescription : string;
//#endregion subscriptionDescription Prop

}