import iconGithub from '../assets/icons/icon-github.svg';
import iconInstagram from '../assets/icons/icon-instagram.svg';
import iconLinkedin from '../assets/icons/icon-linkedin.svg';
import iconMail from '../assets/icons/icon-mail.svg';

export default function ContactForm() {
  return (
    <form className='form' data-netlify='true' name='contact' method='POST'>
      <label className='input-label'>
        Name
        <input
          type='text'
          name='name'
          className='input-element'
          placeholder='John Doe'
          required
        />
      </label>

      <label className='input-label'>
        Email
        <input
          type='email'
          name='email'
          className='input-element'
          placeholder='johndoe@example.com'
          required
        />
      </label>

      <label className='input-label'>
        Message
        <textarea
          name='message'
          placeholder='I have a project in mind....'
          className='input-element input-textarea'
          required></textarea>
      </label>

      <div className='form__footer'>
        <input
          type='submit'
          className='btn btn--primary form__btn'
          value='Send'
        />

        <div className='contact__content-icons'>
          <a href='mailto:dimikalapocev@gmail.com' target='_blank'>
            <img src={iconMail} alt='Mail icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/dimitar-kalapocev/'
            target='_blank'>
            <img src={iconLinkedin} alt='LinkedIn icon' />
          </a>
          <a
            href='https://www.instagram.com/dimitar_kalapocev/'
            target='_blank'>
            <img src={iconInstagram} alt='Instagram icon' />
          </a>
          <a href='https://github.com/DimitarK13' target='_blank'>
            <img src={iconGithub} alt='GitHub icon' />
          </a>
        </div>
      </div>
    </form>
  );
}
