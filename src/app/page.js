import LastestBlogGrid from "@/components/main/blog/lastest-blog-grid";
import PageLayout from "@/components/main/page-share-layout";
import SocialMedias from "@/components/main/social-medias";
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

 function mappingPageData(data) {
  return {
    pageTitle:  domPurify.sanitize(data.pageTitle[0].children[0].text),
    pageContent: domPurify.sanitize(data.pageContent[0].children[0].text)
  };
}

export default async function Home() {
  const data = await fetchPageData();
  const { pageTitle, pageContent } = mappingPageData(data);
  return (
    <PageLayout center={
       <>
        <div dangerouslySetInnerHTML={{__html: pageTitle}} className="text-xl lg:text-3xl text-center font-bold text-foreground"/>
        <div dangerouslySetInnerHTML={{__html: pageContent}} className="text-center lg:text-start text-lg text-foreground leading-7"/>
        <SocialMedias/>
        <LastestBlogGrid/>
      </>
    }/>
   
       
      
  );
}
