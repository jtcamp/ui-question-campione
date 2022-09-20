import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
  },
  {
    path: 'album/:id',
    component: ItemListComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
