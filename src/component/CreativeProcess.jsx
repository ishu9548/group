import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding your business, goals and audience.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Defining creative direction and communication approach.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Transforming ideas into impactful visual concepts.",
  },
  {
    num: "04",
    title: "Review",
    desc: "Refining designs based on feedback and usability.",
  },
  {
    num: "05",
    title: "Deliver",
    desc: "Final files delivered, ready for print or digital use.",
  },
  {
    num: "06",
    title: "Support",
    desc: "Ongoing creative assistance as your brand evolves.",
  },
];

function CreativeProcess() {
  return (
    <section className="creativeProcessSection">
      <style>{css}</style>

      <div className="creativeProcessInner">
        <header className="creativeProcessHeader">
          <h2 className="creativeProcessTitle">Our Creative Process</h2>
          <p className="creativeProcessSub">
            We begin by understanding your business, objectives, target audience and design requirements through structured
            discussions and briefs.
          </p>
        </header>

        <ol className="creativeProcessSteps">
          {STEPS.map((step) => (
            <li className="creativeProcessStep" key={step.num}>
              <div className="creativeProcessNum" aria-hidden>
                {step.num}
              </div>
              <h3 className="creativeProcessStepTitle">{step.title}</h3>
              <p className="creativeProcessStepDesc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const css = `
.creativeProcessSection{
  width: 100%;
  background: #ffffff;
}
.creativeProcessInner{
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px clamp(16px, 4vw, 24px) 86px;
}
.creativeProcessHeader{
  text-align: center;
  max-width: 820px;
  margin: 0 auto 46px;
}
.creativeProcessTitle{
  margin: 0;
  font-size: clamp(28px, 3.6vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
}
.creativeProcessSub{
  margin: 12px auto 0;
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.7;
  color: rgba(15, 23, 42, 0.72);
}

.creativeProcessSteps{
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(14px, 1.6vw, 22px);
  position: relative;
  align-items: start;
}
/* connecting line behind the number dots */
.creativeProcessSteps::before{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 26px;
  height: 2px;
  background: rgba(148, 163, 184, 0.55);
}
.creativeProcessStep{
  text-align: center;
  padding: 0 6px;
}
.creativeProcessNum{
  width: 52px;
  height: 52px;
  margin: 0 auto 14px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.08em;
  color: rgba(15, 23, 42, 0.78);
  background: #ffffff;
  border: 2px solid rgba(148, 163, 184, 0.7);
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.06);
}
.creativeProcessStepTitle{
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.86);
}
.creativeProcessStepDesc{
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(15, 23, 42, 0.58);
}

@media (max-width: 980px){
  .creativeProcessSteps{
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 28px;
  }
  .creativeProcessSteps::before{
    display: none;
  }
  .creativeProcessStep{
    background: linear-gradient(180deg, rgba(148,163,184,0.12), rgba(148,163,184,0));
    border: 1px solid rgba(148,163,184,0.22);
    border-radius: 16px;
    padding: 16px 12px 14px;
  }
  .creativeProcessNum{
    margin-top: -34px;
  }
}

@media (max-width: 560px){
  .creativeProcessInner{
    padding-top: 62px;
    padding-bottom: 74px;
  }
  .creativeProcessSteps{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
`;

export default CreativeProcess;

