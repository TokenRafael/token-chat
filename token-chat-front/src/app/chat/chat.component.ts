import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageInfo } from '../message-info';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  user = '';
  message = '';
  msgs: MessageInfo[] = [];
  msgSub: Subscription;

  constructor(private socket: SocketService) {}

  ngOnInit(): void {
    this.user = this.socket.username;
    this.msgSub = this.socket.messages$.subscribe((newMsgs: MessageInfo[]) => {
      this.msgs = newMsgs;
    });
  }

  ngOnDestroy(): void {
    this.msgSub.unsubscribe();
  }

  getRoomId(): string {
    return this.socket.roomId;
  }

  sendMessage(): void {
    this.socket.send(this.message);
    this.message = '';
  }
}
