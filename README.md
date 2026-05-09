> This extension can be installed from: https://addons.mozilla.org/it/firefox/addon/force-ctrl-click-to-new-tab/

# Force Ctrl+Click to New Tab

A minimal Firefox extension that restores the browser's default behavior: Ctrl+LeftClick (or Cmd+LeftClick on macOS) opens links in a new tab, even on sites that try to override or block it.

## Files
- `manifest.json`
- `background.js`
- `content.js`

## Description
This extension intercepts left-clicks with the Ctrl (or Cmd) modifier, finds the nearest anchor element, prevents the page's handlers, and opens the link in a new background tab via the background script. It requires minimal permissions (`tabs` and `<all_urls>`) and collects no telemetry.

## Installation (temporary, for testing)
1. Download or clone this repository and keep the three files in a single folder.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on** and select the `manifest.json` file from the folder.
4. The extension will load temporarily (it will be removed when Firefox restarts).

## Packaging for release
1. Zip the files with `manifest.json` at the archive root (e.g., `zip -r force-ctrl-click.zip manifest.json background.js content.js`).
2. Submit the ZIP to addons.mozilla.org (AMO) or use AMO's Developer Hub to upload and get a signed XPI for distribution.
3. Ensure `browser_specific_settings.gecko` in `manifest.json` contains a stable `id` and valid `data_collection_permissions` (this repo's manifest uses a minimal declaration indicating no telemetry).

## License
[Unlicensed](https://spdx.org/licenses/Unlicense.html)

