import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CustomerSubscriptionBase {

//#region subscriptionID Prop
        @prop()
        subscriptionID : number;
//#endregion subscriptionID Prop


//#region customerID Prop
        @prop()
        customerID : number;
//#endregion customerID Prop


//#region isActive Prop
        @required()
        isActive : boolean;
//#endregion isActive Prop


//#region startDate Prop
        @required()
        startDate : Date;
//#endregion startDate Prop


//#region expireDate Prop
        @required()
        expireDate : Date;
//#endregion expireDate Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop

}