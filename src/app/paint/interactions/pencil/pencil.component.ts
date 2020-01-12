import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mode, ModePayload} from '../../paint.model';
import {PencilConfig} from './pencil.model';

@Component({
  selector: 'app-pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.scss']
})
export class PencilComponent implements OnInit {
  public payload: ModePayload<PencilConfig> = {mode: 'pencil', config: {color: '#000000'}};

  @Input() isActive: boolean;
  @Output() updateMode = new EventEmitter<ModePayload<PencilConfig>>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.updateMode.next(this.payload);
  }
}
