import "../../styles/components/ContactInformations.scss";
import ContactItem from "./ContactItem";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useSelector } from "react-redux";
import { IoIosLaptop } from "react-icons/io";

function ContactInformations() {
  const { email, phone, github, birthDate, linkedIn, personalSite } =
    useSelector((state) => state.contact);
  return (
    <div className="contact--container">
      <h3>CONTACT INFORMATIONS</h3>
      <div>
        <ContactItem icon={<CiMail />} text={email} />
        <ContactItem icon={<BsTelephone />} text={phone} />
        <ContactItem icon={<CiLinkedin />} text={linkedIn} />
        <ContactItem icon={<FaGithub />} text={github} />
        <ContactItem icon={<CiCalendar />} text={birthDate} />
        <ContactItem icon={<IoIosLaptop />} text={personalSite} />
      </div>
    </div>
  );
}

export default ContactInformations;
