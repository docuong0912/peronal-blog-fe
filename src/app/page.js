import LastestBlogGrid from "@/components/main/blog/lastest-blog-grid";
import PageLayout from "@/components/main/page-share-layout";
import SocialMedias from "@/components/main/social-medias";
import BlogService from "@/services/BlogService.service";
import PageService from "@/services/PageService.service";
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const window = new JSDOM('').window;
const domPurify = DOMPurify(window);

  async function fetchPageData() {
    const data = await PageService().getHomePageData();
    if (!data) {
      throw new Error("Failed to fetch page data");
    }
    return data
  }
  async function fetchBlogData() {
        try{
            const blogData = await BlogService().getBlogsData({pageNumber: 1, pageSize: 5});
            if(!blogData || !blogData || blogData.length === 0) {
                console.warn("No blogs found");
                return;
            }
            const {blogs, meta} = blogData;
            return blogs
          }
          catch(error) {
              console.error("Failed to fetch latest blogs:", error);
          }
} 

 function mappingPageData(data) {
  return {
    pageTitle:  domPurify.sanitize(data.pageTitle[0].children[0].text),
    pageContent: domPurify.sanitize(data.pageContent[0].children[0].text)
  };
}

export default async function Home() {
  const data = await fetchPageData();
  const blogs = await fetchBlogData();
  const { pageTitle, pageContent } = mappingPageData(data);
  return (
    <PageLayout center={
       <>
        <div dangerouslySetInnerHTML={{__html: pageTitle}} className="text-xl lg:text-3xl text-center font-bold text-foreground"/>
        <div dangerouslySetInnerHTML={{__html: pageContent}} className="text-center lg:text-start text-lg text-foreground leading-7"/>
        <SocialMedias/>
        <LastestBlogGrid blogs={blogs}/>
      </>
    }/>
  );
}
