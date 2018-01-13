import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../shared/services/basket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-basketicon',
  templateUrl: './basketicon.component.html',
  styleUrls: ['./basketicon.component.scss']
})
export class BasketiconComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  item: number;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.basketService.basketEvent$
      .subscribe(item => this.item = item)

      this.basketService.getBasket(null)
      .subscribe((data) => {
        this.item = data.ItemCount;
      },
      (error) => {

      }, () => { });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
