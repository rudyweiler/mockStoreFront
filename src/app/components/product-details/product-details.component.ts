import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  id: number = 0;

  currentProduct: Product = new Product;

  constructor(private itemService: ItemService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId)
    this.itemService.getPrductById(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    })
  }


  onDelete(id: any) {
    this.itemService.deleteProductById(id).subscribe(res => {
      this.router.navigateByUrl("/products")
    })
  }

}
