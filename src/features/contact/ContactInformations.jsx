import "../../styles/components/ContactInformations.scss";
import ContactItem from "./ContactItem";
import { CiMail } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function ContactInformations() {
  return (
    <div className="contact--container">
      <h3>CONTACT INFORMATIONS</h3>
      <div>
        <ContactItem icon={<CiMail />} text="example@gmail.com" />
        <ContactItem
          icon={<FaRegAddressBook />}
          text="1234 Market St, San Francisco, CA 94102"
        />
        <ContactItem icon={<BsTelephone />} text="(415) 555-1234" />
        <ContactItem icon={<CiGlobe />} text="American" />
        <ContactItem icon={<CiCalendar />} text="18 March 1995" />
        <ContactItem
          icon={<CiLinkedin />}
          text="linkedin.com/isabella-stewart/"
        />
      </div>
    </div>
  );
}

export default ContactInformations;
