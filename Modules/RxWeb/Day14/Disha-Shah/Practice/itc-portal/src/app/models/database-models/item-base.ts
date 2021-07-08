import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ItemBase {

//#region itemID Prop
        @prop()
        itemID : number;
//#endregion itemID Prop


//#region itemCode Prop
        @required()
        @maxLength({value:20})
        itemCode : string;
//#endregion itemCode Prop


//#region itemDescription Prop
        @required()
        @maxLength({value:500})
        itemDescription : string;
//#endregion itemDescription Prop


//#region itemTypeID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        itemTypeID : number;
//#endregion itemTypeID Prop


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


//#region notes Prop
        @required()
        @maxLength({value:2048})
        notes : string;
//#endregion notes Prop


//#region weight Prop
        @required()
        weight : number;
//#endregion weight Prop


//#region isVirtual Prop
        @required()
        isVirtual : boolean;
//#endregion isVirtual Prop


//#region isGroupMaster Prop
        @required()
        isGroupMaster : boolean;
//#endregion isGroupMaster Prop


//#region suppressGroupMaster Prop
        @required()
        suppressGroupMaster : boolean;
//#endregion suppressGroupMaster Prop


//#region groupDescription Prop
        @required()
        @maxLength({value:500})
        groupDescription : string;
//#endregion groupDescription Prop


//#region groupMembersDescription Prop
        @required()
        @maxLength({value:500})
        groupMembersDescription : string;
//#endregion groupMembersDescription Prop


//#region allowOnAutoOrder Prop
        @required()
        allowOnAutoOrder : boolean;
//#endregion allowOnAutoOrder Prop


//#region hideFromSearch Prop
        @required()
        hideFromSearch : boolean;
//#endregion hideFromSearch Prop


//#region availableAllCountryRegions Prop
        @required()
        availableAllCountryRegions : boolean;
//#endregion availableAllCountryRegions Prop


//#region tinyImageName Prop
        @required()
        @maxLength({value:255})
        tinyImageName : string;
//#endregion tinyImageName Prop


//#region smallImageName Prop
        @required()
        @maxLength({value:255})
        smallImageName : string;
//#endregion smallImageName Prop


//#region largeImageName Prop
        @required()
        @maxLength({value:255})
        largeImageName : string;
//#endregion largeImageName Prop


//#region field1 Prop
        @required()
        @maxLength({value:100})
        field1 : string;
//#endregion field1 Prop


//#region field2 Prop
        @required()
        @maxLength({value:100})
        field2 : string;
//#endregion field2 Prop


//#region field3 Prop
        @required()
        @maxLength({value:100})
        field3 : string;
//#endregion field3 Prop


//#region field4 Prop
        @required()
        @maxLength({value:100})
        field4 : string;
//#endregion field4 Prop


//#region field5 Prop
        @required()
        @maxLength({value:100})
        field5 : string;
//#endregion field5 Prop


//#region field6 Prop
        @required()
        @maxLength({value:100})
        field6 : string;
//#endregion field6 Prop


//#region field7 Prop
        @required()
        @maxLength({value:100})
        field7 : string;
//#endregion field7 Prop


//#region field8 Prop
        @required()
        @maxLength({value:100})
        field8 : string;
//#endregion field8 Prop


//#region field9 Prop
        @required()
        @maxLength({value:100})
        field9 : string;
//#endregion field9 Prop


//#region field10 Prop
        @required()
        @maxLength({value:100})
        field10 : string;
//#endregion field10 Prop


//#region otherCheck1 Prop
        @required()
        otherCheck1 : boolean;
//#endregion otherCheck1 Prop


//#region otherCheck2 Prop
        @required()
        otherCheck2 : boolean;
//#endregion otherCheck2 Prop


//#region otherCheck3 Prop
        @required()
        otherCheck3 : boolean;
//#endregion otherCheck3 Prop


//#region otherCheck4 Prop
        @required()
        otherCheck4 : boolean;
//#endregion otherCheck4 Prop


//#region otherCheck5 Prop
        @required()
        otherCheck5 : boolean;
//#endregion otherCheck5 Prop


//#region auto1 Prop
        @required()
        @maxLength({value:100})
        auto1 : string;
//#endregion auto1 Prop


//#region auto2 Prop
        @required()
        @maxLength({value:100})
        auto2 : string;
//#endregion auto2 Prop


//#region auto3 Prop
        @required()
        @maxLength({value:100})
        auto3 : string;
//#endregion auto3 Prop


//#region modifiedDate Prop
        @required()
        modifiedDate : Date;
//#endregion modifiedDate Prop


//#region calculateTaxOnKitDetail Prop
        @required()
        calculateTaxOnKitDetail : boolean;
//#endregion calculateTaxOnKitDetail Prop


//#region calculateShipOnKitDetail Prop
        @required()
        calculateShipOnKitDetail : boolean;
//#endregion calculateShipOnKitDetail Prop

}