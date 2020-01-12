import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mode-button',
  templateUrl: './mode-button.component.html',
  styleUrls: ['./mode-button.component.scss']
})
export class ModeButtonComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() modeLabel: string;
  @Output() modeClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (!this.isActive) {
      this.modeClick.next();
    }
  }
}
