import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-row">
        <Link href="/" className="brand">{site.name}</Link>
        <nav aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
