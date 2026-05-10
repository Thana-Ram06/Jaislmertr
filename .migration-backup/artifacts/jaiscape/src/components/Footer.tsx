import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C8A96B]/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
              {['Explore', 'Hidden Places', 'Desert Camps', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-[#C8A96B] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Connect</h4>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">hello@jaiscape.com</li>
              <li className="text-sm text-muted-foreground">+91 98765 43210</li>
              <li className="text-sm text-muted-foreground">Fort Road, Jaisalmer,<br/>Rajasthan 345001</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-2 text-foreground">Stories from the Desert</h4>
            <p className="text-sm text-muted-foreground mb-6">Subscribe to our newsletter for exclusive offers and hidden gems.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#151515] border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-[#C8A96B]"
              />
              <Button className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Jaiscape. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
              <SiInstagram size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
              <SiX size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#C8A96B] transition-colors">
              <SiYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
