import PageLayout from "@/components/main/page-share-layout";
import UnderConstruction from "@/underconstrction/underconstruction";

export default function AboutPage() {
    return (
        <PageLayout center={
            <div className="w-full h-full">
                <h1>About Page</h1>
                <UnderConstruction/>
                {/* Add your about content here */}
            </div>
        }/>
        
    );
}