import Link from "next/link";
import { programs, site } from "@/lib/site";
import ProgramCard from "@/components/ProgramCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Mtwapa&apos;s young <em>talent</em> starts here.</h1>
          <p>{site.name} uses football and the arts to give young people in Mtwapa skills, scholarships and a way forward.</p>
          <div className="btns">
            <Link href="/get-involved" className="btn">Volunteer or give</Link>
            <Link href="/programs" className="btn ghost">See our programs</Link>
          </div>
        </div>
      </section>
      <svg className="tide" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <rect width="1440" height="60" fill="#fff" />
        <path d="M0 0h1440v20c-120 30-240 30-360 10S840 0 720 10 480 50 360 40 120 10 0 30z" fill="#0B3C49" />
      </svg>
      <section className="section">
        <div className="wrap">
          <h2>What we do</h2>
          <div className="grid">
            {programs.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="give">
        <div className="wrap">
          <h2>Back the next generation</h2>
          <p>Send any amount by M-Pesa. Go to Lipa na M-Pesa, choose Paybill, then enter:</p>
          <p className="paybill">Business no. {site.paybill}<br />Account: {site.account}</p>
          <Link href="/get-involved" className="btn">Other ways to help</Link>
        </div>
      </section>
    </>
  );
}
