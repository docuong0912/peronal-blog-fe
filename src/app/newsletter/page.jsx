import PageLayout from "@/components/main/page-share-layout";
import UnderConstruction from "@/underconstrction/underconstruction";

export default function NewsletterPage() {
    return (
        <PageLayout center={
            <div className="w-full h-full">
                <h1>Newsletter Page</h1>
                <UnderConstruction/>
                {/* Add your newsletter content here */}
            </div>
        }/>
        
    );
}