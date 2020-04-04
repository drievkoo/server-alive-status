import { Injectable } from '@angular/core';

import { ServerSettings } from '../common/server-settings.model';
// import { Ping } from 'ping.js';
import Ping from 'ping.js';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor() { }

  checkStatus(server: ServerSettings) {
  	let pingCall = new Ping({timeout: 500});
  	pingCall.ping(server.ip, (err, data) => {
  		// console.log('Pinging ' + server.ip);
  		if (err)
  			server.connected = false;
  		else
  		{
  			server.connected = true;
  			server.lastResponse = new Date();
  			server.latency = data;
  		}
  	});
  }
}
