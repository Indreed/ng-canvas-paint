import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './paint.component';
import {FormsModule} from '@angular/forms';
import { PencilComponent } from './pencil/pencil.component';
import { ModeButtonComponent } from './components/mode-button/mode-button.component';

@NgModule({
  declarations: [PaintComponent, PencilComponent, ModeButtonComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class PaintModule { }
