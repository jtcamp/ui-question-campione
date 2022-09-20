import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  navigateToUrl(): void {
    console.log(this.item?.url);
    window.open(this.item?.url, '_blank');
  }

}
