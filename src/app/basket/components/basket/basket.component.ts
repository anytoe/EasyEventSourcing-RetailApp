import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketReadModel } from '../../../shared/models/basket.model';
import { BasketService } from '../../../shared/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  public hasBasketLoaded: boolean = false;
  public hasEventsLoaded: boolean = false;

  public basket: BasketReadModel = new BasketReadModel();
  public events: Date[] = [];
  public currentEvent: Date;
  public currentIndex: number = null;

  ngOnInit() {
    this.getEvents();
    this.getBasket(null);
  }

  getBasket(timestamp: Date) {
    this.basketService.getBasket(timestamp)
      .subscribe((data) => {
        this.basket = data;
        this.currentEvent = data.Timestamp;
        this.hasBasketLoaded = true;
      },
      (error) => {

      }, () => { });
  }

  getEvents() {
    this.basketService.getEvents()
      .subscribe((data) => {
        this.events = data;
        this.hasEventsLoaded = true;
        this.currentIndex = data.length - 1;
      })
  }

  forward() {
    let newIndex = this.currentIndex + 1;
    if(this.events.length > newIndex){
      this.currentEvent = this.events[newIndex];
      this.currentIndex = newIndex;
      this.getBasket(this.currentEvent);
    }
  }

  backwards() {
    let newIndex = this.currentIndex - 1;
    if(newIndex >= 0){
      this.currentEvent = this.events[newIndex];
      this.currentIndex = newIndex;
      this.getBasket(this.currentEvent);
    }
  }

  sliderChanged(event) {
    let timestamp = this.events[event.value];
    this.currentEvent = timestamp
    this.getBasket(timestamp);
  }

  hasLoaded() {
    return this.hasBasketLoaded && this.hasEventsLoaded;
  }

  canForwards() {
    return this.events.length - 1 > this.currentIndex;
  }

  canBackwards(){
    return this.currentIndex > 0;
  }
}
