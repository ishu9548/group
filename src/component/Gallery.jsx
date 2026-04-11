import showcase from "../assets/b41e25b0-1a86-4104-b2b7-1e1e578bae79.png";

function Gallery() {
  return (
    <section id="our-work" style={styles.section}>
      <style>{css}</style>

      <div className="galleryViewport galleryHeroWrap">
        <img
          src={showcase}
          alt="Merakii showcase"
          className="galleryHero"
        />
        <div className="galleryOverlay">
          <div className="galleryOverlayMain">
            <p className="galleryWelcome">
              <span className="galleryWelcomeLine" aria-hidden="true" />
              <span>WELCOME TO</span>
              <span className="galleryWelcomeLine" aria-hidden="true" />
            </p>
            <h1 className="galleryTitle">Merakii</h1>
            <p className="gallerySubtitle">KEY TO INNOVATION</p>
          </div>
          <p className="galleryTagline">
            Precision digital solutions for a connected world
          </p>
        </div>
      </div>
    </section>
  );
}

const css = `
.galleryViewport{
  overflow: hidden;
  width: 100%;
  height: 424px;
  line-height: 0;
}
.galleryHeroWrap{
  position: relative;
}
.galleryHero{
  width: 100%;
  height: 424px;
  display: block;
  object-fit: cover;
  object-position: center;
}
.galleryOverlay{
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 52px;
  box-sizing: border-box;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.28) 0%,
    transparent 38%,
    transparent 62%,
    rgba(0,0,0,0.22) 100%
  );
}
.galleryOverlayMain{
  text-align: center;
  max-width: min(92vw, 640px);
}
.galleryWelcome{
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 2.5vw, 18px);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(10px, 1.35vw, 12px);
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 1px 14px rgba(0,0,0,0.45);
}
.galleryWelcomeLine{
  width: clamp(22px, 5vw, 48px);
  height: 1px;
  background: rgba(255,255,255,0.55);
  flex-shrink: 0;
}
.galleryTitle{
  margin: 0;
  padding: 0;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
  font-size: clamp(1.85rem, 5.2vw, 2.85rem);
  letter-spacing: 0.04em;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 2px 28px rgba(0,0,0,0.5);
}
.gallerySubtitle{
  margin: 10px 0 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(11px, 1.65vw, 14px);
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 12px rgba(0,0,0,0.45);
}
.galleryTagline{
  position: absolute;
  left: 50%;
  bottom: clamp(14px, 3.5vw, 28px);
  transform: translateX(-50%);
  width: min(90%, 480px);
  margin: 0;
  text-align: center;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(11px, 1.45vw, 13px);
  font-weight: 400;
  line-height: 1.45;
  color: rgba(255,255,255,0.78);
  text-shadow: 0 1px 10px rgba(0,0,0,0.5);
}
`;

const styles = {
  section: {
    background: "white",
    width: "100%",
  },
};

export default Gallery;
