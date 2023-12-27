import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { BasketModel } from '../../models/basket.model';
import { BasketsService } from '../../services/baskets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  api = "http://localhost:3000";
  product: ProductModel = new ProductModel();
  products: ProductModel[] = []
  baskets: BasketModel[] = []

  constructor(private _httpclient: HttpClient,private _baskets:BasketsService) {

  }
  ngOnInit(): void {
    this.getAll();

  }


  addProduct() {
    this._httpclient.post<any>(this.api + "/products", this.product).subscribe({
      next: (res) => {
        this.getAll();
        this.product = new ProductModel();
      },
      error: (err) => {
        console.log(err);
      }
    }),

      this.product = new ProductModel();
  }
  getAll() {
    this._httpclient.get<any>(this.api + "/products").subscribe((data: ProductModel[]) => {
      this.products = data
    });
  }

  BasketAdd(model: ProductModel) {
    this._httpclient.post<any>(this.api + "/baskets", model).subscribe({
      next: () => {
        console.log("ürün eklendi"),
          this.getBaskets()
      }
    })
  }

  getBaskets() {
    this._httpclient.get<any>("http://localhost:3000/baskets").subscribe({
      next: (res) => { this._baskets.baskets = res }
    })
  }

  addProductBadge()
  {
    
  }
}
