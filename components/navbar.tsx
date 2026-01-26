"use client"
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { ToggleLanguage } from "./toggle-language";
const Navbar = () => {
    return (
        <nav className="fixed z-20 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-4 py-1 
            bg-surface/80 dark:bg-surface/80 backdrop-blur-sm rounded-full border border-border">
                { itemsNavbar.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:bg-surface-hover dark:hover:bg-surface-hover px-3 py-2 rounded-full transition duration-150">
                        <Link href={item.link}>{item.icon}</Link>

                    </div>
                )) }
                <ToggleLanguage/>
                <ToggleTheme/>
            </div>
        </nav>
    );
}
export default Navbar;