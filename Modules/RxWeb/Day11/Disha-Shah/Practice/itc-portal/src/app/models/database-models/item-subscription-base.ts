import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemSubscriptionBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region subscriptionID Prop
        @prop()
        subscriptionID : number;
//#endregion subscriptionID Prop


//#region daysEach Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        daysEach : number;
//#endregion daysEach Prop

}