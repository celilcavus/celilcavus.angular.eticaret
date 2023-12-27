import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketsService {
  baskets: BasketModel[] = []

  constructor(private _http:HttpClient) { }


  delete(id:number)
  {
    this._http.delete<any>("http://localhost:3000/baskets/" + id).subscribe({next:(res)=> this.getBaskets()});
  }

  getBaskets() {
    this._http.get<any>("http://localhost:3000/baskets").subscribe({
      next: (res) => { this.baskets = res }
    })
  }
}
