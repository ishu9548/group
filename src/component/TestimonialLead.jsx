import heroVisual from "../assets/image.webp";

function TestimonialLead() {
  return (
    <section style={styles.section}>
      <style>{css}</style>
      <div className="testimonialLeadInner">
        <div className="testimonialLeadContainer">
          <div className="testimonialLeadVisual">
            <img
              className="testimonialLeadImg"
              src={heroVisual}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="testimonialLeadBody">
            <blockquote className="testimonialLeadQuote">
              <p className="testimonialLeadLine testimonialLeadLine--italic">
                We don&apos;t market brands.
              </p>
              <p className="testimonialLeadLine testimonialLeadLine--emphasis">
                We make them impossible to ignore.
              </p>
            </blockquote>
            <div className="testimonialLeadByline">
              <p className="testimonialLeadName">Ms. Bhagyashree Singh</p>
              <p className="testimonialLeadRole">Founder &amp; CEO, Merakii Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const css = `
.testimonialLeadInner{
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 24px 80px;
}
.testimonialLeadContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: clamp(28px, 5vw, 56px);
}
.testimonialLeadVisual{
  flex: 0 1 min(44%, 440px);
  min-width: 0;
}
.testimonialLeadImg{
  width: 100%;
  height: auto;
  display: block;
  border-radius: 18px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}
.testimonialLeadBody{
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-align: left;
}
@media (max-width: 768px){
  .testimonialLeadContainer{
    flex-direction: column;
    align-items: stretch;
  }
  .testimonialLeadVisual{
    flex: 0 0 auto;
    max-width: 420px;
    margin: 0 auto;
    width: 100%;
  }
  .testimonialLeadBody{
    text-align: center;
    align-items: center;
  }
  .testimonialLeadByline{
    align-items: center;
  }
}
.testimonialLeadQuote{
  margin: 0;
  padding: 0;
  border: none;
}
.testimonialLeadLine{
  margin: 0;
  color: #0a0a0a;
}
.testimonialLeadLine--italic{
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: clamp(22px, 3.2vw, 28px);
  font-style: italic;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.01em;
}
.testimonialLeadLine--emphasis{
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: clamp(26px, 4vw, 36px);
  font-style: italic;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 10px;
  letter-spacing: -0.02em;
}
.testimonialLeadByline{
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
  align-items: flex-start;
}
.testimonialLeadName{
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #0a0a0a;
}
.testimonialLeadRole{
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #52525b;
}
`;

const styles = {
  section: {
    background: "#ffffff",
    width: "100%",
  },
};

export default TestimonialLead;
