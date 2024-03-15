import rss from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'MyTitle',
		description: 'MyDesc',
		site: context.site,
		items: []
	});
}
