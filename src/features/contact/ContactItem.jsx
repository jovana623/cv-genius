import "../../styles/components/ContactItem.scss";

/* eslint-disable react/prop-types */
function ContactItem({ icon, text }) {
  return (
    <div className="contact__details">
      <div className="contact__details--icon">{icon}</div>
      <div className="contact__details--text">{text}</div>
    </div>
  );
}

export default ContactItem;
