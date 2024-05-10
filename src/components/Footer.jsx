import logoSpotify from '../assets/icons/logo-spotify.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__spotify'>
          <img
            className='footer__spotify-image'
            src='https://i.scdn.co/image/ab67616d000048517b1fc51ff3257b5286a1ecec'
            alt='MONACO cover'
          />
          <div className='footer__spotify-info'>
            <p
              className='footer__spotify-title body-m'
              title='MONACO by Bad Bunny'>
              MONACO
            </p>
            <p className='footer__spotify-artist body-xs'>Bad Bunny</p>
          </div>
          <img
            className='footer__spotify-logo'
            src={logoSpotify}
            alt='Logo Spotify'
          />
        </div>

        <Link to={`contact`} className='btn btn--secondary'>
          Get in Touch
        </Link>
      </div>
    </footer>
  );
}
