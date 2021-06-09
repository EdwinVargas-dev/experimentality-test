import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/services/main.service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  productsBySearch: any = [];
  constructor(private mainService: MainService, private route: Router, private productsService: ProductsService) { }

  ngOnInit(): void {}

  searchProducts(textToSearch: string) {
    this.mainService.getProductsBySearch(textToSearch).subscribe((res: any) => {
      this.productsBySearch = res.results
      this.productsService.changeData(this.productsBySearch)
      this.route.navigate(['/products'])
    })
  }

  goToHome(){
    this.route.navigate(['/home'])
  }
}
