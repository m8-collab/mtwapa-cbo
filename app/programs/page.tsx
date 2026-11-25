import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/site";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = { title: "Programs" };

export default function Programs() {
  return (
    <>
      <section className="page-head"><div className="wrap"><h1>Our programs</h1><p>From the football pitch to the first job.</p></div></section>
      <section className="section">
        <div className="wrap">
          <div className="grid">
            {programs.map((p) => (
              <ProgramCard key={p.title} p={p} showItems />
            ))}
          </div>
          <div className="btns"><Link href="/get-involved" className="btn">Support a program</Link></div>
        </div>
      </section>
    </>
  );
}
