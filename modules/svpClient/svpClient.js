/*eslint-env node */
//Request Module
var httpRequest = require('request');


//queries SVP for Event
exports.queryEvent = function(objectId, svpQueryEventEndpoint, clientId, callback) {
	var options = {
		url: svpQueryEventEndpoint+'?objectId=' + objectId,
		headers: {
			'x-ibm-client-id': clientId
		}
	};
	httpRequest(
		options,
		function(error, response, body) {
			try {
				var json = JSON.parse(body);
				var event = json.Envelope.Body.queryResponse.events.event;
				callback(null, event);
			} catch (e) {
				callback(e, null);
			}
		}
	);
};