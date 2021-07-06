import { gridColumn, actionColumn } from "@rxweb/grid";

export class  vUser{

   
        @gridColumn({ visible: false, columnIndex: 0, allowSorting: true, headerKey: 'id', keyColumn: true })
        id: number;
       


       
        @gridColumn({ visible: true, columnIndex: 1, allowSorting: true, headerKey: 'Name', headerTitle: 'Name', keyColumn: false })
        name: string;
        

        
         @gridColumn({ visible: true, columnIndex: 2, allowSorting: true, headerKey: 'DisplayOrder', headerTitle: 'DisplayOrder', keyColumn: false })
        displayOrder: string;
   
}