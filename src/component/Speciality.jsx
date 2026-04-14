function BrandingArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <path d="M10 95 Q60 20 110 95" fill="none" stroke="#4c1d95" strokeWidth="10" strokeLinecap="round" />
      <polygon points="58,38 68,58 48,58" fill="#f97316" />
      <circle cx="38" cy="72" r="8" fill="#e9d5ff" />
      <circle cx="82" cy="68" r="7" fill="#c4b5fd" />
      <circle cx="60" cy="78" r="5" fill="#a78bfa" />
    </svg>
  );
}

function DigitalArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <rect x="22" y="28" width="76" height="52" rx="6" fill="#0f766e" />
      <rect x="28" y="34" width="64" height="36" rx="3" fill="#ccfbf1" />
      <circle cx="88" cy="48" r="14" fill="none" stroke="#fbbf24" strokeWidth="3" />
      <path d="M94 48h6M97 45v6" stroke="#fbbf24" strokeWidth="2" />
      <path d="M32 78 L48 62 L58 72 L78 48" fill="none" stroke="#fef3c7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MobileArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <rect x="38" y="18" width="44" height="72" rx="8" fill="#27272a" stroke="#52525b" strokeWidth="2" />
      <rect x="44" y="26" width="32" height="48" rx="2" fill="#3f3f46" />
      <circle cx="60" cy="82" r="3" fill="#71717a" />
      <path d="M48 52 L56 44 L64 52 L72 40" fill="none" stroke="#f4f4f5" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="72" cy="38" rx="14" ry="10" fill="#f4f4f5" opacity="0.9" />
    </svg>
  );
}

function OnlineArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <path d="M60 22 L72 48 L100 52 L78 70 L82 98 L60 84 L38 98 L42 70 L20 52 L48 48 Z" fill="#0ea5e9" opacity="0.35" />
      <rect x="44" y="38" width="32" height="24" rx="4" fill="#0369a1" />
      <path d="M52 50h16M60 46v10" stroke="#e0f2fe" strokeWidth="2" />
      <circle cx="28" cy="58" r="8" fill="#bae6fd" />
      <circle cx="92" cy="54" r="8" fill="#7dd3fc" />
      <circle cx="60" cy="78" r="8" fill="#38bdf8" />
    </svg>
  );
}

function SemArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <rect x="28" y="30" width="64" height="44" rx="4" fill="#1e40af" />
      <rect x="34" y="36" width="52" height="28" rx="2" fill="#93c5fd" />
      <polygon points="52,48 58,54 70,42" fill="#1d4ed8" />
      <circle cx="88" cy="42" r="10" fill="none" stroke="#fbbf24" strokeWidth="2" />
      <circle cx="88" cy="42" r="4" fill="#fbbf24" />
    </svg>
  );
}

function SocialArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <rect x="52" y="28" width="36" height="58" rx="6" fill="#fecdd3" />
      <rect x="58" y="36" width="24" height="36" rx="2" fill="#fff" />
      <path d="M64 52h12M70 46v14" stroke="#e11d48" strokeWidth="2" />
      <ellipse cx="38" cy="52" rx="16" ry="22" fill="#fda4af" />
      <path d="M32 48 Q38 42 44 48" fill="none" stroke="#9f1239" strokeWidth="2" />
    </svg>
  );
}

function SeoArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <text x="18" y="58" fill="#c4b5fd" fontSize="28" fontWeight="800" fontFamily="system-ui,sans-serif">
        SEO
      </text>
      <path d="M78 72 L98 42" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" />
      <polygon points="98,42 92,48 96,50" fill="#22d3ee" />
      <circle cx="88" cy="78" r="10" fill="none" stroke="#a78bfa" strokeWidth="3" />
    </svg>
  );
}

function PaidArt() {
  return (
    <svg className="specArt" viewBox="0 0 120 100" aria-hidden>
      <rect x="30" y="30" width="60" height="38" rx="6" fill="#fff1f2" />
      <path d="M42 48h36M60 40v18" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="86" cy="62" r="16" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" />
      <text x="78" y="68" fontSize="18" fontWeight="800" fill="#9f1239" fontFamily="system-ui,sans-serif">
        $
      </text>
    </svg>
  );
}

/** Four columns, staggered top offsets; each column = [top card, bottom card] */
const SPECIALITY_COLUMNS = [
  [
    { title: "Branding", bg: "#facc15", art: BrandingArt, titleOnLight: true },
    { title: "Search Engine Marketing", bg: "#1d4ed8", art: SemArt },
  ],
  [
    { title: "Digital Marketing", bg: "#14b8a6", art: DigitalArt },
    { title: "Paid Marketing", bg: "#fb7185", art: PaidArt },
  ],
  [
    { title: "Mobile Marketing", bg: "#18181b", art: MobileArt },
    { title: "Search Engine Optimization", bg: "#7c3aed", art: SeoArt },
  ],
  [
    { title: "Online Marketing", bg: "#7dd3fc", art: OnlineArt, titleOnLight: true },
    { title: "Social Media Marketing", bg: "#fdba74", art: SocialArt, titleOnLight: true },
  ],
];

function SpecCard({ title, bg, art: Art, titleOnLight }) {
  return (
    <article className="specCard" style={{ background: bg }}>
      <div className="specCardArt">
        <Art />
      </div>
      <h3 className={titleOnLight ? "specCardTitle specCardTitle--ink" : "specCardTitle"}>{title}</h3>
    </article>
  );
}

function Speciality() {
  return (
    <section className="specialitySection">
      <style>{css}</style>

      <div className="specialityInner">
        <div className="specialityBg" aria-hidden>
          <span className="specialityBlob specialityBlob--1" />
          <span className="specialityBlob specialityBlob--2" />
          <span className="specialityGrid" />
        </div>

        <header className="specialityHeader">
          <p className="specialityEyebrow">What we do best</p>
          <h2 className="specialityTitle">Our Speciality</h2>
          <p className="specialitySub">
            End-to-end marketing solutions designed to grow visibility, drive qualified leads, and improve conversions.
          </p>
        </header>

        <div className="cardGridStagger">
          {SPECIALITY_COLUMNS.map((column, colIdx) => (
            <div className={`specCol specCol--${colIdx + 1}`} key={colIdx}>
              {column.map((card) => (
                <SpecCard key={card.title} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const css = `
.specialitySection{
  position: relative;
  width: 100%;
  background:
    radial-gradient(1200px 600px at 10% 0%, rgba(124,58,237,0.14), rgba(124,58,237,0) 55%),
    radial-gradient(900px 520px at 90% 20%, rgba(34,211,238,0.18), rgba(34,211,238,0) 50%),
    linear-gradient(180deg, #fafafa, #f4f4f5);
  overflow: hidden;
}
.specialityInner{
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px 96px;
  position: relative;
}
.specialityBg{
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.specialityBlob{
  position: absolute;
  filter: blur(28px);
  opacity: 0.9;
  transform: translate3d(0,0,0);
}
.specialityBlob--1{
  width: 420px;
  height: 420px;
  left: -140px;
  top: 60px;
  background: radial-gradient(circle at 30% 30%, rgba(124,58,237,0.38), rgba(124,58,237,0) 60%);
}
.specialityBlob--2{
  width: 520px;
  height: 520px;
  right: -220px;
  top: -80px;
  background: radial-gradient(circle at 30% 30%, rgba(34,211,238,0.32), rgba(34,211,238,0) 62%);
}
.specialityGrid{
  position: absolute;
  inset: -1px;
  background:
    linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(closest-side at 50% 20%, rgba(0,0,0,0.75), rgba(0,0,0,0));
  opacity: 0.55;
}
.specialityHeader{
  text-align: center;
  margin: 0 auto 44px;
  max-width: 760px;
  position: relative;
}
.specialityEyebrow{
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.66);
}
.specialityTitle{
  margin: 0;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.specialitySub{
  margin: 14px auto 0;
  font-size: clamp(14px, 1.4vw, 16px);
  line-height: 1.7;
  color: rgba(15, 23, 42, 0.72);
}
.cardGridStagger{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  align-items: start;
  position: relative;
}
.specCol{
  display: flex;
  flex-direction: column;
  gap: 22px;
}
/* Staggered column starts: col 3 highest, cols 2 & 4 stepped down */
.specCol--1{ padding-top: 24px; }
.specCol--2{ padding-top: 72px; }
.specCol--3{ padding-top: 0; }
.specCol--4{ padding-top: 64px; }
@media (max-width: 1024px){
  .cardGridStagger{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .specCol--1, .specCol--2, .specCol--3, .specCol--4{
    padding-top: 0;
  }
  .specCol--2, .specCol--4{
    padding-top: 28px;
  }
}
@media (max-width: 520px){
  .specialityInner{
    padding: 64px 18px 84px;
  }
  .cardGridStagger{
    grid-template-columns: 1fr;
  }
  .specCol--2, .specCol--4{
    padding-top: 0;
  }
}
.specCard{
  position: relative;
  z-index: 0;
  border-radius: 22px;
  min-height: 220px;
  padding: 20px 18px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(2,6,23,0.10);
  border: 1px solid rgba(255,255,255,0.36);
  transform: translate3d(0, 0, 0);
  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, filter 0.28s ease;
}
.specCard::before{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(600px 240px at 20% 0%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%),
    radial-gradient(520px 240px at 80% 20%, rgba(255,255,255,0.22), rgba(255,255,255,0) 60%);
  opacity: 0.9;
  pointer-events: none;
}
.specCard::after{
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0));
  opacity: 0;
  transition: opacity 0.28s ease;
  pointer-events: none;
}
.specCard:hover{
  z-index: 2;
  transform: translate3d(0, -10px, 0) scale(1.05);
  box-shadow: 0 30px 60px rgba(2,6,23,0.18);
  filter: saturate(1.06) contrast(1.03);
}
.specCard:hover::after{
  opacity: 0.9;
}
.specCard:focus-within{
  outline: 3px solid rgba(124,58,237,0.35);
  outline-offset: 3px;
}
.specCardArt{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: relative;
  z-index: 1;
}
.specArt{
  width: min(100%, 140px);
  height: auto;
  max-height: 120px;
}
.specCardTitle{
  margin: 0;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  color: #fff;
  text-align: left;
  align-self: flex-start;
  max-width: 85%;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
  position: relative;
  z-index: 1;
}
.specCardTitle--ink{
  color: #0f172a;
  text-shadow: none;
}
@media (prefers-reduced-motion: reduce){
  .specCard{
    transition: none;
    box-shadow: 0 6px 16px rgba(2,6,23,0.10);
  }
  .specCard:hover{
    z-index: 0;
    transform: none;
    box-shadow: 0 6px 16px rgba(2,6,23,0.10);
  }
}
`;

export default Speciality;
