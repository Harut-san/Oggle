# Outline Toggle Extension

A minimal Chrome extension to help visualize links and buttons by toggling outlines. Built for developers and testers who want a quick visual indication of key interactive elements.

---

## 🚀 Features

- 🟥 Adds **red outline** to all `<a>` (link) elements
- 🔵 Adds **blue outline** to all `<button>` elements
- 🖱️ Activated via **toolbar icon**
- ⌨️ Or with shortcut: `Cmd+Shift+O` (Mac) / `Ctrl+Shift+O` (Windows/Linux)
- 🔁 Toggle on/off with visual badge indicator ("ON")

---

## 🔧 How to Install

1. Clone or download this repository
2. Go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **"Load unpacked"**
5. Select the project folder

---

## 🧠 Why Use It?

- **Debug layouts and clickable areas**
- **Accessibility checks** (ensure visual indication of interactivity)
- Great for **UI development**, **QA testing**, or training new devs

---

Default is:

- **Mac**: `Cmd+Shift+O`
- **Windows/Linux**: `Ctrl+Shift+O`

---

## 📁 File Structure

| File            | Purpose                                  |
| --------------- | ---------------------------------------- |
| `manifest.json` | Chrome extension config                  |
| `background.js` | Injects/removes outline styles on toggle |
| `icon128.png`   | Extension icon shown in Chrome toolbar   |
| `LICENSE`       | Custom restrictive license               |
| `README.md`     | You're reading it                        |

---

## 📜 License

This project is licensed under a **Custom Personal-Use License**.

- ✅ Personal use allowed
- ✅ Private modifications allowed
- ❌ No redistribution
- ❌ No resale
- ❌ No commercial use

See the [LICENSE](LICENSE) file for full terms.

For commercial licensing or redistribution requests, contact:  
📧 **harutikv@gmail.com**

---

## 🛠 Future Ideas

- Outline other interactive elements (e.g. `input`, `textarea`)
- Domain-specific toggle memory
- Exportable configs / custom colors

---

## 👤 Author

Built by Harut — engineer, tester, maker.  
Reach out for collab, licensing, or feedback:  
📧 **harutikv@gmail.com**
