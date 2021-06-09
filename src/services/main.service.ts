import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private host = 'https://api.mercadolibre.com';
  constructor(private httpClient: HttpClient) { }

  public getCategories() {
    return this.httpClient.get(this.host + '/sites/MCO/categories')
  }

  public getProductsOfCategory(idCategory: string) {
    return this.httpClient.get(this.host + '/sites/MCO/search?category=' + idCategory);
  }

  public getProductsBySearch(query: string) {
    return this.httpClient.get(this.host + '/sites/MCO/search?q=' + query);
  }
}
