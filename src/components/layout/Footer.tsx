import Link from "next/link";
import Logo from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
];

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Book Now", href: "/booking" },
      { name: "Shop", href: "/shop" },
      { name: "Our Stylists", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "My Account", href: "/account" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About & Socials */}
          <div className="md:col-span-1 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Luxury hair design and professional products. Experience the art of hair.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline font-semibold tracking-wider text-foreground">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Join Our Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Get the latest on new services, products, and exclusive offers.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Papi Hair Design. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
