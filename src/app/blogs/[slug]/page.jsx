import LastestBlogGrid from "@/components/main/blog/lastest-blog-grid";
import PageLayout from "@/components/main/page-share-layout";
import TableOfContent from "@/components/ui/ui-table-of-content";
import BlogService from "@/services/BlogService.service";
import UnderConstruction from "@/underconstrction/underconstruction";
import { getStringDate } from "@/utils/string-helper";
import { redirect } from 'next/navigation';
import Link from "next/link";
import BlogTag from "@/components/main/blog/blog-tags";
const fetchBlogDetail = async (slug) => {
    try{
        const blog = await BlogService().getBlogDetailData(slug);
        return mapBlogData(blog);
    }
    catch (error) {
        console.error("Error fetching blog detail:", error);
    }
    
}
function mapBlogData(blogData) {
    return {
        blog:{
            ...blogData?.blog,
            content: blogData?.blog.content.map(c => {
                return{
                    level: c.level || 0,
                    codeParent: c.children[0].code || false,
                    typeParent: c.children[0].type,
                    codeChild: c.code || false,
                    typeChild: c.type,
                    text: c.type === "list" ? c.children.map(content => content.children[0].text) : [c.children[0].text]
                }
            })
        },
        relatedBlogs: blogData?.relatedBlogs

    }
}
export default async function BlogDetail({ params }) {
    const slug = (await params).slug
    const {blog, relatedBlogs} = await fetchBlogDetail(slug);
    const mainContent = (
    <div className="w-full h-full lg:pb-20">   
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <div className="flex flex-col gap-6 mt-2 text-neutral-600">
                <p className="italic">Published {getStringDate(blog.createdDate)}</p>
                {blog?.content.map((content, index) => (
                    <span id={content.text} key={index} className={`${!index ? " border-b-2 pb-6 border-[var(--neutral-700)]" : content.typeChild === "heading" ? "font-bold !text-2xl" : ""} text-md text-[var(--neutral-800)] leading-7`}>
                        {
                            content.text.length === 1 ?
                            content.codeParent ? <code> {content.text[0]} </code> : content.text[0] :
                            <ul className="list-disc">
                                {
                                    content.text.map((txt,k) => {
                                        return <li className="ml-2" key={k}>{txt}</li>
                                    })
                                }
                            </ul>
                            
                        }
                        
                    </span>
                ))}
            </div>
         <BlogTag tags={blog.seoKeyword.split(",")}/>   
        </div>
    )
    const relatedArticles = (
        <div className="fixed flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg max-w-full border border-gray-200">
  <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">Related Articles</h1>

  {relatedBlogs.map((blog, index) => (
    <Link
      key={blog.slug || index}
      href={`${blog.slug}`}
      className="group"
    >
      <div className="mb-2">
        <p className="text-md font-semibold text-blue-600 group-hover:underline transition">
          {blog.title}
        </p>
        <p className="text-sm text-gray-500">{getStringDate(blog.createdDate)}</p>
      </div>
    </Link>
  ))}
</div>
    );

    return (
        <>
            <PageLayout left={<TableOfContent headings={blog.content.filter(c => c.typeChild === "heading")}/>} center={mainContent} end={relatedArticles} />
            
        </>
    );
}
