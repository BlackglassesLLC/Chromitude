// SAMPLE
this.manifest = {
	"name": chrome.i18n.getMessage("extensionName"),
	"icon": "../icons/32-on.png",
	"settings": [
		{
			"tab": chrome.i18n.getMessage("locationTab"),
			"name": "use_highest_accuracy",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("locationTab_accuracyGroup_highAccuracyLabel"),
			"group": chrome.i18n.getMessage("locationTab_accuracyGroup")
		},
		{
			"tab": chrome.i18n.getMessage("locationTab"),
			"type": "description",
			"text": chrome.i18n.getMessage("locationTab_fixedLocationGroup_description"),
			"group": chrome.i18n.getMessage("locationTab_fixedLocationGroup")
		},
		{
			"tab": chrome.i18n.getMessage("locationTab"),
			"name": "use_fixed_location",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("locationTab_fixedLocationGroup_checkboxLabel"),
			"group": chrome.i18n.getMessage("locationTab_fixedLocationGroup")
		},
		{
			"tab": chrome.i18n.getMessage("locationTab"),
			"name": "fixed_location",
			"type": "text",
			"label": chrome.i18n.getMessage("locationTab_fixedLocationGroup_locationLabel"),
			"text": chrome.i18n.getMessage("locationTab_fixedLocationGroup_locationPlaceholder"),
			"group": chrome.i18n.getMessage("locationTab_fixedLocationGroup")
		},
		{
			"tab": chrome.i18n.getMessage("experimentalFeaturesTab"),
			"group": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup"),
			"name": "exp_use_checkins",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup_checkboxLabel")
		}
	]
};
/*
this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-characters")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "password",
            "type": "text",
            "label": i18n.get("password"),
            "text": i18n.get("x-characters-pw"),
            "masked": true
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myCheckbox",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myButton",
            "type": "button",
            "label": i18n.get("disconnect"),
            "text": i18n.get("logout")
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": {
                "groups": [
                    "Hot", "Cold",
                ],
                "values": [
                    {
                        "value": "hot",
                        "text": "Very hot",
                        "group": "Hot",
                    },
                    {
                        "value": "Medium",
                        "group": 1,
                    },
                    {
                        "value": "Cold",
                        "group": 2,
                    },
                    ["Non-existing"]
                ],
            },
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myListBox",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myRadioButtons",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        }
    ],
    "alignment": [
        [
            "username",
            "password"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]
    ]
};
*/