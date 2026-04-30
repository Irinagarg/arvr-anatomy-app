import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const profiles = [
      "https://medium.com/feed/@profile1",
      "https://medium.com/feed/@profile2",
      "https://medium.com/feed/@profile3",
    ];

    let allBlogs: any[] = [];

    for (const url of profiles) {
      const feed = await parser.parseURL(url);

      const blogs = feed.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
      }));

      allBlogs = [...allBlogs, ...blogs];
    }

    return Response.json(allBlogs);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}