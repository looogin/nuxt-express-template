module.exports = {
	/*
	 ** Headers of the page
	 */
	telemetry: false,
	components: true,

	head: {
		title: "starter",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: "Nuxt.js project",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		script: [{ src: "/scripts/start_sw.js" }],
	},
	/*
	 ** Global CSS
	 */
	css: ["~/assets/css/main.css"],
	/*
	 ** Add axios globally
	 */

	build: {},
	router: {},
	plugins: [],
};
