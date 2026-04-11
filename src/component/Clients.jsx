import jeepLogo from "../assets/jeep.webp";
import yatraLogo from "../assets/yatra.webp";
import hngLogo from "../assets/hng.webp";
import rajasthanLogo from "../assets/rajasthan.webp";
import greengasLogo from "../assets/greengas.webp";
import metroLogo from "../assets/metro.webp";
import blueAirLogo from "../assets/blue-air.webp";
import aquawhiteLogo from "../assets/aquawhite.webp";
import acubeLogo from "../assets/acube.webp";

function Clients() {
    return (
    <div style={styles.container}>
      <style>{css}</style>
      <div style={styles.inner}>
        <div style={styles.left}>
          <div style={styles.kickerWrap}>
            <p style={styles.kicker}>Client list</p>
            <div style={styles.kickerLine} />
          </div>

          <h2 style={styles.title}>Not just clients, they are more like partners</h2>

          <button style={styles.cta} type="button">
            News &amp; Awards
          </button>
        </div>

        <div style={styles.right}>
          <div style={styles.grid}>
            {[
              { label: "Jeep", src: jeepLogo },
              { label: "Yatra", src: yatraLogo },
              { label: "HNG", src: hngLogo },
              { label: "Rajasthan", src: rajasthanLogo },
              { label: "Greengas", src: greengasLogo },
              { label: "Metro", src: metroLogo },
              { label: "Blue Air", src: blueAirLogo },
              { label: "Aquawhite", src: aquawhiteLogo },
              { label: "Acube", src: acubeLogo },
            ].map((item, idx) => (
              <div
                style={{
                  ...styles.logoCell,
                  borderRight: idx % 3 !== 2 ? styles.divider.borderColor : "none",
                  borderBottom: idx < 6 ? styles.divider.borderColor : "none",
                }}
                key={item.label}
              >
                <div
                  className="logoPop"
                  style={{
                    ...styles.logoBox,
                    "--delay": `${idx * 90}ms`,
                    animationDelay: `${idx * 90}ms`,
                  }}
                >
                  <img src={item.src} alt={item.label} style={styles.logoImg} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  const styles = {
    container: {
      background: "radial-gradient(900px 600px at 20% 20%, rgba(255,255,255,0.08), transparent 60%), #000",
      color: "white",
      padding: "80px 40px",
      position: "relative",
    },
    inner: {
      maxWidth: "1120px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(260px, 1fr) minmax(320px, 1.2fr)",
      gap: "48px",
      alignItems: "center",
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "18px",
    },
    kickerWrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
    },
    kicker: {
      margin: 0,
      fontSize: "12px",
      letterSpacing: "1.8px",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)",
    },
    kickerLine: {
      width: "44px",
      height: "2px",
      background: "rgba(255,255,255,0.35)",
    },
    title: {
      margin: 0,
      fontSize: "44px",
      lineHeight: 1.12,
      fontWeight: 500,
      maxWidth: "420px",
      color: "#f3f4f6",
      letterSpacing: "-0.02em",
    },
    cta: {
      background: "transparent",
      color: "white",
      border: "1px solid rgba(255,255,255,0.35)",
      padding: "12px 18px",
      borderRadius: "999px",
      cursor: "pointer",
      fontSize: "13px",
    },
    right: {},
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 0,
    },
    logoCell: {
      position: "relative",
      minHeight: "140px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "22px",
      borderRight: "1px solid rgba(255,255,255,0.14)",
      borderBottom: "1px solid rgba(255,255,255,0.14)",
    },
    divider: {
      borderColor: "1px solid rgba(255,255,255,0.14)",
    },
    logoBox: {
      width: "220px",
      maxWidth: "100%",
      height: "96px",
      background: "#f3f4f6",
      color: "#111827",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      letterSpacing: "0.2px",
      padding: 0,
    },
    logoImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      filter: "grayscale(0.05) contrast(1.05)",
    },
  };
  
  export default Clients;

const css = `
.logoPop{
  opacity: 0;
  transform: translateY(6px) scale(0.985);
  animation: popIn 650ms cubic-bezier(.2,.8,.2,1) forwards, floatY 3.8s ease-in-out infinite;
  animation-delay: var(--delay, 0ms);
  animation-fill-mode: forwards;
  will-change: transform, opacity;
}
@keyframes popIn{
  to{ opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes floatY{
  0%,100%{ transform: translateY(0) scale(1); }
  50%{ transform: translateY(-2px) scale(1); }
}
@media (prefers-reduced-motion: reduce){
  .logoPop{ animation: none; opacity: 1; transform: none; }
}
`;