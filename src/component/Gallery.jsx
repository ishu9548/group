import showcase from "../assets/b41e25b0-1a86-4104-b2b7-1e1e578bae79.png";

function Gallery() {
  return (
    <section id="our-work" style={styles.section}>
      <style>{css}</style>

      <div className="galleryViewport">
        <img
          src={showcase}
          alt="Merakii showcase"
          className="galleryHero"
        />
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
.galleryHero{
  width: 100%;
  height: 424px;
  display: block;
  object-fit: cover;
  object-position: center;
}
`;

const styles = {
  section: {
    background: "white",
    width: "100%",
  },
};

export default Gallery;
