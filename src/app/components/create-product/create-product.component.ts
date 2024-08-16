import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

newProduct: Product = new Product();

  constructor(private productService: ItemService, private router: Router) { }


  ngOnInit(): void {
    
  }

  onSubmit(){
    this.productService.createNewProduct(this.newProduct).subscribe(response =>{
      console.log(response);
      this.router.navigateByUrl("/products");
    });
  }

}
