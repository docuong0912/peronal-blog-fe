import SocialMedias from "./social-medias";

export default function MainFooter(){
    return(
        <footer className="relative lg:w-[60%] mx-auto p-2 flex justify-between items-center">
            <div>
                Made by Cuuong dep trai
            </div>
            <div>
                <SocialMedias/>
            </div>
        </footer>
    )
}