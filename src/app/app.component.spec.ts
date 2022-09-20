import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ItemHttpService } from './services/item-http.service';
import { mockItems, mockAlbums } from './test/mock';

describe('AppComponent', () => {
  let mockItemHttpService: jasmine.SpyObj<ItemHttpService>;

  beforeEach(async () => {
    mockItemHttpService = jasmine.createSpyObj<ItemHttpService>(['getItemsFromApi']);
    mockItemHttpService.getItemsFromApi.and.returnValue(of(mockItems));
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ItemHttpService, useValue: mockItemHttpService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Photo Portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Photo Portal');
  });

  it('should return Albums from a list of items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.buildAlbums(mockItems)).toEqual(mockAlbums);
  })
});
