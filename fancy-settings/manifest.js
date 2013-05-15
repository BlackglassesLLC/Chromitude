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
        },
        {
            "tab": chrome.i18n.getMessage("creditsTab"),
            "group": chrome.i18n.getMessage("creditsTab_donateGroup"),
            "type": "description",
            "text": '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" id="donateButton"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="WFAZD6HFNB9MC"><input type="image" src="https://www.paypalobjects.com/' + chrome.i18n.getMessage('@@ui_locale') + '/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/' + chrome.i18n.getMessage('@@ui_locale') + '/i/scr/pixel.gif" width="1" height="1"></form>'
        }
    ]
};
