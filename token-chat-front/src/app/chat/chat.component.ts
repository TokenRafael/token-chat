import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message = '';
  msgs = Array.from({length: 100}).map((_, i) => `Mensagem #${i}`);

  constructor() { }

  ngOnInit() {
    console.log(this.msgs)
  }

  getRoomId(): string {
    return 'roomID::b894ByuB'
  }

  sendMessage(): void {
    this.message = '';
  }

}
