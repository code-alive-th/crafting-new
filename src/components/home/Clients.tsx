"use client";
import FadeIn from "../FadeIn";
import Image from "next/image";
import BackToTop from "../BackToTop";

const CLIENTS_ROW_1 = [
  "client-1",
  "client-2",
  "client-3",
  "client-4",
  "client-5",
  "client-6",
  "client-7",
  "client-8",
  "client-9",
  "client-10",
  "client-11",
  "client-12",
];
const CLIENTS_ROW_2 = [
  "client-13",
  "client-14",
  "client-15",
  "client-16",
  "client-17",
  "client-18",
  "client-19",
  "client-21",
  "client-22",
  "client-23",
  "client-24",
  "client-25",
  "client-26",
  "client-27",
  "client-28",
  "client-29",
  "client-30",
  "client-31",
  "client-32",
  "client-33",
  "client-34",
  "client-35",
  "client-36",
];

const ClientLogo = ({ name }: { name: string }) => (
  <div className="client-logo-item">
    <Image
      src={`/assets/clients/${name}.webp`}
      alt="Client Logo"
      width={168}
      height={168}
      className="client-logo-img"
    />
  </div>
);

export default function Clients() {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-content">
        <div className="clients-taglines">
          <FadeIn delayMs={0}>
            <h2 className="section-title clients-title">OUR CLIENTS</h2>
          </FadeIn>
        </div>
        <div className="clients-rows">
          {/* Row 1 */}
          <div className="clients-marquee" id="clients-row-1">
            <div className="clients-marquee-track">
              <div className="clients-marquee-content">
                {CLIENTS_ROW_1.map((name, i) => (
                  <ClientLogo key={`r1-o-${i}`} name={name} />
                ))}
              </div>
              <div className="clients-marquee-content" aria-hidden="true">
                {CLIENTS_ROW_1.map((name, i) => (
                  <ClientLogo key={`r1-d-${i}`} name={name} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Reverse */}
          <div
            className="clients-marquee clients-marquee-reverse"
            id="clients-row-2"
          >
            <div className="clients-marquee-track">
              <div className="clients-marquee-content">
                {CLIENTS_ROW_2.map((name, i) => (
                  <ClientLogo key={`r2-o-${i}`} name={name} />
                ))}
              </div>
              <div className="clients-marquee-content" aria-hidden="true">
                {CLIENTS_ROW_2.map((name, i) => (
                  <ClientLogo key={`r2-d-${i}`} name={name} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="clients-back-to-top">
          <BackToTop />
        </div>
      </div>
    </section>
  );
}
