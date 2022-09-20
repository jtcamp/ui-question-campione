import { Component, OnInit } from '@angular/core';
import { Albums } from 'src/app/models/album';
import { AlbumDataService } from 'src/app/services/album-data.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albums: Albums = {};

  constructor(private albumDataService: AlbumDataService) { }

  ngOnInit(): void {
    this.albumDataService.getAlbumData().subscribe(albums => {
      this.albums = albums;
      console.log(this.albums);
    });
  }

}
