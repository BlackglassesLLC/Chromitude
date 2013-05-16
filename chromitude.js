settings =
{
    oauth_domain: '891356443055.apps.googleusercontent.com',
    consumer_key: '891356443055.apps.googleusercontent.com',
    consumer_secret: 'iEcwn1/WBJN641EwVnRI4S7I',
    simple_key: 'AIzaSyCsAmNmY6qz8ibtX31mbPQOsC_AN6g-CxE',
    app_name: 'Chromitude'
};

function startProgram() {

    var clientSettings = new Store("settings", {
        // Small If Statements for carrying over settings from 0.x versions
        "state": (localStorage["state"] == "off") ? false : true, // True for On, False for Off
        "use_fixed_location": (localStorage["use_fixed_location"] == "on") ? true : false,
        "fixed_location": (localStorage["fixed_location"]) ? (JSON.parse('{"coords":{"latitude":0,"longitude":0}}')).coords.latitude + ',' + (JSON.parse('{"coords":{"latitude":0,"longitude":0}}')).coords.longitude : "",
        "show_notifications": (localStorage["show_notification"] == "on") ? true : false,
        // New Features
        "has_shown_donate": false,
        "has_shown_v1.0": false,
        "use_highest_accuracy": true
    });

    function changedSetupAffectingVariable() {
        runSetup();
    }

    clientSettings.watch("use_fixed_location", changedSetupAffectingVariable);
    clientSettings.watch("use_highest_accuracy", changedSetupAffectingVariable);

    console.log(settings);
    googleAuth = new OAuth2('google', {
        client_id: settings.consumer_key,
        client_secret: settings.consumer_secret,
        api_scope: 'https://www.googleapis.com/auth/latitude.current.best'
    });

    googleAuth.authorize(runSetup);

    function updateAction() {
        if (clientSettings.get("state")) {
            chrome.browserAction.setIcon({path: "icons/32-on.png"});
            chrome.browserAction.setTitle({title: chrome.i18n.getMessage("turnOff")});
        }
        else if (clientSettings.get("use_fixed_location")) {
            chrome.browserAction.setIcon({path: "icons/32-off.png"});
            chrome.browserAction.setTitle({title: chrome.i18n.getMessage("clickToUpdate")});
        }
        else {
            chrome.browserAction.setIcon({path: "icons/32-off.png"});
            chrome.browserAction.setTitle({title: chrome.i18n.getMessage("turnOn")});
        }
    }

    function toggleState() {
        if (clientSettings.get("state"))
            clientSettings.set("state", false);
        else
            clientSettings.set("state", true);
        runSetup();
    }

    function runSetup() {
        updateAction();

        if (document.updateWatch) navigator.geolocation.clearWatch(document.updateWatch);

        if (!clientSettings.get("state")) {
            document.lastPosition = undefined;
            return;
        }

        if (clientSettings.get("use_fixed_location")) {
            var coords = clientSettings.get("fixed_location").split(',');
            if (coords[0] && coords[1]) {
                ourLoc = { coords: { } };
                ourLoc.coords.latitude = coords[0];
                ourLoc.coords.longitude = coords[1];
                ourLoc.timestamp = Math.floor(+new Date);
                ourLoc.coords.accuracy = 10;
                document.lastPosition = ourLoc;
                updatePosition(ourLoc);
            }
            setTimeout(function () {
                clientSettings.set("state", false);
                updateAction();
            }, 1500);

            return;
        }


        document.updateWatch = navigator.geolocation.watchPosition(function (pos) {

            // If for some reason its the same as the last one, exit out of the function
            if (document.lastPosition && pos.coords == document.lastPosition.coords) return;
            document.lastPosition = pos;

            // Update the Position
            updatePosition(pos, function (response) {
                // Tel the User
                if (clientSettings.get("show_notifications")) {
                    var notification = webkitNotifications.createNotification(
                        chrome.extension.getURL('/icons/128-on.png'),
                        chrome.i18n.getMessage("extensionName"),
                        chrome.i18n.getMessage("locationHasBeenUpdated")
                    );
                    notification.show();
                    setTimeout(function () {
                        notification.cancel();
                    }, 5000);
                }
            });

        }, function () {
        }, { enableHighAccuracy: clientSettings.get("use_highest_accuracy") });
    }

    function updatePosition(pos, success) {
        var location =
        {
            "data": {
                "kind": "latitude#location",
                "timestampMs": pos.timestamp,
                "latitude": pos.coords.latitude,
                "longitude": pos.coords.longitude,
                "accuracy": pos.coords.accuracy,
                "speed": pos.coords.speed,
                "altitude": pos.coords.altitude,
                "altitudeAccuracy": pos.coords.altitudeAccuracy
            }
        };
        googleAuth.authorize(function () {
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200 && success !== undefined) success(JSON.parse(xhr.responseText));
            };
            xhr.open('POST', 'https://www.googleapis.com/latitude/v1/currentLocation?sensor=true&key=' + settings.simple_key + '&oauth_token=' + googleAuth.getAccessToken());
            xhr.setRequestHeader('Authorization', 'OAuth ' + googleAuth.getAccessToken());
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(location));
        });
    }

    chrome.browserAction.onClicked.addListener(function (tab) {
        toggleState();
    });
}
startProgram();
