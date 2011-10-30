// SAMPLE
this.manifest = {
	"name": chrome.i18n.getMessage("extensionName"),
	"icon": "../icons/32-on.png",
	"settings": [
		{
			"tab": chrome.i18n.getMessage("generalTab"),
			"name": "use_highest_accuracy",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("generalTab_accuracyGroup_highAccuracyLabel"),
			"group": chrome.i18n.getMessage("generalTab_accuracyGroup")
		},
		{
			"tab": chrome.i18n.getMessage("generalTab"),
			"group": chrome.i18n.getMessage("generalTab_notificationsGroup"),
			"name": "show_notifications",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("generalTab_notificationsGroup_notifyOnUpdateLabel")
		},
		{
			"tab": chrome.i18n.getMessage("generalTab"),
			"type": "description",
			"text": chrome.i18n.getMessage("generalTab_fixedLocationGroup_description"),
			"group": chrome.i18n.getMessage("generalTab_fixedLocationGroup")
		},
		{
			"tab": chrome.i18n.getMessage("generalTab"),
			"name": "use_fixed_location",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("generalTab_fixedLocationGroup_checkboxLabel"),
			"group": chrome.i18n.getMessage("generalTab_fixedLocationGroup")
		},
		{
			"tab": chrome.i18n.getMessage("generalTab"),
			"name": "fixed_location",
			"type": "text",
			"label": chrome.i18n.getMessage("generalTab_fixedLocationGroup_locationLabel"),
			"text": chrome.i18n.getMessage("generalTab_fixedLocationGroup_locationPlaceholder"),
			"group": chrome.i18n.getMessage("generalTab_fixedLocationGroup")
		},
		
		{
			"tab": chrome.i18n.getMessage("experimentalFeaturesTab"),
			"type": "description",
			"text": chrome.i18n.getMessage("experimentalFeaturesTab_description")
		},
		{
			"tab": chrome.i18n.getMessage("experimentalFeaturesTab"),
			"group": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup"),
			"name": "exp_use_checkins",
			"type": "checkbox",
			"label": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup_checkboxLabel")
		},
		{
			"tab": chrome.i18n.getMessage("experimentalFeaturesTab"),
			"group": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup"),
			"type": "description",
			"text": chrome.i18n.getMessage("experimentalFeaturesTab_checkinsGroup_description")
		},
		
		{
			"tab": chrome.i18n.getMessage("creditsTab"),
			"group": chrome.i18n.getMessage("creditsTab_contributorsGroup"),
			"type": "description",
			"text": chrome.i18n.getMessage("creditsTab_contributorsGroup_list")
		},
		{
			"tab": chrome.i18n.getMessage("creditsTab"),
			"group": chrome.i18n.getMessage("creditsTab_donorsGroup"),
			"type": "description",
			"text": chrome.i18n.getMessage("creditsTab_donorsGroup_list")
		}
	]
};