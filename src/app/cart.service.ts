import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}
  addToCard(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    // window.alert("shieeettt");
    return this.http.get<{ type: string; price: number }[]>(
      "../assets/shipping.json"
    );
  }
}
