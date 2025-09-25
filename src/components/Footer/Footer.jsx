import Container from "../Container/Container";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-md">
              A CS ticket system organizes customer queries into manageable
              tickets, assigning them to agents for resolution. It improves
              efficiency, ensures timely responses, tracks progress, and
              enhances customer satisfaction through streamlined workflows and
              transparent communication.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xl font-semibold mb-2">Company</h4>
            <ul className="space-y-3 text-md">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-semibold mb-2">Services</h4>
            <ul className="space-y-3 text-md">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-semibold mb-2">
              Information
            </h4>
            <ul className="space-y-3 text-md">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-semibold mb-2">
              Social Links
            </h4>
            <ul className="space-y-3 text-md">
              <li>
                <a className="hover:text-blue-400 flex items-center gap-2">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 flex items-center gap-2">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a className="hover:text-blue-700 flex items-center gap-2">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 flex items-center gap-2">
                  <FaEnvelope /> Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
