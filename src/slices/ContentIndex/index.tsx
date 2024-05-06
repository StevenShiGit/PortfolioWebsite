import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
/**
 * Props for `BlogPostIndex`.
 */
export type BlogPostIndexProps =
  SliceComponentProps<Content.BlogPostIndexSlice>;

/**
 * Component for "BlogPostIndex" Slices.
 */
const BlogPostIndex = async ({
  slice,
}: BlogPostIndexProps): Promise<JSX.Element> => {
  
  const items : { title: string, uid: string, tags: string[], description: string}[]=[
    {"title": "Chess Club Website", "uid": "https://github.com/StevenShiGit", tags: ["React", "MongoDB", "NextJS", "JavaScript"], "description": 
    "Infoboard site I made for school's chess club,  where execs would post updates about the club on the site"},
    {"title": "Stock Sentiment Analayis Dashboard", "uid": "https://github.com/StevenShiGit", tags: ["React", "Pandas", "Flask", "Python"], "description":
    "Stock dashboard with news sentiment analaysis, using pandas and python backend with React frontend"},
    {"title": "Platformer Fighting Game", "uid": "https://github.com/StevenShiGit", tags: ["Java", "Swing"], "description":
  "interactive and fast-paced 2-player fighting game with Java and Swing GUI"}
  ]
  
  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        Projects
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          Some of my personal projects
        </div>
      )}
      <ContentList
        items={items}
        
        viewMoreText="Github Link"
        
      />
    </Bounded>
  );
};

export default BlogPostIndex;
