import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { AlbumDataService } from 'src/app/services/album-data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  albumId: number = 0;
  items: Item[] = [];

  constructor(private albumDataService: AlbumDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.albumId = +(this.route.snapshot.params['id'] ?? 0);
    this.albumDataService.getAlbumData().subscribe(albums => {
      this.items = albums[this.albumId];
    });
  }

}
