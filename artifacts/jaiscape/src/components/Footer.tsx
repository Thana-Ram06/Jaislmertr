import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C8A96B]/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-serif text-3xl tracking-wide text-foreground">Jaiscape</span>
              <span className="text-[#C8A96B]">✦</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A premium, cinematic tourism discovery platform for Jaisalmer. Experience the golden city like never before.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "Explore", href: "/explore" },
                { label: "Hidden Places", href: "/hidden-places" },
                { label: "Desert Camps", href: "/desert-camps" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-[#C8A96B] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Connect</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-xs tracking-widest uppercase text-[#C8A96B]/60 mb-1">Email</p>
                <a href="mailto:hellojaiscape@gmail.com" className="text-sm text-muted-foreground hover:text-[#C8A96B] transition-colors">
                  hellojaiscape@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-5 mt-10">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
                <SiInstagram size={18} />
              </a>
              <a href="#" aria-label="X" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
                <SiX size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
                <SiYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Jaiscape. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with love for the Golden City</p>
        </div>
      </div>
    </footer>
  );
}
