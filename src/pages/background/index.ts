import linkdingConfigStorage from '@root/src/shared/storages/configStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

async function bookmark(tab: browser.tabs.Tab) {
  const { host } = await linkdingConfigStorage.get();
  if (host == null || host.length === null) {
    await browser.runtime.openOptionsPage();
    return;
  }

  try {
    const url = new URL('bookmarks/new', host);
    await openLinkding(url.toString(), tab.url);
  } catch (e) {
    console.log('Cannot parse given host. Error: ', e);
    await browser.runtime.openOptionsPage();
  }
}

function openLinkding(baseUrl: string, urlToBookmark: string): Promise<browser.tabs.Tab> {
  const applicationUrl = `${baseUrl}?url=${encodeURIComponent(urlToBookmark)}&auto_close`;

  return browser.tabs.create({
    active: true,
    url: applicationUrl,
  });
}

browser.action.onClicked.addListener(bookmark);
