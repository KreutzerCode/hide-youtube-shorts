window.onload = function() {

    chrome.storage.local.get(null, function(value)
    {
        // hide shorts
        let hideYTShortsInput = document.getElementById("hideYTShortsVideosInput");
        if (value.hideYTShortsVideos != undefined)
            hideYTShortsInput.checked = value.hideYTShortsVideos;
        hideYTShortsInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsVideos: e.target.checked});
        })

        // hide tab
        let hideYTShortsTabInput = document.getElementById("hideYTShortsTabInput");
        if (value.hideYTShortsTab != undefined)
            hideYTShortsTabInput.checked = value.hideYTShortsTab;
        hideYTShortsTabInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsTab: e.target.checked});
        })

        // hide shorts Home
        let hideYTShortsHomeInput = document.getElementById("hideYTShortsVideosOnHomePageInput");
        if (value.hideYTShortsHome != undefined)
            hideYTShortsHomeInput.checked = value.hideYTShortsHome;
        hideYTShortsHomeInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsHome: e.target.checked});
        })
        // hide shorts Subscription
        let hideYTShortsVideosOnSubscriptionPageInput = document.getElementById("hideYTShortsVideosOnSubscriptionPageInput");
        if (value.hideYTShortsVideosOnSubscriptionPage != undefined)
            hideYTShortsVideosOnSubscriptionPageInput.checked = value.hideYTShortsVideosOnSubscriptionPage;
        hideYTShortsVideosOnSubscriptionPageInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsVideosOnSubscriptionPage: e.target.checked});
        })
        // hide shorts Search
        let hideYTShortsVideosOnSearchPageInput = document.getElementById("hideYTShortsVideosOnSearchPageInput");
        if (value.hideYTShortsVideosOnSearchPage != undefined)
            hideYTShortsVideosOnSearchPageInput.checked = value.hideYTShortsVideosOnSearchPage;
        hideYTShortsVideosOnSearchPageInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsVideosOnSearchPage: e.target.checked});
        })
        // hide shorts Channel
        let hideYTShortsVideosOnChannelPageInput = document.getElementById("hideYTShortsVideosOnChannelPageInput");
        if (value.hideYTShortsVideosOnChannelPage != undefined)
            hideYTShortsVideosOnChannelPageInput.checked = value.hideYTShortsVideosOnChannelPage;
        hideYTShortsVideosOnChannelPageInput.addEventListener("input", function(e) {
            chrome.storage.local.set({hideYTShortsVideosOnChannelPage: e.target.checked});
        })

        // timeout
        let hidingShortsTimeoutTimeMsInput = document.getElementById("hidingShortsTimeoutTimeMsInput");
        if (value.hidingShortsTimeoutTimeMs != undefined)
            hidingShortsTimeoutTimeMsInput.value = value.hidingShortsTimeoutTimeMs;
        hidingShortsTimeoutTimeMsInput.addEventListener("input", function(e) {
            const minAttr = parseInt(e.target.min);
            const maxAttr = parseInt(e.target.max);
            if (minAttr > e.target.value)
                e.target.value = minAttr;
            else if (maxAttr < e.target.value)
                e.target.value = maxAttr;
            chrome.storage.local.set({hidingShortsTimeoutTimeMs: e.target.value});
        })
        let hidingShortsTimeoutTimeMsInputCheckbox = document.getElementById("hidingShortsTimeoutTimeMsInputCheckbox");
        if (value.hidingShortsTimeoutActive != undefined)
            hidingShortsTimeoutTimeMsInputCheckbox.checked = value.hidingShortsTimeoutActive;
        hidingShortsTimeoutTimeMsInputCheckbox.addEventListener("input", function(e) {
            chrome.storage.local.set({hidingShortsTimeoutActive: e.target.checked});
        })
        
    });

    // Set language
    document.getElementById("hide_videos_text").textContent=chrome.i18n.getMessage("cfg_hide_videos");
    document.getElementById("hide_tab_text").textContent=chrome.i18n.getMessage("cfg_hide_tab");
    document.getElementById("settings_text").textContent=chrome.i18n.getMessage("setting_text");
    document.getElementById("settings_experimental_text").textContent=chrome.i18n.getMessage("setting_experimental_text");
    document.getElementById("more_dropdown_text").textContent=chrome.i18n.getMessage("more_dropdown_text");
    document.getElementById("hide_shorts_timeout_tooltip_text").textContent=chrome.i18n.getMessage("cfg_hide_shorts_timeout_tooltip");
    document.getElementById("hide_shorts_timeout_text").textContent=chrome.i18n.getMessage("cfg_hide_shorts_timeout");
    document.getElementById("settings_hiding_on_text").textContent=chrome.i18n.getMessage("settings_hiding_on_text");
    document.getElementById("hide_videos_home_text").textContent=chrome.i18n.getMessage("cfg_hide_videos_home");
    document.getElementById("hide_videos_subscription_text").textContent=chrome.i18n.getMessage("cfg_hide_videos_subscription");
    document.getElementById("hide_videos_search_text").textContent=chrome.i18n.getMessage("cfg_hide_videos_search");
    document.getElementById("hide_videos_channel_text").textContent=chrome.i18n.getMessage("cfg_hide_videos_channel");
    
    // version
    let manifestData = chrome.runtime.getManifest();
    document.getElementById("ext-version").textContent = "v" + manifestData.version;
};
