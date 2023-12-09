This is safari extension for [Linkding](https://github.com/sissbruecker/linkding) service.

I'm not the creator of [Linkding](https://github.com/sissbruecker/linkding), nor I'm taking any credit for the service.

This extension simply delegates the bookmark creation to `bookmarks/new` page. It also provides an options page where you can customize your linkding server address. 

I create this extension because:
- I cannot find a safari version. The official extension only supports Chrome and Firefox as of Dec 3rd 2023.
- I don't want to use the official bookmarklet because I have a bookmark bar hidden (Who uses bookmark bar while having linkding ?)

## How to install:
- Clone this repo
- Create a wrapper Safari Extension app using XCode.
- Link the icons in this repo to the Safari Extension project. 
- `pnpm build`
- Link to resources in `dist/` to Safari Extension App.
- Go to Safari Extension App > Product > Run to activate the extension. You will need to allow Safari to load unsigned extension.

or you could get the pre-packaged version from App Store for a fee to help cover the Developer Account fee

<a href="https://apps.apple.com/us/app/linkding-web-extension/id6473717543?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=250x83&amp;releaseDate=1701820800" alt="Download on the Mac App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>

## Privacy Policy
No data of any kind is collected, shared.

The extension itself requires 2 permissions:
- activeTab: to read the current tab url (so that you can save to Linkding)
- storage: to store your linkding server address on your browser **local** storage (so you don't have to configure it every single time)
