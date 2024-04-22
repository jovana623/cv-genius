import "../styles/components/InformationPattern.scss";

/* eslint-disable react/prop-types */
function InformationPattern({ listItem }) {
  return (
    <div>
      <ul className="information__list">
        <li className="list__item">
          <h5 className="list__item--title">{listItem.title}</h5>
          <p className="list__item--details">
            <span className="list__item--subtitle">{listItem.subtitle}</span>,{" "}
            <span> {listItem.location} |</span>{" "}
            <span>
              {listItem.startDate} - {listItem.endDate}
            </span>
          </p>
          <p className="list__item--description">{listItem.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default InformationPattern;
