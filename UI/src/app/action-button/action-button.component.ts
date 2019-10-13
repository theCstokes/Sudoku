import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.less']
})
export class ActionButtonComponent implements OnInit {

  @Input() text: string = "";

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitOnClick() {
    this.onClick.emit();
  }

}
