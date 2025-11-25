import "./DetailingHero.css";

// VIDEOS from src/assets
import ppfVideo from "../assets/ppf.mp4";
import ceramicVideo from "../assets/ceramics.mp4";
import grapheneVideo from "../assets/modification.mp4";
import bodyshopVideo from "../assets/seat.mp4";

// CAR IMAGE
import carImg from "../assets/car.png";

export default function DetailingHero() {
  return (
    <div className="dx-page">
      {/* Logo + Title */}
      <header className="dx-header">
        <div className="dx-logo">
          <span className="dx-logo-circle">DX</span>
          <span className="dx-logo-text">DETAILING XPERTS</span>
        </div>
        <h1 className="dx-title">OUR SERVICES</h1>
      </header>

      {/* Cards + Car */}
      <section className="dx-hero">
        <div className="dx-cards">
          {/* Card 1 – PPF */}
          <div className="dx-card dx-card-1">
            <div className="dx-card-inner">
              <div className="dx-card-media">
                <video
                  className="dx-card-video"
                  src={ppfVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="dx-card-label">PPF</div>
            </div>
          </div>

          {/* Card 2 – Ceramic Coating */}
          <div className="dx-card dx-card-2">
            <div className="dx-card-inner">
              <div className="dx-card-media">
                <video
                  className="dx-card-video"
                  src={ceramicVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="dx-card-label">
                CERAMIC<br />COATING
              </div>
            </div>
          </div>

          {/* Card 3 – Graphene Coating */}
          <div className="dx-card dx-card-3">
            <div className="dx-card-inner">
              <div className="dx-card-media">
                <video
                  className="dx-card-video"
                  src={grapheneVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="dx-card-label">
                MODIFICATIONS,<br />ACCESSORIES
              </div>
            </div>
          </div>

          {/* Card 4 – Bodyshop */}
          <div className="dx-card dx-card-4">
            <div className="dx-card-inner">
              <div className="dx-card-media">
                <video
                  className="dx-card-video"
                  src={bodyshopVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="dx-card-label">LUXURY SEATS</div>
            </div>
          </div>
        </div>

        {/* Car */}
        <div className="dx-car-wrapper">
          <img src={carImg} alt="Sports car" className="dx-car-img" />
        </div>
      </section>

      {/* Bottom strip */}
      
    </div>
  );
}
