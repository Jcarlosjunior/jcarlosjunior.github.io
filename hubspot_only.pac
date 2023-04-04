function FindProxyForURL(url, host) {
//        Specific destinations can be bypassed here. Example lines for host, and
//        domain provided. Replace with your specific information. Add internal
//        domains that cannot be publicly resolved here.

          if (isPlainHostName(host) ||
                  shExpMatch(host, "*.youtube.com") ||
                  shExpMatch(host, "*.googlevideo.com"))
                  return "DIRECT";



//        ====== Section III ==== Bypasses for other protocols ============================

//        Send everything other than HTTP and HTTPS direct
//        Uncomment middle line if FTP over HTTP is enabled

          if ((url.substring(0,5) != "http:") &&
                 (url.substring(0,6) != "https:"))
                 return "DIRECT";

          if (shExpMatch(host, "api.hubspot.com") || shExpMatch(host, "app.hubspot.com"))
                  return "PROXY clikalia.nullafi.net:44509";


//        ====== Section IV ==== DEFAULT FORWARDING ================================
          
          return "DIRECT";
}

