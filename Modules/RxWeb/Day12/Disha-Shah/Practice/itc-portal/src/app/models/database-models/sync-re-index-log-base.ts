import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SyncReIndexLogBase {

//#region indexDefragID Prop
        @prop()
        indexDefragID : number;
//#endregion indexDefragID Prop


//#region databaseID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        databaseID : number;
//#endregion databaseID Prop


//#region databaseName Prop
        @required()
        @maxLength({value:128})
        databaseName : string;
//#endregion databaseName Prop


//#region objectID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        objectID : number;
//#endregion objectID Prop


//#region objectName Prop
        @required()
        @maxLength({value:128})
        objectName : string;
//#endregion objectName Prop


//#region indexID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        indexID : number;
//#endregion indexID Prop


//#region indexName Prop
        @required()
        @maxLength({value:128})
        indexName : string;
//#endregion indexName Prop


//#region partitionNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        partitionNumber : number;
//#endregion partitionNumber Prop


//#region fragmentation Prop
        @required()
        fragmentation : any;
//#endregion fragmentation Prop


//#region pageCount Prop
        @required()
        pageCount : any;
//#endregion pageCount Prop


//#region dateTimeStart Prop
        @required()
        dateTimeStart : Date;
//#endregion dateTimeStart Prop


//#region dateTimeEnd Prop
        @prop()
        dateTimeEnd : Date;
//#endregion dateTimeEnd Prop


//#region durationSeconds Prop
        @prop()
        durationSeconds : number;
//#endregion durationSeconds Prop


//#region sqlStatement Prop
        @maxLength({value:4000})
        sqlStatement : string;
//#endregion sqlStatement Prop


//#region errorMessage Prop
        @maxLength({value:4000})
        errorMessage : string;
//#endregion errorMessage Prop

}