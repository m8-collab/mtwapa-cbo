import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className="page-head"><div className="wrap"><h1>About us</h1><p>{site.tagline}.</p></div></section>
      <section className="section">
        <div className="wrap">
          <h2>Who we are</h2>
          <p>{site.name} is a youth-led, non-profit community-based organization in {site.location}. Our work grew out of community football and now reaches into education, the arts and enterprise. We are guided by an elected executive committee led by our chairman, Mr. Ali Nassir.</p>
          <h2>Our mission</h2>
          <p>To identify, nurture and promote football and other youth talents, and to empower young people through mentorship, education, leadership and life skills.</p>
          <h2>What we believe</h2>
          <ul className="plain">
            <li>Integrity, teamwork and accountability in all we do.</li>
            <li>Sport is a tool for discipline, inclusion and peace.</li>
            <li>Boys and girls should have an equal place on the field.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
