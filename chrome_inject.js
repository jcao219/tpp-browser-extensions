function callback(obj) {
    if(obj["stats_enabled"] == undefined || obj["stats_enabled"] == true) {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL("chat_stats.user.js");
        s.onload = function() {
            this.parentNode.removeChild(this);
        };
        document.head.appendChild(s);
    }

    if(obj["filter_enabled"] == undefined || obj["filter_enabled"] == true) {
        var x = document.createElement('script');
        x.src = chrome.extension.getURL("chat_filter.user.js");
        x.onload = function() {
            this.parentNode.removeChild(this);
        };
        document.head.appendChild(x);
    }
}

chrome.storage.local.get(null, callback);