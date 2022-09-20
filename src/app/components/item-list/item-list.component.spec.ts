import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Albums } from 'src/app/models/album';
import { AlbumDataService } from 'src/app/services/album-data.service';
import { mockAlbums, mockItems } from '../../test/mock';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let mockAlbumDataService: jasmine.SpyObj<AlbumDataService>;

  const mockAlbumDataObserable: Observable<Albums> = of(mockAlbums);

  beforeEach(async () => {
    mockAlbumDataService = jasmine.createSpyObj<AlbumDataService>({'getAlbumData': mockAlbumDataObserable});
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      providers: [
        { provide: AlbumDataService, useValue: mockAlbumDataService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: 1}
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
