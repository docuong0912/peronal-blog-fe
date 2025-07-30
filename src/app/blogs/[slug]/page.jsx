import BlogService from "@/services/BlogService.service";
import UnderConstruction from "@/underconstrction/underconstruction";
import { getStringDate } from "@/utils/string-helper";
const fetchBlogDetail = async (slug) => {
    try{
        const blog = await BlogService().getBlogDetailData(slug);
        if (!blog) {
            throw new Error("Blog not found");
        }
        return mapBlogData(blog);
    }
    catch (error) {
        console.error("Error fetching blog detail:", error);
        throw new Error("Failed to fetch blog detail");
    }
    
}
function mapBlogData(blogData) {
    return {
        blog:{
            ...blogData.blog,
            content: blogData.blog.content.map(c => {
                return{
                    type: c.type,
                    text: c.children[0].text
                }
            })
        },
        ...blogData.relatedBlogs

    }
}
export default async function BlogDetail({ params }) {
    const slug = (await params).slug
    const {blog, relatedBlogs} = await fetchBlogDetail(slug);
    return (
        <div className="w-full h-full">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <div className="flex flex-col gap-6 mt-2 text-neutral-600">
                <p className="italic">Published {getStringDate(blog.createdDate)}</p>
                {blog.content.map((content, index) => (
                    <span key={index} className={`${!index ? " border-b-2 pb-6 border-[var(--neutral-700)]" : content.type === "heading" ? "font-bold !text-2xl" : ""} text-md text-[var(--neutral-800)] leading-7`}>
                        {content.text}
                    </span>
                ))}
            </div>
        </div>
    );
}