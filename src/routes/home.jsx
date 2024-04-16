import { useEffect, useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('Developer');

  useEffect(() => {
    const titles = ['Designer', 'Instructor', 'Developer'];
    let i = 0;

    setInterval(() => {
      setTitle(titles[i]);
      i = i === titles.length - 1 ? 0 : i + 1;
    }, 3000);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='hero'>
          <h1 className='hero__heading'>{title}</h1>

          <div className='hero__line'></div>

          <div className='hero__info'>
            <p className='hero__text'>
              Hey there, I&apos;m Dimitar, a dedicated web developer with a
              passion to empower your business in the digital world. I
              specialize in designing and developing websites that elevate
              online presence.
            </p>
            <p className='hero__text'>
              Besides development, I&apos;m deeply passionate about guiding
              aspiring talents in mastering the art of web development.
              Let&apos;s collaborate to turn your digital aspirations into a
              vibrant reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
