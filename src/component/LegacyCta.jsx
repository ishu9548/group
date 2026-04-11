import { Link } from "react-router-dom";

function LegacyCta() {
  return (
    <section style={styles.section}>
      <style>{css}</style>
      <div className="legacyCtaInner">
        <h2 className="legacyCtaHeadline">
          We Don&apos;t Just Tell
          <br />
          Stories.
          <br />
          We Build Legacies.
        </h2>
        <p className="legacyCtaTagline">India&apos;s Leading PR, Branding &amp; Communications Group</p>
        <div className="legacyCtaActions">
          <Link to="/contact" className="legacyCtaBtn legacyCtaBtn--primary">
            Start Your Campaign →
          </Link>
          <a href="#our-work" className="legacyCtaBtn legacyCtaBtn--ghost">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

const css = `
.legacyCtaInner{
  max-width: 920px;
  margin: 0 auto;
  padding: clamp(4rem, 10vw, 6.5rem) 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.legacyCtaHeadline{
  margin: 0;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
  font-size: clamp(2.15rem, 5.5vw, 3.75rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: #0a0a0a;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.9),
    0 12px 40px rgba(0,0,0,0.08),
    0 2px 6px rgba(0,0,0,0.06);
}
.legacyCtaTagline{
  margin: 0;
  max-width: 520px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  font-weight: 400;
  color: #4b5563;
  line-height: 1.55;
}
.legacyCtaActions{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}
.legacyCtaBtn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 999px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease;
}
.legacyCtaBtn--primary{
  background: #0a0a0a;
  color: #fff;
  border: 2px solid #0a0a0a;
  box-shadow: 0 10px 28px rgba(0,0,0,0.18);
}
.legacyCtaBtn--primary:hover{
  transform: translateY(-1px);
  box-shadow: 0 14px 34px rgba(0,0,0,0.22);
}
.legacyCtaBtn--ghost{
  background: transparent;
  color: #0a0a0a;
  border: 2px solid #0a0a0a;
}
.legacyCtaBtn--ghost:hover{
  background: rgba(0,0,0,0.04);
  transform: translateY(-1px);
}
@media (max-width: 480px){
  .legacyCtaActions{
    flex-direction: column;
    width: 100%;
  }
  .legacyCtaBtn{
    width: 100%;
    max-width: 320px;
  }
}
`;

const styles = {
  section: {
    background: "#ffffff",
    width: "100%",
  },
};

export default LegacyCta;
