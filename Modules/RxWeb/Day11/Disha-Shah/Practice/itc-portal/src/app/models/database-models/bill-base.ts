import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BillBase {

//#region billID Prop
        @prop()
        billID : number;
//#endregion billID Prop


//#region customerID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        customerID : number;
//#endregion customerID Prop


//#region billStatusID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        billStatusID : number;
//#endregion billStatusID Prop


//#region dueDate Prop
        @required()
        dueDate : Date;
//#endregion dueDate Prop


//#region billTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        billTypeID : number;
//#endregion billTypeID Prop


//#region currencyCode Prop
        @required()
        @maxLength({value:3})
        currencyCode : string;
//#endregion currencyCode Prop


//#region amount Prop
        @required()
        amount : number;
//#endregion amount Prop


//#region commissionRunID Prop
        @prop()
        commissionRunID : number;
//#endregion commissionRunID Prop


//#region isOtherIncome Prop
        @required()
        isOtherIncome : boolean;
//#endregion isOtherIncome Prop


//#region reference Prop
        @required()
        @maxLength({value:50})
        reference : string;
//#endregion reference Prop


//#region payableTypeIDOverride Prop
        @prop()
        payableTypeIDOverride : number;
//#endregion payableTypeIDOverride Prop


//#region notes Prop
        @required()
        @maxLength({value:500})
        notes : string;
//#endregion notes Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region createdBy Prop
        @required()
        @maxLength({value:30})
        createdBy : string;
//#endregion createdBy Prop


//#region modifiedBy Prop
        @required()
        @maxLength({value:30})
        modifiedBy : string;
//#endregion modifiedBy Prop

}