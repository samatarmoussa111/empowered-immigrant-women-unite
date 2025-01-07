import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { NAVIGATION_ITEMS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      {/* Main Footer Content */}
      <div className="container px-4 sm:px-16 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1fr,1fr] lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/10 p-2">
                <Image
                  src="/logo_empowered_women.png"
                  alt="Empowered Immigrant Women Unite"
                  width={500}
                  height={500}
                  className="h-[120px] w-auto"
                />
              </div>
            </div>
            <p className="text-slate-400 max-w-sm">
              Supporting and empowering immigrant women through resources,
              education, and community building initiatives.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white/5 p-2.5 text-slate-400 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.icon === "twitter" && <Twitter className="h-5 w-5" />}
                  {link.icon === "facebook" && <Facebook className="h-5 w-5" />}
                  {link.icon === "instagram" && (
                    <Instagram className="h-5 w-5" />
                  )}
                  {link.icon === "linkedin" && <Linkedin className="h-5 w-5" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs/professional-development"
                  className="text-slate-400 transition-colors hover:text-primary"
                >
                  Professional Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/language-culture"
                  className="text-slate-400 transition-colors hover:text-primary"
                >
                  Language & Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/entrepreneurship"
                  className="text-slate-400 transition-colors hover:text-primary"
                >
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/mentorship"
                  className="text-slate-400 transition-colors hover:text-primary"
                >
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact Us
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="transition-colors hover:text-primary"
                >
                  contact@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-primary"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="max-w-xs">
                123 Community Center,
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
