import '../styling/_navigation.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo">Karim.</div>
      <ul className="navigation__list">
          <li className="navigation__list-item">
              <AnchorLink className="navigation__link"  href="#about">About</AnchorLink>
            </li>
            <li className="navigation__list-item">
              <AnchorLink className="navigation__link"  href="#skills">Skills</AnchorLink>
            </li>
            <li className="navigation__list-item">
              <AnchorLink className="navigation__link"  href="#projects">Projects</AnchorLink>
            </li>
      </ul>
    </div>
  );
}

export default Navigation;
