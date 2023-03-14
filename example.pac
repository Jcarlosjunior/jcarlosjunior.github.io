function FindProxyForURL(url, host) {


//        ====== Section I ==== Internal/Specific Destinations ==============================

//        Most special use IPv4 addresses (RFC 5735) defined within this regex.
          var privateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99)\.[0-9.]+$/;
          var resolved_ip = dnsResolve(host);

//        Specific destinations can be bypassed here. Example lines for host, and
//        domain provided. Replace with your specific information. Add internal
//        domains that cannot be publicly resolved here.

          if (isPlainHostName(host) ||
//                (host == "host.example.com") ||
                  shExpMatch(host, "*.youtube.com")) ||
                  shExpMatch(host, "*.googlevideo.com"))
                  return "DIRECT";



//        ====== Section III ==== Bypasses for other protocols ============================

//        Send everything other than HTTP and HTTPS direct
//        Uncomment middle line if FTP over HTTP is enabled

          if ((url.substring(0,5) != "http:") &&
                 (url.substring(0,6) != "https:"))
                 return "DIRECT";


//        ====== Section IV ==== DEFAULT FORWARDING ================================



//        return "PROXY covidclinic.nullafi.net:3128; DIRECT";
          return "PROXY covidclinic.nullafi.net:3128";
}
