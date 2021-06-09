import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: any = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getCategories().subscribe((res: any) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if (element.name.includes('Ropa y Accesorios')) {
          this.mainService.getProductsOfCategory(element.id).subscribe((resCategory: any) => {
            var quantity = 0
            var result = []
            for (let index = 0; index < resCategory.results.length; index++) {
              const element = resCategory.results[index];
              quantity++
              if (quantity < 5) { result.push(element) }
              else if (quantity == 5) { this.products.push(result); result = []; quantity = 0 }
            }
          })
        }
      }
    })
  }
}
