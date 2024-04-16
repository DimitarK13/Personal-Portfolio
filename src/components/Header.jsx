import { Link } from 'react-router-dom';
import { useState } from 'react';
import iconMenu from '../assets/icons/icon-menu.svg';
import iconClose from '../assets/icons/icon-close.svg';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navIcon, setNavIcon] = useState(iconMenu);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    isNavOpen ? setNavIcon(iconMenu) : setNavIcon(iconClose);
  };

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  };

  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <button
          className='nav__toggle'
          aria-controls='primary-nav'
          aria-expanded={isNavOpen}
          onClick={toggleNav}>
          <img src={navIcon} alt='Menu toggle open' />
        </button>

        <ul className='nav__list' id='primary-nav' aria-expanded={isNavOpen}>
          <li className='nav__list-item'>
            <Link to={`/`} onClick={toggleNav}>
              01. Home
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to={`about`} onClick={toggleNav}>
              02. About
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to={`work`} onClick={toggleNav}>
              03. Work
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link to={`contact`} onClick={toggleNav}>
              04. Contact
            </Link>
          </li>
        </ul>

        <div className='nav__availability-status'>
          <div
            className='nav__availability-status--toggle'
            aria-controls='availability-status-message'
            aria-expanded={isStatusOpen}
            onClick={toggleStatus}>
            <p className='body-s'>Current Status:</p>
            <p className='body-m color--available font-weight--medium'>
              Available
            </p>
          </div>

          <div
            className='nav__availability-status--message'
            id='availability-status-message'
            aria-expanded={isStatusOpen}>
            <p className='nav__availability-status__title'>
              Project Availability Status
            </p>

            <p className='body-s color--available'>
              Ready to begin immediately. Contact me now to get started!
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
