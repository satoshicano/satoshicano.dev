import { extract } from "@extractus/article-extractor";

export async function getLinkPreview(url: string) {
	try {
		const article = await extract(url);
		if (article) {
			return {
				title: article.title,
				description: article.description,
				image: article.image,
			};
		}
		return null;
	} catch (error) {
		console.error("Error fetching link preview:", error);
		return null;
	}
}
