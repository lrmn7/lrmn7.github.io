import type { GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import Tag from "@/components/blog/Tag";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";

type Props = {
  tags: string[];
  tagCounts: { [key: string]: number };
};

const Blog: NextPage<Props> = ({ tags, tagCounts }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <>
      <AppHead title="Blog - Sat Naing" />
      <div className="bg-bglight dark:bg-bgdark min-h-screen">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <section className="blog-section">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Tags</h1>
              <motion.div variants={container} initial="hidden" animate="show">
                {tags &&
                  tags.map((tag: string) => (
                    <Tag
                      tag={tag}
                      size="lg"
                      count={tagCounts[tag]}
                      key={tag}
                      variants={item}
                    />
                  ))}
              </motion.div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["tags"]);

  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }

  const tagCounts: { [key: string]: number } = {};

  for (const tag of tags) {
    tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1;
  }

  tags = tags.filter((x, i, a) => a.indexOf(x) == i);

  return {
    props: {
      tags,
      tagCounts,
    },
  };
};

export default Blog;
