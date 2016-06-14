var ws_server = require('ws').Server;

wss = new ws_server({port:9001});

wss.broadcast = function(data, sentBy) {
	for(var i in this.clients)
		if(this.clients[i] != sentBy)
			this.clients[i].send(data);
}