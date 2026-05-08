"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";

function SuccessDots() {
  return <div className="success-dots"></div>;
}

export default function Footer() {
  return (
    <>
      <section className="success-banner" id="success-banner">
        <SuccessDots />
        <div className="success-text-row">
          <div className="your-success-row">
            <FadeIn direction="left" delayMs={100}>
              <span className="success-text">YOUR SUCCESS</span>
            </FadeIn>
          </div>
          <div className="our-success-row">
            <FadeIn direction="right" delayMs={220}>
              <span className="success-text">OUR SUCCESS</span>
            </FadeIn>
          </div>
        </div>
        <SuccessDots />
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-text">CRAFTING</span>
                <div className="footer-logo-second-line">
                  <span className="footer-logo-text">LAB</span>
                  <div className="footer-logo-badge">
                    <span className="footer-logo-c">C</span>
                    <Image
                      src="/assets/brand/footer-circle.svg"
                      alt=""
                      width={42}
                      height={42}
                      className="footer-logo-circle"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-address">
                <p>
                  <strong>CRAFTINGLAB Co.,Ltd.</strong>
                </p>
                <p>24 Nimmanahaeminda Road,</p>
                <p>Tambon Su Thep, Mueang Chiang Mai District,</p>
                <p>Chiang Mai 50200 Thailand</p>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-links">
              <div className="footer-col">
                <p className="footer-col-title">Menus</p>
                <a href="/" className="footer-link">
                  Home
                </a>
                <a href="/services" className="footer-link">
                  Services
                </a>
                <a href="/works" className="footer-link">
                  Works
                </a>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </div>
              <div className="footer-col">
                <p className="footer-col-title">Follow Us</p>
                <a
                  href="https://www.facebook.com/CraftingLab.cnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link-underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/craftinglab.cnx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link-underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-contact-info">
            <span>Mobile: 08-4169-6906</span>
            <span>Email: craftinglab.co@gmail.com</span>
          </div>
          <p className="footer-copyright">
            © CRAFTINGLAB 2026. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
