import "../styles/components/Navigation.scss";

function Navigation() {
  return (
    <div className="nav">
      <button className="nav__btn--prev">&#8592; Previous</button>
      <button className="nav__btn--next">Next &#8594;</button>
    </div>
  );
}

export default Navigation;
