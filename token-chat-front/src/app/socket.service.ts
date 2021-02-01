import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { io } from 'socket.io-client';
import { MessageInfo } from './message-info';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;

  username: string;

  connected$ = new BehaviorSubject<boolean>(false);
  roomId: string;
  messages: MessageInfo[] = [];
  messages$ = new BehaviorSubject<MessageInfo[]>([]);

  constructor(
    private router: Router
  ) {
    this.connect();
  }

  connect(): void {
    this.socket = io('http://localhost:9000');
    this.connected$.next(true);

    this.socket.on('connect', () => {
      this.connected$.next(true);
    });
    this.socket.on('disconnect', () => {
      this.router.navigate(['/']);
      this.connected$.next(false);
    });
    this.socket.on('error', (msg: string) => {
      alert(msg);
    });

    this.socket.on('roomId', (roomId: string) => {
      this.roomId = roomId;
      this.router.navigate(['chat']);
    });

    this.socket.on('message', (newMsg: MessageInfo) => {
      this.messages.push(newMsg);
      this.messages = this.messages.slice(-100);
      this.messages$.next(this.messages);
    });
  }

  create(username: string): void {
    this.username = username;
    this.socket.emit('create', username);
  }

  join(id: string, username: string): void {
    this.username = username;
    this.socket.emit('join', id, username);
  }

  send(msg: string): void {
    this.socket.emit('sendMessage', msg, this.roomId);
  }
}
