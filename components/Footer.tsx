import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p><strong>{site.name}</strong>. {site.location}</p>
        <p><a href={`mailto:${site.email}`}>{site.email}</a> &nbsp; <a href={`tel:${site.phones[0].replace(/\s/g, "")}`}>{site.phones[0]}</a></p>
        <p className="small">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
