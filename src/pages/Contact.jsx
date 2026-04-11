import { useState, useEffect, useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import contactHero from "../assets/contact.png";
import contactPanelBg from "../assets/image.webp";

const HUBSPOT_SUBMIT_URL =
  "https://api.hsforms.com/submissions/v3/integration/submit/244718886/265c3812-d5c3-4208-a687-d9f128c8d5da";

const QUICK_CONTACT = [
  {
    id: "email",
    href: "mailto:info@merakiigroup.in",
    icon: "mail",
    title: "Email Us",
    value: "info@merakiigroup.in",
    description: "Send us an email anytime",
  },
  {
    id: "phone",
    href: "tel:+918920505457",
    icon: "phone",
    title: "Call Us",
    value: "+91 8920505457",
    description: "Mon–Sat, 9am–6pm IST",
  },
  {
    id: "visit",
    href: "https://maps.google.com/?q=A-38+Sector+70+Noida",
    external: true,
    icon: "location",
    title: "Visit Us",
    value: "Merakii Group\nA-38, Sector 70\nNoida",
    description: "We are happy to welcome you!",
  },
  {
    id: "hours",
    href: null,
    icon: "clock",
    title: "Office Hours",
    value: "Monday – Saturday: 9am – 6pm IST\nSunday: Closed",
    description: "Visit us during business hours",
  },
];

function QuickContactIcon({ type }) {
  if (type === "mail") {
    return (
      <div className="contactQuickIcon contactQuickIcon--mail" aria-hidden>
        @
      </div>
    );
  }
  if (type === "phone") {
    return (
      <div className="contactQuickIcon contactQuickIcon--phone" aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
    );
  }
  if (type === "location") {
    return (
      <div className="contactQuickIcon contactQuickIcon--location" aria-hidden>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="contactQuickIcon contactQuickIcon--clock" aria-hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    </div>
  );
}

function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSubmit = {
      fields: [
        { objectTypeId: "0-1", name: "email", value: formData.email },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: formData.name.split(" ")[0] || formData.name,
        },
        { objectTypeId: "0-1", name: "phone", value: formData.phone },
        { objectTypeId: "0-1", name: "subject", value: formData.subject },
        { objectTypeId: "0-1", name: "message", value: formData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow Merakii Group to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Merakii Group.",
            },
          ],
        },
      },
    };

    try {
      const response = await fetch(HUBSPOT_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSubmit),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.inlineMessage) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (err) {
      console.error("HubSpot form submission error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const pad = isMobile ? "2rem 1rem" : "3rem 1.5rem";
  const headingColor = "#0b3d91";
  const mutedColor = "#6b7280";
  const serif = `Georgia, "Times New Roman", Times, serif`;
  const sans = `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;

  return (
    <div className="contact-page-root">
      <style>
        {`
          @keyframes slideInFromLeft {
            from { opacity: 0; transform: translateX(-12px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .contact-page-root {
            width: 100%;
            max-width: 100%;
            overflow-x: clip;
          }
          .contact-info-item { opacity: 0; }
          .animate-slide-in-left-1 { animation: slideInFromLeft 0.8s ease-out 0.2s forwards; }
          .animate-slide-in-left-2 { animation: slideInFromLeft 0.8s ease-out 0.4s forwards; }
          .animate-slide-in-left-3 { animation: slideInFromLeft 0.8s ease-out 0.6s forwards; }
          .contactHero {
            position: relative;
            width: 100%;
            max-width: 100%;
            min-height: min(72vh, 560px);
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(105deg, rgba(15, 23, 42, 0.82) 0%, rgba(30, 58, 95, 0.78) 45%, rgba(15, 23, 42, 0.85) 100%), url(${contactHero});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: clamp(3rem, 8vw, 5rem) 1.5rem;
          }
          .contactHeroInner {
            max-width: 820px;
            margin: 0 auto;
            text-align: center;
            color: #fff;
          }
          .contactHeroBadge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.45rem 1.1rem;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.35);
            border: 1px solid rgba(255, 255, 255, 0.45);
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            font-family: ${sans};
          }
          .contactHeroBadgeDot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #34d399;
            flex-shrink: 0;
          }
          .contactHeroTitle {
            margin: 0 0 1.25rem;
            font-family: ${serif};
            font-size: clamp(2rem, 5vw, 3.1rem);
            font-weight: 700;
            line-height: 1.12;
            letter-spacing: -0.02em;
          }
          .contactHeroTitleAccent {
            color: #7dd3c0;
          }
          .contactHeroSub {
            margin: 0 auto;
            max-width: 640px;
            font-family: ${sans};
            font-size: clamp(0.95rem, 2vw, 1.08rem);
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.92);
            font-weight: 400;
          }
          .contactQuickRow {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
            max-width: 960px;
            margin: 0 auto;
            width: 100%;
          }
          @media (max-width: 640px) {
            .contactQuickRow {
              grid-template-columns: 1fr;
            }
          }
          .contactQuickCard {
            display: flex;
            align-items: flex-start;
            gap: 1.15rem;
            padding: 2rem;
            min-width: 0;
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
            text-decoration: none;
            color: inherit;
            border: 1px solid rgba(226, 232, 240, 0.95);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          a.contactQuickCard:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
          }
          .contactQuickIcon {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 1.25rem;
            font-weight: 700;
          }
          .contactQuickIcon--mail {
            background: #ede9fe;
            color: #2563eb;
          }
          .contactQuickIcon--phone {
            background: #fce7f3;
            color: #db2777;
          }
          .contactQuickIcon--location {
            background: #fce7f3;
            color: #db2777;
          }
          .contactQuickIcon--clock {
            background: #f3f4f6;
            color: #6b7280;
          }
          .contactQuickBody {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }
          .contactQuickLabel {
            margin: 0;
            font-family: ${serif};
            font-size: 1.08rem;
            font-weight: 700;
            color: #1a237e;
          }
          .contactQuickValue {
            margin: 0;
            font-family: ${sans};
            font-size: 0.98rem;
            font-weight: 500;
            color: #3f51b5;
            line-height: 1.5;
            white-space: pre-line;
          }
          .contactQuickDesc {
            margin: 0.35rem 0 0;
            font-family: ${sans};
            font-size: 0.85rem;
            color: #757575;
            line-height: 1.45;
          }
        `}
      </style>
      <Navbar />

      <section className="contactHero" aria-labelledby="contact-hero-title">
        <div className="contactHeroInner">
          <div className="contactHeroBadge">
            <span className="contactHeroBadgeDot" aria-hidden />
            Get in Touch
          </div>
          <h1 id="contact-hero-title" className="contactHeroTitle">
            Let&apos;s build what matters <span className="contactHeroTitleAccent">next.</span>
          </h1>
          <p className="contactHeroSub">
            Have a brand or campaign challenge? We&apos;re here to help. Share your project details, and we&apos;ll
            co-design a solution that turns your vision into work people remember.
          </p>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          maxWidth: "min(100%, 1200px)",
          boxSizing: "border-box",
          padding: pad,
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "2.5rem" : "3rem",
          margin: "0 auto",
          background: "#fafafa",
        }}
      >
        <section className="contactQuickRow" aria-label="Contact options">
          {QUICK_CONTACT.map((card) => {
            const body = (
              <>
                <QuickContactIcon type={card.icon} />
                <div className="contactQuickBody">
                  <p className="contactQuickLabel">{card.title}</p>
                  <p className="contactQuickValue">{card.value}</p>
                  <p className="contactQuickDesc">{card.description}</p>
                </div>
              </>
            );
            return card.href ? (
              <a key={card.id} className="contactQuickCard" href={card.href} {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {body}
              </a>
            ) : (
              <div key={card.id} className="contactQuickCard" role="group">
                {body}
              </div>
            );
          })}
        </section>

        <section
          ref={sectionRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 0,
            alignItems: "stretch",
            border: "1px solid #e5e5e5",
            borderRadius: "12px",
            overflow: "hidden",
            width: "100%",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.72) 100%), url(${contactPanelBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: isMobile ? "3rem 2rem" : "4rem 3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              minHeight: isMobile ? "auto" : "600px",
            }}
          >
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div
                className={`contact-info-item ${isSectionVisible ? "animate-slide-in-left-1" : ""}`}
                style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}
              >
                <div style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "1rem",
                      fontWeight: 700,
                      margin: "0 0 0.5rem 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Address
                  </h3>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>
                    Merakii Group
                    <br />
                    A-38, Sector 70
                    <br />
                    Noida
                  </p>
                </div>
              </div>

              <div
                className={`contact-info-item ${isSectionVisible ? "animate-slide-in-left-2" : ""}`}
                style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}
              >
                <div style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "1rem",
                      fontWeight: 700,
                      margin: "0 0 0.5rem 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Let&apos;s Talk
                  </h3>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", margin: 0 }}>
                    <a href="tel:+918920505457" style={{ color: "#fff", textDecoration: "underline" }}>
                      +91 8920505457
                    </a>
                  </p>
                </div>
              </div>

              <div
                className={`contact-info-item ${isSectionVisible ? "animate-slide-in-left-3" : ""}`}
                style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}
              >
                <div style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "1rem",
                      fontWeight: 700,
                      margin: "0 0 0.5rem 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Email
                  </h3>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", margin: 0 }}>
                    <a href="mailto:info@merakiigroup.in" style={{ color: "#fff", textDecoration: "underline" }}>
                      info@merakiigroup.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: isMobile ? "2rem 1.5rem" : "3rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ margin: "0 0 0.5rem 0", color: headingColor, fontSize: "1.5rem", fontWeight: 700 }}>
              Send us a message
            </h2>
            <p style={{ margin: "0 0 1.75rem 0", color: mutedColor, fontSize: "0.95rem", lineHeight: 1.5 }}>
              Fill out the form and our team will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem", color: "#374151" }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle(!!formErrors.name)}
                />
                {formErrors.name ? <span style={errorStyle}>{formErrors.name}</span> : null}
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem", color: "#374151" }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle(!!formErrors.email)}
                />
                {formErrors.email ? <span style={errorStyle}>{formErrors.email}</span> : null}
              </div>
              <div>
                <label htmlFor="contact-phone" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem", color: "#374151" }}>
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle(!!formErrors.phone)}
                />
                {formErrors.phone ? <span style={errorStyle}>{formErrors.phone}</span> : null}
              </div>
              <div>
                <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem", color: "#374151" }}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={inputStyle(!!formErrors.subject)}
                />
                {formErrors.subject ? <span style={errorStyle}>{formErrors.subject}</span> : null}
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem", color: "#374151" }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{ ...inputStyle(!!formErrors.message), resize: "vertical", minHeight: "120px" }}
                />
                {formErrors.message ? <span style={errorStyle}>{formErrors.message}</span> : null}
              </div>
              {submitStatus === "success" ? (
                <p style={{ margin: 0, color: "#15803d", fontSize: "0.95rem", fontWeight: 600 }}>Thank you! We will be in touch soon.</p>
              ) : null}
              {submitStatus === "error" ? (
                <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.95rem" }}>Something went wrong. Please try again or email us directly.</p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "10px",
                  border: "none",
                  background: isSubmitting ? "#94a3b8" : headingColor,
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function inputStyle(err) {
  return {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.65rem 0.85rem",
    borderRadius: "8px",
    border: err ? "1px solid #dc2626" : "1px solid #d1d5db",
    fontSize: "1rem",
    outline: "none",
  };
}

const errorStyle = {
  display: "block",
  color: "#dc2626",
  fontSize: "0.8rem",
  marginTop: "0.25rem",
};

export default Contact;
