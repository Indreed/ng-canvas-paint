import {Injectable, Injector} from '@angular/core';
import {PaintModule} from '../paint.module';
import {PencilService} from './pencil/pencil.service';
import {Interactions, Mode} from '../paint.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public interactions: Interactions = {
    pencil: this.pencilService
  };

  constructor(private pencilService: PencilService) { }
}
