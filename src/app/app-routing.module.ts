import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaintComponent} from './paint/paint.component';

const routes: Routes = [
  {path: '', component: PaintComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
