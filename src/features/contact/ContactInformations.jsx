import "../../styles/components/ContactInformations.scss";
import ContactItem from "./ContactItem";
import { CiMail } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useSelector } from "react-redux";

function ContactInformations() {
  const { email, address, phone, nationality, birthDate, linkedIn } =
    useSelector((state) => state.contact);
  return (
    <div className="contact--container">
      <h3>CONTACT INFORMATIONS</h3>
      <div>
        <ContactItem icon={<CiMail />} text={email} />
        <ContactItem icon={<FaRegAddressBook />} text={address} />
        <ContactItem icon={<BsTelephone />} text={phone} />
        <ContactItem icon={<CiGlobe />} text={nationality} />
        <ContactItem icon={<CiCalendar />} text={birthDate} />
        <ContactItem icon={<CiLinkedin />} text={linkedIn} />
      </div>
    </div>
  );
}

export default ContactInformations;
