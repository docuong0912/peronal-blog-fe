import TableOfContent from "../ui/ui-table-of-content";

export default async function PageContent({ children }) {
    
    return (
        <div className=" lg:grid lg:grid-cols-5 min-h-screen lg:gap-14 ">
            {children}
        </div>
    );
}