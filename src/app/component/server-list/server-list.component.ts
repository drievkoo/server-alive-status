import { Component, OnInit } from '@angular/core';

import { ServerSettings } from '../../common/server-settings.model';
import { ServerSettingsService } from '../../service/server-settings.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
	servers: ServerSettings[] = [];

  constructor(private serverSettingsService: ServerSettingsService) { }

  ngOnInit() {
  	this.servers = this.serverSettingsService.getServerSettings();
  	this.serverSettingsService.serversChanged.subscribe(servers => this.servers = servers);
  }

  remove(server: ServerSettings) {
  	this.serverSettingsService.removeServerSettings(server);
  }
}
