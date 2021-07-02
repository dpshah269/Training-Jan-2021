import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AutoOrderChargeLogBase {

//#region autoOrderChargeLogID Prop
        @prop()
        autoOrderChargeLogID : number;
//#endregion autoOrderChargeLogID Prop


//#region paymentTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentTypeID : number;
//#endregion paymentTypeID Prop


//#region warehouseID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        warehouseID : number;
//#endregion warehouseID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region orderID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        orderID : number;
//#endregion orderID Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region entryDate Prop
        @required()
        entryDate : Date;
//#endregion entryDate Prop


//#region batchID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        batchID : number;
//#endregion batchID Prop


//#region isAuthorized Prop
        @required()
        isAuthorized : boolean;
//#endregion isAuthorized Prop


//#region serverResponse Prop
        @required()
        @maxLength({value:1000})
        serverResponse : string;
//#endregion serverResponse Prop


//#region paymentID Prop
        @prop()
        paymentID : number;
//#endregion paymentID Prop

}