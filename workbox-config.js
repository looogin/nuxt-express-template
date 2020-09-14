module.exports = {
	globDirectory: "static/",
	globPatterns: ["**/*.{css,js,png}"],
	maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
	swDest: "static/sw.js",
	swSrc: "service-worker-src.js",
};
