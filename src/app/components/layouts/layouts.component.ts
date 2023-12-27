import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketsService } from '../../services/baskets.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements AfterContentChecked {
  baskets : BasketModel[] = []
  constructor(
    private _basketservice:BasketsService
  ) {

  }
  ngAfterContentChecked(): void {
    this.getBaskets();
  }
  getBaskets()
  {
    this.baskets = this._basketservice.baskets;
  }
}
