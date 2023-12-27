import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketsService } from '../../services/baskets.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements AfterContentChecked {
  baskets:BasketModel[] = [];

  constructor(private _baskets:BasketsService)
  {
    this._baskets.getBaskets()
  }
  ngAfterContentChecked(): void {
    this.baskets = this._baskets.baskets;
  }
 
  delete(id:number)
  {
    this._baskets.delete(id);
  }

}
