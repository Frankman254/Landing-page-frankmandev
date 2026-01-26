"use client"
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { useLanguage } from "./language-provider";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 py-6">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Link href="#home" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image 
                            src="/logo_frankman_dev.png" 
                            alt="Frankman Dev Logo" 
                            width={280} 
                            height={180}
                            className="w-auto h-20 md:h-24 lg:h-28 object-contain"
                        />
                    </Link>
                </div>
                {/* Enlaces de navegación */}
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
