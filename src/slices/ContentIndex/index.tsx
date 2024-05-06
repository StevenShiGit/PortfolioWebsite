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
    
    {"title": "Stock Sentiment Analayis Dashboard", "uid": "https://github.com/StevenShiGit", tags: ["React", "Pandas", "Flask", "Python", "REST API", "Tailwind"], "description":
    "Stock dashboard with news sentiment analaysis and displaying recent news"},
  {"title": "3D Portfolio Website", "uid": "https://github.com/StevenShiGit", tags: ["React", "Typescript", "Three.JS","GSAP", "Tailwind"], "description":
  "interactive and fast-paced 2-player fighting game with Java and Swing GUI"},
  {"title": "School News Website", "uid": "https://github.com/StevenShiGit", tags: ["MongoDB", "NextJS", "NodeJS", "JavaScript"], "description": 
    "Annoncement and news website I made for my highschool"},
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
