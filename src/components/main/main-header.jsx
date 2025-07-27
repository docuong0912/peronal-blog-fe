"use client"
import Image from "next/image";
import ThemeSwitcher from "../ui/ui-theme-switcher";
import { DesktopNavMenu, MobileNavMenu, NavList, NavMenu } from "./nav-menu";

export default function MainHeader() {
    return (
        <header className="relative lg:w-[60%] m-auto">
            <div className="mt-4 grid grid-flow-col px-6 py-3 bg-[var(--background)] rounded-xl shadow-sm gap-6 border border-[var(--neutral-300)]">
                 <div className="col-span-5">
                    <Image
                    src="https://i.ibb.co/8LNpmgrK/puppy-looks-like-cat-dog-hybrid-3-5e53856fe264a700-1582620533943853878745-crop-158262099725914378863.webp"
                    alt="avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                />
                </div>
                <div className="hidden lg:flex items-center justify-start">
                    <DesktopNavMenu/>
                </div>
                <div className="lg:hidden mr-3">
                    <MobileNavMenu />
                </div>
                <div className="absolute right-3 top-3">
                    <ThemeSwitcher/>
                </div>
            </div>
            
        </header>
  );
}