"use client"
import { itemsNavbar } from "@/data";
import Link from "next/link";
import BrandMark from "./brand/brand-mark";
import { ToggleTheme } from "./toggle-theme";
import { ToggleLanguage } from "./toggle-language";
const Navbar = () => {
    return (
        <nav className="fixed z-20 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-3 py-2 
            bg-surface/80 dark:bg-surface/80 backdrop-blur-md rounded-full border border-border shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                <Link
                    href="#home"
                    className="flex items-center justify-center rounded-full border border-border bg-background/90 p-1.5 transition hover:scale-105"
                    aria-label="Frankman Dev"
                >
                    <BrandMark className="w-8" />
                </Link>
                { itemsNavbar.map((item) => (
                    <div key={item.id} className="cursor-pointer text-muted-foreground hover:bg-surface-hover hover:text-foreground dark:hover:bg-surface-hover px-3 py-2 rounded-full transition duration-150">
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