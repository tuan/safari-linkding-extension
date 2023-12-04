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

