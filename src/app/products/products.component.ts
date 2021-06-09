import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  resultSearch:any =[]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.data$.subscribe(res => this.resultSearch = res)
  }


}
