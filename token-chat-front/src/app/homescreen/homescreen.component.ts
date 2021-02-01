import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {

  roomId = '';
  name = '';
  connected$: BehaviorSubject<boolean>;

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.connected$ = this.socket.connected$;
  }

  create(): void {
    if (this.name !== '') {
      this.socket.create(this.name);
    }
  }

  join(): void {
    if (this.name !== '') {
      this.socket.join(this.roomId, this.name);
    }
  }

}
