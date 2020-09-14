importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

import { cacheNames, skipWaiting, clientsClaim, setConfig } from "workbox-core";
import { CacheFirst } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
	new RegExp(".css$"),
	new CacheFirst({
		cacheName: "my-css-cache",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);
registerRoute(
	new RegExp("https://fonts."),
	new CacheFirst({
		cacheName: "my-font-cache",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);

registerRoute(
	new RegExp(".(png|svg|jpg|jpeg)$"),
	new CacheFirst({
		cacheName: "my-image-cache",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);

registerRoute(
	new RegExp("/[A-Z,a-z]{0,}"),
	new CacheFirst({
		cacheName: "my-pages-cache",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);
registerRoute(
	new RegExp("https://cdnjs."),
	new CacheFirst({
		cacheName: "my-scripts-cache",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);
precacheAndRoute([]);
