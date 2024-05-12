import { useEffect, useState } from 'react';

import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [formattedDateTime, setFormattedDateTime] = useState('');

  const capitalizeWords = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getData = async () => {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=dfc884ab11e96f832d54aa9a6136c037'
    );
    const data = await response.json();

    setCity(data.name);
    setCountry(data.sys.country);
    setWeather(data.weather[0].description);
    setTemp(Math.round(data.main.temp));

    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + data.timezone * 1000); // Convert timezone offset from seconds to milliseconds

    // Format date and time using `Intl.DateTimeFormat`
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const dateFormatter = new Intl.DateTimeFormat('de-DE', options); // Use 'de-DE' for German date format
    const parts = dateFormatter.formatToParts(localTime);

    // Extract date and time parts
    let formattedDate = '';
    let formattedTime = '';
    for (const part of parts) {
      if (
        part.type === 'day' ||
        part.type === 'month' ||
        part.type === 'year'
      ) {
        formattedDate += part.value;
        if (part.type === 'day' || part.type === 'month') {
          formattedDate += '.';
        }
      } else if (part.type === 'hour' || part.type === 'minute') {
        if (formattedTime !== '') {
          formattedTime += ':';
        }
        formattedTime += part.value;
      }
    }

    setFormattedDateTime(`${formattedDate} - ${formattedTime}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container container__padding-block'>
        <div className='contact'>
          <div className='contact__content'>
            <h1 className='contact__content-heading'>Let’s discuss</h1>
            <p className='contact__content-text'>
              ideas, projects, design, chess, science, football...
            </p>

            <div className='contact__location'>
              <p>
                <span className='font-weight--semi-bold'>Location:</span>{' '}
                <span>{city}</span>, <span>{country}</span>
              </p>
              <p>
                <span className='font-weight--semi-bold'>Local Time:</span>{' '}
                <span>{formattedDateTime}</span>
              </p>
              <p>
                <span className='font-weight--semi-bold'>
                  Local Temperature:
                </span>{' '}
                <span>{temp}°C</span>
              </p>
              <p>
                <span className='font-weight--semi-bold'>Local Weather:</span>{' '}
                <span>{capitalizeWords(weather)}</span>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
