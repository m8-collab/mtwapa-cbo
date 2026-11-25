import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="page-head"><div className="wrap"><h1>Contact us</h1><p>We reply within two working days.</p></div></section>
      <section className="section">
        <div className="wrap">
          <ul className="plain">
            <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phones.map((p) => (<li key={p}>Phone: <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>))}
            <li>Location: {site.location}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
