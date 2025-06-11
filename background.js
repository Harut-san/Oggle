let enabledTabs = {};

async function toggleOutline(tab) {
  const tabId = tab.id;

  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        try {
          const styleId = "__outline_toggle_style__";
          const existing = document.getElementById(styleId);

          if (existing) {
            existing.remove();
          } else {
            const head =
              document.head || document.getElementsByTagName("head")[0];
            if (!head) return;

            const style = document.createElement("style");
            style.id = styleId;
            style.textContent = `
button {
  outline: 3px solid blue !important;
}

a {
  outline: 3px solid red !important;
}

input, textarea {
  outline: 3px solid orange !important;
}

:where([tabindex]:not([tabindex='-1'])) {
  outline: 3px solid green !important;
}
`;
            head.appendChild(style);
          }
        } catch (err) {
          console.error("Error injecting/removing style:", err);
        }
      },
    });

    // Badge update
    const isNowActive = !enabledTabs[tabId];
    enabledTabs[tabId] = isNowActive;

    chrome.action.setBadgeText({ tabId, text: isNowActive ? "ON" : "" });
    if (isNowActive) {
      chrome.action.setBadgeBackgroundColor({ tabId, color: "#00cc00" });
    }
  } catch (e) {
    console.warn(`Script injection failed on tab ${tabId}:`, e.message);
    // Optional: disable badge if the tab is restricted
    chrome.action.setBadgeText({ tabId, text: "" });
    enabledTabs[tabId] = false;
  }
}

chrome.action.onClicked.addListener(toggleOutline);

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-outlines") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab) await toggleOutline(tab);
  }
});
