import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './pages/paint.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PaintComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class PaintModule { }
