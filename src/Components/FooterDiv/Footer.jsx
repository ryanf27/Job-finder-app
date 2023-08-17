import "./Footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerSection">
        <div className="footerLogo">
          <h1 className="footerTitle">
            <strong>Job</strong>Finder
          </h1>
        </div>
        <p className="footerDescription">
          We always help job seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="footerSection">
        <span className="footerSectionTitle">Company</span>
        <div className="footerLinks">
          <li className="footerLink">About Us</li>
          <li className="footerLink">Features</li>
          <li className="footerLink">News</li>
          <li className="footerLink">FAQ</li>
        </div>
      </div>

      <div className="footerSection">
        <span className="footerSectionTitle">Resource</span>
        <div className="footerLinks">
          <li className="footerLink">Account</li>
          <li className="footerLink">Support Center</li>
          <li className="footerLink">Feedback</li>
          <li className="footerLink">Contact Us</li>
        </div>
      </div>

      <div className="footerSection">
        <span className="footerSectionTitle">Support</span>
        <div className="footerLinks">
          <li className="footerLink">Events</li>
          <li className="footerLink">Promo</li>
          <li className="footerLink">Req Demo</li>
          <li className="footerLink">Careers</li>
        </div>
      </div>

      <div className="footerSection">
        <span className="footerSectionTitle">Contact Info</span>
        <div className="footerContact">
          <small className="footerEmail">appfinderinfo@email.com</small>
          <div className="footerSocialIcons">
            <AiFillInstagram className="footerIcon" />
            <AiFillFacebook className="footerIcon" />
            <AiFillTwitterCircle className="footerIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
