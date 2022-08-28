import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  //свойство говорящее о том что это свойтво типа Product (который импортирован)
  // а также @Input() говорит о том что это свойтво должно быть заполнено извне
  @Input() product!: Product;

  //пока думаю что это свойство которое должно оповещать что то внешнее
  @Output() notify = new EventEmitter();
}
