import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MessageInfo } from '../message-info';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() msg: MessageInfo;
  @HostBinding() class: string;

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.class = this.msg.id === this.socket.socket.id ? 'righty' : 'lefty';
  }

}
