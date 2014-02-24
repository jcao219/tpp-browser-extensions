function filter_changed() {
    chrome.storage.local.set({filter_enabled : document.getElementById("filter").checked});
}
function stats_changed() {
    chrome.storage.local.set({stats_enabled : document.getElementById("stats").checked});
}

// Restores check box state to saved value from localStorage.
function restore_options(obj) {
    document.getElementById("filter").checked = obj["filter_enabled"] == undefined ? true : obj["filter_enabled"];
    document.getElementById("stats").checked = obj["stats_enabled"] == undefined ? true : obj["stats_enabled"];
}
document.addEventListener('DOMContentLoaded', function() { chrome.storage.local.get(null, restore_options); });