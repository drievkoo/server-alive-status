import { Injectable, EventEmitter, OnDestroy } from '@angular/core';

import { ServerSettings } from '../common/server-settings.model';
import { PingService } from './ping.service';

@Injectable({
  providedIn: 'root'
})
export class ServerSettingsService implements OnDestroy{
	serversChanged = new EventEmitter<ServerSettings[]>();

	private servers: ServerSettings[] = [
		{name: "Me", ip: "http://localhost:4200", connected: false, lastResponse: null, latency: null},
		{name: "Server", ip: "http://localhost:4201", connected: false, lastResponse: null, latency: null}
	];
	private refreshTimer;

  constructor(private pingService: PingService) { 
  	this.servers.forEach(server => this.pingService.checkStatus(server));
  	this.refreshTimer = setInterval(() => {
  		// console.log('Refreshing ..');
  		this.servers.forEach(server => this.pingService.checkStatus(server));
  	}, 2000);
  }

  ngOnDestroy() {
  	clearInterval(this.refreshTimer);
  }

  getServerSettings(): ServerSettings[] {
  	return this.servers.slice();
  }

  addServerSettings(serverSettings: ServerSettings): void {
  	let serverSettingsCopy: ServerSettings = Object.assign({}, serverSettings);
  	this.servers.push(serverSettingsCopy);
  	this.serversChanged.emit(this.servers);
  }

  removeServerSettings(serverSettings: ServerSettings): void {
  	let index = this.servers.indexOf(serverSettings);
  	if (index == -1)
  		return;
  	this.servers.splice(index, 1);
  	this.serversChanged.emit(this.servers);
  }
}
