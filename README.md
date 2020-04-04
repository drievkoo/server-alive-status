# ServerAliveStatus

Small utility to help you monitor multiple servers. It basically 'pings' servers in the list and tells you latency. It performs checks from client browser. 

## Screen-shots

![alt text](https://raw.githubusercontent.com/drievkoo/server-alive-status/master/screenshot1.png)

## Details

Application manages and holds list of servers in memory. Server is simply represented by its name and URL (in form of protocol:ip address or domain name:optional port). Servers to watch can be added and/or removed. 

List is refreshed after every 2 seconds. Each server is "pinged" with the help of ping.js utility (see https://github.com/alfg/ping.js/). Server connectivity is refreshed with its observed latency. 
