"use client"
import Link from "next/link";
import BrandLogo from "./brand/brand-logo";
import { Separator } from "./ui/separator";
import { useLanguage } from "./language-provider";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 py-6">
                <div className="flex justify-center md:justify-start">
                    <Link href="#home" className="rounded-[1.5rem] border border-card-border bg-card-bg px-5 py-4 transition hover:opacity-90">
                        <BrandLogo className="justify-center" showTagline />
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 items-center text-sm md:text-base">
                    <Link href="#about-me" className="hover:underline">{t.footer.aboutMe}</Link>
                    <Link href="#skills" className="hover:underline">{t.footer.skills}</Link>
                    <Link href="#services" className="hover:underline">{t.footer.services}</Link>
                    <Link href="#portfolio" className="hover:underline">{t.footer.portfolio}</Link>
                    <Link href="#contact" className="hover:underline">{t.footer.contact}</Link>
                </div>
            </div>
            <Separator/>
            <div className="text-center py-4 text-sm">{t.footer.copyright}</div>
        </footer>
    );
}

export default Footer;
