function FooterCol({ title, children }) {
  return (
    <div className="siteFooterCol">
      <h3 className="siteFooterHeading">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href = "#", children, bold }) {
  return (
    <li>
      <a className={bold ? "siteFooterLink siteFooterLink--bold" : "siteFooterLink"} href={href}>
        {children}
      </a>
    </li>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <style>{css}</style>
      <div className="siteFooterInner">
        <div className="siteFooterGrid">
          <div className="siteFooterCol siteFooterCol--brand">
            <p className="footerLogo" aria-label="Merakii">
              <span className="footerLogoPart">MER</span>
              <span className="footerLogoAccent">A</span>
              <span className="footerLogoPart">KII</span>
            </p>
            <p className="footerTagline">KEY TO INNOVATION</p>
          </div>

          <FooterCol title="Services">
            <ul className="siteFooterList">
              <FooterLink href="#">PR &amp; Media</FooterLink>
              <FooterLink href="#">Digital Marketing</FooterLink>
              <FooterLink href="#">Event Management</FooterLink>
              <FooterLink href="#">Performance Marketing</FooterLink>
              <FooterLink href="#">PR &amp; Branding</FooterLink>
              <FooterLink href="#">Campaign &amp; Event Management</FooterLink>
            </ul>
          </FooterCol>

          <FooterCol title="Digital Marketing">
            <ul className="siteFooterList">
              <FooterLink href="#">Lead Based Campaign</FooterLink>
              <FooterLink href="#">Video Marketing</FooterLink>
              <FooterLink href="#">Search Advertising</FooterLink>
              <FooterLink href="#" bold>
                Search Engine Marketing
              </FooterLink>
              <FooterLink href="#">SEO Company in India</FooterLink>
              <FooterLink href="#">Ecommerce SEO</FooterLink>
            </ul>
          </FooterCol>

          <FooterCol title="Company">
            <ul className="siteFooterList">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </ul>
          </FooterCol>

          <FooterCol title="Contact">
            <div className="siteFooterContact">
              <p>A-38, Sector 70, Noida</p>
              <p>
                <a className="siteFooterLink siteFooterLink--inline" href="tel:+918920505457">
                  +91 8920505457
                </a>
              </p>
              <p>
                <a className="siteFooterLink siteFooterLink--inline" href="mailto:info@merakiigroup.in">
                  info@merakiigroup.in
                </a>
              </p>
            </div>
          </FooterCol>
        </div>

        <div className="siteFooterBar">
          <p className="siteFooterCopyright">
            © {year} Merakii Group. All rights reserved.
          </p>
        </div>
      </div>

      <a
        className="siteFooterWa"
        href="https://wa.me/918920505457"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}

const css = `
.siteFooter{
  background: #0a0a0a;
  color: #fff;
  position: relative;
  width: 100%;
}
.siteFooterInner{
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 28px 0;
}
.siteFooterGrid{
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) repeat(4, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 48px);
  padding-bottom: 48px;
  width: 100%;
  min-width: 0;
}
.siteFooterCol{
  min-width: 0;
}
.siteFooterCol--brand{
  padding-right: 12px;
}
.footerLogo{
  margin: 0 0 8px;
  font-size: clamp(22px, 2.4vw, 26px);
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #ffffff;
  line-height: 1.1;
  max-width: 100%;
  overflow-wrap: anywhere;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0,0,0,0.45);
}
.footerLogoPart{
  letter-spacing: 0.2em;
}
.footerLogoAccent{
  color: #3eb4bd;
  letter-spacing: 0.2em;
  text-shadow: 0 1px 2px rgba(0,0,0,0.35);
}
.footerTagline{
  margin: 0;
  font-size: 10px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.92);
  font-weight: 500;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
.siteFooterHeading{
  margin: 0 0 18px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}
.siteFooterList{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.siteFooterLink{
  color: rgba(255,255,255,0.72);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.35;
  transition: color 0.15s ease;
  overflow-wrap: break-word;
  word-break: break-word;
}
.siteFooterLink:hover{
  color: #fff;
}
.siteFooterLink--bold{
  font-weight: 700;
  color: rgba(255,255,255,0.92);
}
.siteFooterLink--inline{
  display: inline;
}
.siteFooterContact{
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.siteFooterContact p{
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255,255,255,0.72);
}
.siteFooterBar{
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 22px 0 32px;
  text-align: center;
}
.siteFooterCopyright{
  margin: 0;
  font-size: 13px;
  color: rgba(255,255,255,0.45);
}
.siteFooterWa{
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 50;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: rgba(0,0,0,0.35) 0 14px 32px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.siteFooterWa:hover{
  transform: scale(1.04);
  box-shadow: rgba(0,0,0,0.4) 0 16px 36px;
}
@media (max-width: 960px){
  .siteFooterGrid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .siteFooterCol--brand{
    grid-column: 1 / -1;
    padding-right: 0;
    margin-bottom: 8px;
  }
}
@media (max-width: 520px){
  .siteFooterGrid{
    grid-template-columns: 1fr;
  }
  .siteFooterCol--brand{
    grid-column: auto;
  }
  .siteFooterInner{
    padding-top: 44px;
  }
}
`;

export default Footer;
