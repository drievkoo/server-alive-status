import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerAddComponent } from './component/server-add/server-add.component';
import { ServerSettingsService } from './service/server-settings.service';
import { PingService } from './service/ping.service';
import { ServerListComponent } from './component/server-list/server-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerAddComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	ServerSettingsService,
  	PingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
