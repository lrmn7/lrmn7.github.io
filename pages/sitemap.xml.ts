import { GetStaticProps, NextPage } from "next";
import { getAllPosts } from "utils/api";
import slugify from "utils/slugify";

type Data = {
  slugs: string[];
  tags: string[];
  categories: string[];
};

const generateSiteMap = ({ slugs, categories, tags }: Data) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags</loc>
      </url>
      ${categories
        .map((category) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/categories/${category}</loc>
        </url>
      `;
        })
        .join("")}
      ${tags
        .map((tag) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/tags/${tag}</loc>
        </url>
      `;
        })
        .join("")}
      
      ${slugs
        .map((slug) => {
          return `
        <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/blog/posts/${slug}</loc>
        </url>
      `;
        })
        .join("")}
   </urlset>
 `;
};

const SiteMap: NextPage = () => {
  // This component will not be rendered
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  // Retrieve slugs tags and category from contents folder
  const posts = getAllPosts(["slug", "tags", "category"]);

  // Generate unique categories and store it in array
  const categories = Array.from(
    new Set(posts.map((post) => slugify(post.category as string)))
  );

  // Generate unique tags and store it in array
  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }
  tags = Array.from(new Set(tags));

  // Generate encoded slugs and store it in array
  const slugs = posts.map((post) =>
    encodeURIComponent((post.slug as string).trim())
  );

  const data: Data = { slugs, tags, categories };

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  return {
    props: {
      sitemap,
    },
  };
};

export default SiteMap;
