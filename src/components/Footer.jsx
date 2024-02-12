import logoSpotify from '../assets/icons/logo-spotify.svg';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [title, setTitle] = useState('Be Free.');
  const [artist, setArtist] = useState('J. Cole');
  const [cover, setCover] = useState(
    'https://i.scdn.co/image/ab67616d00001e0210e6745bb2f179dd3616b85f'
  );
  const [titleAttr, setTitleAttr] = useState(`${title} by ${artist}`);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('http://localhost/');
        const { token } = await response.json();
        return token;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const fetchPlaylist = async (accessToken) => {
      try {
        const data = await fetch(
          'https://api.spotify.com/v1/playlists/7mZMTUVKNl6hyWInTJqq1d?fields=tracks.items',
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + accessToken,
            },
          }
        );

        const playlist = await data.json();
        const playlistLength = playlist?.tracks?.items.length - 1;
        const randomTrack = Math.ceil(Math.random() * playlistLength);

        const getTrack = (n) => {
          const track = playlist.tracks.items[n].track;
          const { name: trackName, artists, album } = track;
          const trackArtist = artists[0]?.name || 'Unknown Artist';
          const albumCover = album.images[1]?.url || '';

          setTitle(trackName);
          setArtist(trackArtist);
          setCover(albumCover);
          setTitleAttr(`${trackName} by ${trackArtist}`);
        };

        getTrack(randomTrack);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      try {
        const accessToken = await fetchToken();
        await fetchPlaylist(accessToken);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setTitle, setArtist, setCover, setTitleAttr]);

  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__spotify'>
          <img className='footer__spotify-image' src={cover} alt='' />
          <div className='footer__spotify-info'>
            <p className='footer__spotify-title body-m' title={titleAttr}>
              {title.substring(0, 16) + (title.length > 16 ? '...' : '')}
            </p>
            <p className='footer__spotify-artist body-xs'>{artist}</p>
          </div>
          <img
            className='footer__spotify-logo'
            src={logoSpotify}
            alt='Logo Spotify'
          />
        </div>

        <a href='contact.html' className='btn btn--secondary'>
          Get in Touch
        </a>
      </div>
    </footer>
  );
}
