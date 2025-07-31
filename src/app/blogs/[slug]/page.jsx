import LastestBlogGrid from "@/components/main/blog/lastest-blog-grid";
import PageLayout from "@/components/main/page-share-layout";
import TableOfContent from "@/components/ui/ui-table-of-content";
import BlogService from "@/services/BlogService.service";
import UnderConstruction from "@/underconstrction/underconstruction";
import { getStringDate } from "@/utils/string-helper";
import { redirect } from 'next/navigation';
import Link from "next/link";
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
                    ...c,
                    text: c.children[0].text
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
    <div className="w-full h-full lg:pb-30">   
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <div className="flex flex-col gap-6 mt-2 text-neutral-600">
                <p className="italic">Published {getStringDate(blog.createdDate)}</p>
                {blog?.content.map((content, index) => (
                    <span id={content.text} key={index} className={`${!index ? " border-b-2 pb-6 border-[var(--neutral-700)]" : content.type === "heading" ? "font-bold !text-2xl" : ""} text-md text-[var(--neutral-800)] leading-7`}>
                        {content.text}
                    </span>
                ))}
            </div>
            
        </div>
    )
    const relatedArticles = (
        <div className="flex flex-col gap-10 fixed">
            <h1 className="text-xl font-bold">Related Articles</h1>
            {relatedBlogs.map((blog, index) => (
            <Link
                key={blog.slug || index}
                href={`${blog.slug}`}
                className=" hover:underline"
            >
                <p className="text-md font-bold">{blog.title}</p>
                <p className="text-[var(--neutral-700)]">{getStringDate(blog.createdDate)}</p>
            </Link>
            ))}
        </div>
    );

    return (
        <PageLayout left={<TableOfContent headings={blog.content.filter(c => c.type === "heading")}/>} center={mainContent} end={relatedArticles} />
    );
}
