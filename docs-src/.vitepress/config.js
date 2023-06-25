export default {
	title: 'MeteoFrance_API',
	description: 'A simple API to get weather data from ®MétéoFrance',
	base: '/',
	outDir: '../docs/',
	markdown: { attrs: { disable: true } },
	themeConfig: {
		sidebar: [
			{
				text: 'Guide',
				items: [
					{ text: 'Propreties', link: '/api/meteofrance_api.propreties.html' }
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