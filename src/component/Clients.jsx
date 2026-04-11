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
    <div className="clientsRoot">
      <style>{css}</style>
      <div className="clientsInner">
        <div className="clientsLeft">
          <div className="clientsKickerWrap">
            <p className="clientsKicker">Client list</p>
            <div className="clientsKickerLine" />
          </div>

          <h2 className="clientsTitle">Not just clients, they are more like partners</h2>

          <button className="clientsCta" type="button">
            News &amp; Awards
          </button>
        </div>

        <div className="clientsRight">
          <div className="clientsLogoGrid">
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
              <div className="clientsLogoCell" key={item.label}>
                <div
                  className="logoPop clientsLogoBox"
                  style={{
                    "--delay": `${idx * 90}ms`,
                    animationDelay: `${idx * 90}ms`,
                  }}
                >
                  <img src={item.src} alt={item.label} className="clientsLogoImg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const css = `
.clientsRoot{
  background: radial-gradient(900px 600px at 20% 20%, rgba(255,255,255,0.08), transparent 60%), #000;
  color: #fff;
  padding: 80px clamp(16px, 4vw, 40px);
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: clip;
}
@media (max-width: 640px){
  .clientsRoot{
    padding: 48px 16px;
  }
}
.clientsInner{
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: clamp(28px, 5vw, 48px);
  align-items: center;
  width: 100%;
  min-width: 0;
}
@media (max-width: 900px){
  .clientsInner{
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
.clientsLeft{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  min-width: 0;
}
@media (max-width: 900px){
  .clientsLeft{
    align-items: center;
    text-align: center;
  }
  .clientsKickerWrap{
    align-items: center;
  }
}
.clientsKickerWrap{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.clientsKicker{
  margin: 0;
  font-size: 12px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.clientsKickerLine{
  width: 44px;
  height: 2px;
  background: rgba(255,255,255,0.35);
}
.clientsTitle{
  margin: 0;
  font-size: clamp(1.65rem, 4.2vw, 2.75rem);
  line-height: 1.12;
  font-weight: 500;
  max-width: 420px;
  color: #f3f4f6;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}
@media (max-width: 900px){
  .clientsTitle{
    max-width: 100%;
  }
}
.clientsCta{
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.35);
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
}
.clientsRight{
  min-width: 0;
  width: 100%;
}
.clientsLogoGrid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  width: 100%;
  background: rgba(255,255,255,0.14);
  border-radius: 12px;
  overflow: hidden;
}
@media (max-width: 520px){
  .clientsLogoGrid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.clientsLogoCell{
  position: relative;
  min-height: clamp(100px, 22vw, 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 3.5vw, 22px);
  background: rgba(0,0,0,0.35);
  box-sizing: border-box;
}
.clientsLogoBox{
  width: 220px;
  max-width: 100%;
  height: 96px;
  background: #f3f4f6;
  color: #111827;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 0;
}
.clientsLogoImg{
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: grayscale(0.05) contrast(1.05);
}
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

export default Clients;