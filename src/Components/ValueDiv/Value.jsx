import { RiLightbulbLine } from "react-icons/ri";
import "./Value.css";
const ValueSection = () => {
  return (
    <div className="valueSection">
      <h1 className="sectionTitle">Our Values</h1>

      <div className="valueCards">
        <div className="valueCard">
          <div className="valueIcon">
            <RiLightbulbLine className="icon" />
          </div>
          <h2 className="valueTitle">Simplicity</h2>
          <p className="valueDescription">
            We believe in making things beautifully simple, ensuring clarity and
            ease in everything we do.
          </p>
        </div>
        <div className="valueCard">
          <div className="valueIcon">
            <RiLightbulbLine className="icon" />
          </div>
          <h2 className="valueTitle">Innovation</h2>
          <p className="valueDescription">
            Embracing innovation is at the core of our approach, driving us to
            find creative solutions and push boundaries.
          </p>
        </div>
        <div className="valueCard">
          <div className="valueIcon">
            <RiLightbulbLine className="icon" />
          </div>
          <h2 className="valueTitle">Collaboration</h2>
          <p className="valueDescription">
            Collaboration is key to our success. We foster teamwork,
            communication, and mutual respect to achieve great outcomes.
          </p>
        </div>
      </div>

      <div className="ctaSection">
        <h1 className="ctaTitle">Ready to Take the Next Step?</h1>
        <h2 className="ctaSubtitle">Join our team and make an impact!</h2>
        <button className="ctaButton">Get Started</button>
      </div>
    </div>
  );
};

export default ValueSection;
