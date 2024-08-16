import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

productList:Product[] = [];

wordSearch: string = ""

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.itemService.getProductList().subscribe(response => {
      this.productList = response;
    })
  }

  onDelete(id: any) {
    this.itemService.deleteProductById(id).subscribe(res => {
      this.loadProducts();
      this.router.navigateByUrl("/products");
    })
  }

  searchForProducts(){
    this.itemService.searchByKeyword(this.wordSearch).subscribe(res => {
      console.log(res);
      this.productList = res;
    })
  }


}
