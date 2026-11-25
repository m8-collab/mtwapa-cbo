// Edit this file first: every page reads from it.
export const site = {
  name: "Mtwapa Premier CBO",
  tagline: "Reaching Talents Aspirations",
  email: "mtwapapremiercbo@gmail.com",
  phones: ["+254 799 669040", "+254 722 370130", "+254 711 413416"],
  whatsapp: "254799669040",
  location: "Mtwapa, Kilifi County, Kenya",
  paybill: "111999",
  account: "344166",
};

export type Program = { title: string; text: string; items: string[]; image?: string; alt?: string; icon?: "film" | "work" };

export const programs: Program[] = [
  { title: "Sports", image: "/images/sports.jpg", alt: "Mtwapa Premier league players lined up before a match", text: "Football is where we began. We run the Mtwapa Premier League, train young players and scout talent across Mtwapa.", items: ["Mtwapa Premier League", "Youth football training", "Talent scouting", "Coaching clinics", "Girls and women in sport"] },
  { title: "Film and arts", icon: "film", text: "We give young people a stage beyond the pitch through film, music, drama and creative work.", items: ["Short film and documentary", "Music and performance", "Creative workshops"] },
  { title: "Company advertisement", image: "/images/advertising.jpg", alt: "Players and officials holding a sponsor banner at a league match", text: "Businesses reach thousands of fans every week by partnering with our league and events.", items: ["Jersey and kit branding", "Banners at match grounds", "Event and tournament sponsorship"] },
  { title: "Scholarship", image: "/images/scholarship.jpg", alt: "Travelers Beach FC, 2024 league champions", text: "We link talented players and learners to scholarships, so school and sport can grow together.", items: ["Scholarship linkage", "School mentorship", "Career guidance"] },
  { title: "Youth empowerment programme", image: "/images/youth.jpg", alt: "Young players and mentors at a Mtwapa Premier match", text: "Mentorship and practical training that prepare young people to lead.", items: ["Leadership training", "Career mentorship", "Financial literacy", "Digital literacy"] },
  { title: "Economic empowerment programme", icon: "work", text: "Skills and start-up support that help young people earn a living.", items: ["Entrepreneurship skills", "Vocational training", "Youth enterprise and jobs"] },
];
