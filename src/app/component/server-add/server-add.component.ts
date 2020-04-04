import { Component, OnInit } from '@angular/core';

import { ServerSettings } from '../../common/server-settings.model';
import { ServerSettingsService } from '../../service/server-settings.service';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
	server: ServerSettings = new ServerSettings();

  constructor(private serverSettingsService: ServerSettingsService) { }

  ngOnInit() {
  }

  addServerSettings(): void {
  	if (!this.server.name || !this.server.ip)
  		return;
  	this.serverSettingsService.addServerSettings(this.server);
  	this.server = new ServerSettings();
  }
}
