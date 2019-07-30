import { Component, Input } from '@angular/core';
import { LineItem } from '../../models';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html'
})
export class LineItemListComponent {
  @Input() lineItems: LineItem[];
}