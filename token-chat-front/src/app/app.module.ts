import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatTooltipModule} from '@angular/material/tooltip'; 

import { ClipboardModule } from "@angular/cdk/clipboard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [			AppComponent,
      HomescreenComponent,
      ChatComponent,
      MessageComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
