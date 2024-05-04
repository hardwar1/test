import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
  { path: '',title: 'test', component: MainComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '**', redirectTo: '' }
];
