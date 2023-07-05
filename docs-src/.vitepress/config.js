export default {
	title: 'MeteoFrance_API',
	description: 'A simple API to get weather data from ®MétéoFrance',
	base: '/meteofrance_api/',
	outDir: '../docs/',
	markdown: { attrs: { disable: true } },
	themeConfig: {
		sidebar: [
			{
				text: 'Functions',
				items: [
					{ text: 'getNextRain', link: '/api/meteofrance_api.getnextrain.html' },
					{ text: 'getPlace', link: '/api/meteofrance_api.getplace.html' },
					{ text: 'getWeather', link: '/api/meteofrance_api.getweather.html' }
				],
			},
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/Alexis06030631/meteofrance_api/',
			},
			{
				icon: 'instagram',
				link: 'https://www.instagram.com/leko_system/',
			}
		],
	},
};