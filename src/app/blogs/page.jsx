import PageLayout from "@/components/main/page-share-layout";
import UnderConstruction from "@/underconstrction/underconstruction";

export default function BlogsPage() {
    return (
        <PageLayout center={
            <div className="w-full h-full">
                <h1>Blogs Page</h1>
                <UnderConstruction/>
                {/* Add your blog content here */}
            </div>
        }/>
        
    );
}