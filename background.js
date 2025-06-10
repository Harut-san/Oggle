let enabledTabs = {};

async function toggleOutline(tab) {
  const tabId = tab.id;
  const css = `
    a {
      outline: 3px solid red !important;
    }
    button {
      outline: 3px solid blue !important;
    }
  `;

  const isEnabled = enabledTabs[tabId];

  if (isEnabled) {
    await chrome.scripting.removeCSS({ target: { tabId }, css });
    enabledTabs[tabId] = false;
    chrome.action.setBadgeText({ tabId, text: "" });
  } else {
    await chrome.scripting.insertCSS({ target: { tabId }, css });
    enabledTabs[tabId] = true;
    chrome.action.setBadgeText({ tabId, text: "ON" });
    chrome.action.setBadgeBackgroundColor({ tabId, color: "#00cc00" });
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
