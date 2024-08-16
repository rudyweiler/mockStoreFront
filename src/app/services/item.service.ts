import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  dataSource: string = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
  }

  getPrductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.dataSource + "/" + id);
  }

  createNewProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.dataSource, newProduct);
  }

  editProductById(id: number, edittedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.dataSource + "/" + id, edittedProduct);
  }

  deleteProductById(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id);
  }

  searchByKeyword(parameter: any): Observable<Product[]>{
    return this.http.get<Product[]>(this.dataSource + "?q=" + parameter)
  }


}
