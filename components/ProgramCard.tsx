import type { Program } from "@/lib/site";

function Icon({ kind }: { kind?: "film" | "work" }) {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      {kind === "film" ? (
        <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9.5v5l4.5-2.5z" /></>
      ) : (
        <><rect x="3" y="8" width="18" height="11" rx="2" /><path d="M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>
      )}
    </svg>
  );
}

export default function ProgramCard({ p, showItems = false }: { p: Program; showItems?: boolean }) {
  return (
    <div>
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="thumb" src={p.image} alt={p.alt ?? ""} width={330} height={190} loading="lazy" />
      ) : (
        <div className="thumb ph" role="img" aria-label={`${p.title} (photo coming soon)`}><Icon kind={p.icon} /></div>
      )}
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      {showItems && <ul className="plain">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>}
    </div>
  );
}
