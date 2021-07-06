import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service'
@Component({
  selector: 'app-get-complete',
  templateUrl: './get-complete.component.html',
  styleUrls: ['./get-complete.component.css']
})
export class GetCompleteComponent implements OnInit {

  constructor(private productService : ProductService){}

  ngOnInit(): void {
  }

  result: any;
  
  GetProducts() {
    this.result = this.productService.get({path:'api/Products'});
  }

  AddProducts(){
    this.result = this.productService.addProduct({path:'api/SaveProduct'});
  }

  UpdateProducts(){
    this.result = this.productService.editProduct({path:'api/PutProduct'});
  }
}
