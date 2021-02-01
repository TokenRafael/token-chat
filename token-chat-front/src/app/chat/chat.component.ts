import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  message = '';
  msgs = [
    {
    sender: 'Peri',
    id: '0',
    content: `Bora pra dailyyyy!!!`,
    date: Date.now(),
    },
    {
    sender: 'Rafael',
    id: '1',
    content: `Boraaaaa`,
    date: Date.now(),
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.msgs);
  }

  getRoomId(): string {
    return 'roomID::b894ByuB';
  }

  sendMessage(): void {
    this.message = '';
  }
}
