import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <div className='container err__container'>
          <h1 className='body-l err__heading'>
            I don’t know why you’re here... so let me help.
          </h1>

          <div className='err__btn-wrapper'>
            <Link to={`contact/`} className='btn btn--primary'>
              Get in Touch
            </Link>
            <Link to={`work/`} className='btn btn--secondary'>
              Projects
            </Link>
            <Link to={`about/`} className='btn btn--secondary'>
              My Story
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
