import "./DetailingHero.css";

// Import your videos
import ppfVideo from "../assets/ppf.mp4";
import ceramicVideo from "../assets/ceramics.mp4";
import grapheneVideo from "../assets/modification.mp4";
import bodyshopVideo from "../assets/seat.mp4";

// Car Image
import carImg from "../assets/car.png";

export default function DetailingHero() {
  return (
    <div className="dx-page">

      {/* Header */}
      <header className="dx-header">
        <div className="dx-logo">
          <span className="dx-logo-circle">DX</span>
          <span className="dx-logo-text">DETAILING XPERTS</span>
        </div>

        <h1 className="dx-title">OUR SERVICES</h1>
      </header>

      {/* Hero Section */}
      <section className="dx-hero">

        {/* SLIDER */}
        <div className="dx-slider-container">
          <div className="dx-slider">

            {/* CARD 1 */}
            <div className="dx-card">
              <video className="dx-card-video" src={ppfVideo} autoPlay loop muted playsInline />
              <div className="dx-card-label">PPF</div>
            </div>

            {/* CARD 2 */}
            <div className="dx-card">
              <video className="dx-card-video" src={ceramicVideo} autoPlay loop muted playsInline />
              <div className="dx-card-label">CERAMIC COATING</div>
            </div>

            {/* CARD 3 */}
            <div className="dx-card">
              <video className="dx-card-video" src={grapheneVideo} autoPlay loop muted playsInline />
              <div className="dx-card-label">MODIFICATIONS</div>
            </div>

            {/* CARD 4 */}
            <div className="dx-card">
              <video className="dx-card-video" src={bodyshopVideo} autoPlay loop muted playsInline />
              <div className="dx-card-label">LUXURY SEATS</div>
            </div>

          </div>
        </div>

        {/* Car Image */}
        <div className="dx-car-wrapper">
          <img src={carImg} alt="Car" className="dx-car-img" />
        </div>

      </section>

    </div>
  );
}
