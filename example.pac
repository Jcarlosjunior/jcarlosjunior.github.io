
	function FindProxyForURL(url, host) {
		if (isPlainHostName(host) || shExpMatch(host, "*.youtube.*") || shExpMatch(host, "*.googlevideo.com") || shExpMatch(host, "video.google.com") || shExpMatch(host, "video.l.google.com"))
    		return "DIRECT";

  		if (url.substring(0, 5) != "http:" && url.substring(0, 6) != "https:")
    		return "DIRECT";

		let matchUrls = ["redash-demo.broknus.com","calendly.com","*.calendly.com","6sc.co","*.6sc.co","*.hubspot.com"];
		let bypassUrls = [];

		if (bypassUrls.length > 0 && isInList(host, bypassUrls)) {
			return "DIRECT";
		}

		if (matchUrls.length > 0 && isInList(host, matchUrls)) {
			return "PROXY demo3.nullafi.net:44509";
		} 

		return "DIRECT";
	}

	function isInList(url, list) {
		for (var i = 0; i < list.length; i++) {
			if (shExpMatch(url, list[i])) {
				alert(url + "            " + list[i] + " true");
				return true;
			}

			alert(url + "            " + list[i] + " false");
		}
		return false;
	}
	
