"use client";
import Link from "next/link";
import { NavList, NavMenu } from "../ui/ui-nav-menu-components";
import { usePathname } from "next/navigation";
import { HomeNavigation } from "@/constants/navigation";
import HamburgerButton from "../ui/ui-hamburger-button";
import { useEffect, useRef, useState } from "react";

const menuNavigation = [
        { name: "Home", path: "/", id: 1 },
        { name: "Blog", path: "/blogs", id: 2 },
        { name: "About", path: "/about", id: 3 },
        { name: "Newsletter", path: "/newsletter", id: 4 }
    ]

export function DesktopNavMenu(){
    const pathname = usePathname()
   
    return(
        <NavMenu>
               
            <div className="flex items-center justify-center">
                <NavList className={"flex gap-6 flex-1 justify-start items-center"}>
                    {
                        menuNavigation.map((item) => (
                            <span key={item.id} className={`${HomeNavigation[pathname] === item.id ? "!border-b-2 font-bold":""} group w-auto text-foreground inline-block text-center`}>
                                <Link href={item.path} className={`${HomeNavigation[pathname] === item.id ? " after:hidden " : ""} after:transition-all after:duration-300 after:ease-in-out relative text-foreground w-full inline-block  text-center after:absolute after:w-0 after:h-full after:top-0 after:left-1/2 after:border-b-2 
            group-hover:after:left-0 group-hover:after:w-full`}>
                                {item.name}
                                </Link>
                            </span>
                        ))
                    }
                </NavList>
            </div>
    </NavMenu>
    )
}

export function MobileNavMenu() {
    const [openMenu, setOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
  let timeoutId;

  function handleClickAnywhere() {
    setOpen(false);
  }

  if (openMenu) {
    // ⏱️ Delay attaching to skip the same click that opened it
    timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickAnywhere);
    }, 1000);
  }

  return () => {
    clearTimeout(timeoutId);
    document.removeEventListener("mousedown", handleClickAnywhere);
  };
}, [openMenu]);

    return (
        <div>
            <HamburgerButton ref={menuRef} open={openMenu} onClick={() => setOpen(!openMenu)}/>
            <NavMenu className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } border border-[var(--neutral-100)] absolute rounded-md p-2 top-20 left-0 w-full bg-[var(--background)] h-auto shadow-lg z-10`}>
                <NavList className={"flex flex-col gap-5 "}>
                    {
                        menuNavigation.map((item) =>{
                            return(
                                <Link className="py-2 not-last:border-b-2 not-last:border-[var(--neutral-100)]" href={item.path} key={item.id}>
                                {item.name}
                                </Link>
                            )
                        })
                    }
                </NavList>
            </NavMenu>
        </div>
    );
}
