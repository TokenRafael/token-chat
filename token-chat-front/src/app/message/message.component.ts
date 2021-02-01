import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MessageInfo } from '../message-info';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() msg: MessageInfo;
  @HostBinding() class: string;
  id = '1';

  constructor() { }

  ngOnInit() {
    this.class = this.msg.id === this.id ? 'righty' : 'lefty';
  }

}
