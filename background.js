let enabledTabs = {};

async function toggleOutline(tab) {
  const tabId = tab.id;

  await chrome.scripting.executeScript({
    target: { tabId },
    func: () => {
      const styleId = "__outline_toggle_style__";
      const existing = document.getElementById(styleId);

      if (existing) {
        existing.remove();
      } else {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          a {
            outline: 3px solid red !important;
          }
          button {
            outline: 3px solid blue !important;
          }
        `;
        document.head.appendChild(style);
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
