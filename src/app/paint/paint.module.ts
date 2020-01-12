import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './paint.component';
import {FormsModule} from '@angular/forms';
import { PencilComponent } from './interactions/pencil/pencil.component';
import { ModeButtonComponent } from './components/mode-button/mode-button.component';
import { BrushComponent } from './interactions/brush/brush.component';

@NgModule({
  declarations: [PaintComponent, PencilComponent, ModeButtonComponent, BrushComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class PaintModule { }
