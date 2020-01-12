import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModePayload} from '../../paint.model';
import {BrushConfig} from './brush.model';

@Component({
  selector: 'app-brush',
  templateUrl: './brush.component.html',
  styleUrls: ['./brush.component.scss']
})
export class BrushComponent implements OnInit {

  public payload: ModePayload<BrushConfig> = {mode: 'brush', config: {color: '#000000', size: 5}};

  @Input() isActive: boolean;
  @Output() updateMode = new EventEmitter<ModePayload<BrushConfig>>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.updateMode.next(this.payload);
  }
}
