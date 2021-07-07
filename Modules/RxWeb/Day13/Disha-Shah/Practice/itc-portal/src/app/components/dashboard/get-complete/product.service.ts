import { Injectable } from '@angular/core';
import { http, RxHttp, xhrFilter } from "@rxweb/http";
import { HeaderFilter } from "./header-filter";

@xhrFilter([{ model: HeaderFilter }])
@http({
  path: "",
  hostKey: 'local'
})
@Injectable({
  providedIn: 'root'
})
export class ProductService extends RxHttp {

  markAsDirty: boolean;
  constructor() {
    super();
  }

  addProduct(product?: any) {
    return this.post({ path: 'api/SaveProduct', body: product });
  }

  editProduct(product?: any, id?: number) {
    return this.put({ path: 'api/PutProduct', body: product });
  }

}
