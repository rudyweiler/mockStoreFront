import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: Product[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getProductList().subscribe(res =>{
      this.productList = res;
    })
  }

}
