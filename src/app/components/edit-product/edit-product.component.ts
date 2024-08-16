import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: number = 0;

  currentProduct: Product = new Product;

  constructor(private itemService: ItemService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.itemService.getPrductById(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    });
  }

  onSubmit(){
    this.itemService.editProductById(this.id, this.currentProduct).subscribe(edittedProduct => {
      this.router.navigateByUrl("/products/" + this.id);
    })
  }

}
