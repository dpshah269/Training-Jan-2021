import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SyncReIndexStatuBase {

//#region statusID Prop
        @prop()
        statusID : number;
//#endregion statusID Prop


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


//#region indexID Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        indexID : number;
//#endregion indexID Prop


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


//#region defragDate Prop
        @prop()
        defragDate : Date;
//#endregion defragDate Prop

}