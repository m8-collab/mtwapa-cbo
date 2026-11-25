import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Get involved" };

export default function GetInvolved() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I would like to volunteer with " + site.name)}`;
  return (
    <>
      <section className="page-head"><div className="wrap"><h1>Get involved</h1><p>Give your time, skills or a contribution.</p></div></section>
      <section className="section">
        <div className="wrap">
          <h2>Volunteer</h2>
          <p>Coach a team, help run match days, mentor a young player or lend a creative skill. Message us and we will match you to a role.</p>
          <div className="btns"><a className="btn" href={wa}>Message us on WhatsApp</a></div>
        </div>
      </section>
      <section className="give">
        <div className="wrap">
          <h2>Give by M-Pesa</h2>
          <p className="paybill">Paybill {site.paybill}<br />Account: {site.account}</p>
          <p>Contributions go to jerseys, balls, match-day costs and youth programmes. Businesses can also sponsor the league: contact us.</p>
        </div>
      </section>
    </>
  );
}
