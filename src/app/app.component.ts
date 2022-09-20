import { Component, OnInit } from '@angular/core';
import { Albums } from './models/album';
import { Item } from './models/item';
import { AlbumDataService } from './services/album-data.service';
import { ItemHttpService } from './services/item-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Photo Portal';

  constructor(private itemHttpService: ItemHttpService,
              private albumDataService: AlbumDataService) {}

  ngOnInit(): void {
    this.itemHttpService.getItemsFromApi().subscribe(items => {
      this.albumDataService.setAlbumData(this.buildAlbums(items));
    });
  }

  buildAlbums(items: Item[]): Albums {
    return items.reduce((album, item) => {
      album[item.albumId] = album[item.albumId] || [];
      album[item.albumId].push(item);
      return album;
    }, Object.create({}));
  }

}
