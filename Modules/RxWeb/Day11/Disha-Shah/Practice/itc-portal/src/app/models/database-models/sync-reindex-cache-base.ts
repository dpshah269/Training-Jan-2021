import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SyncReindexCacheBase {

//#region databaseID Prop
        @prop()
        databaseID : number;
//#endregion databaseID Prop


//#region schemaName Prop
        @required()
        @maxLength({value:128})
        schemaName : string;
//#endregion schemaName Prop


//#region databaseName Prop
        @required()
        @maxLength({value:128})
        databaseName : string;
//#endregion databaseName Prop


//#region objectID Prop
        @prop()
        objectID : number;
//#endregion objectID Prop


//#region tableName Prop
        @required()
        @maxLength({value:128})
        tableName : string;
//#endregion tableName Prop


//#region indexID Prop
        @prop()
        indexID : number;
//#endregion indexID Prop


//#region indexName Prop
        @required()
        @maxLength({value:128})
        indexName : string;
//#endregion indexName Prop


//#region partition Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        partition : number;
//#endregion partition Prop


//#region percentFragmented Prop
        @required()
        percentFragmented : any;
//#endregion percentFragmented Prop


//#region pageCount Prop
        @required()
        pageCount : any;
//#endregion pageCount Prop


//#region allowPageLocks Prop
        @required()
        allowPageLocks : boolean;
//#endregion allowPageLocks Prop


//#region isLob Prop
        @required()
        isLob : boolean;
//#endregion isLob Prop


//#region isColumnStore Prop
        @required()
        isColumnStore : boolean;
//#endregion isColumnStore Prop


//#region isPartitioned Prop
        @required()
        isPartitioned : boolean;
//#endregion isPartitioned Prop

}