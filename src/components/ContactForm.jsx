import iconGithub from '../assets/icons/icon-github.svg';
import iconInstagram from '../assets/icons/icon-instagram.svg';
import iconLinkedin from '../assets/icons/icon-linkedin.svg';
import iconMail from '../assets/icons/icon-mail.svg';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.form
      className='form'
      name='contact'
      method='POST'
      variants={container}
      initial='hidden'
      animate='visible'>
      <input type='hidden' name='form-name' value='contact' />
      <motion.label className='input-label' variants={item}>
        Name
        <input
          type='text'
          name='name'
          className='input-element'
          placeholder='John Doe'
          required
        />
      </motion.label>

      <motion.label className='input-label' variants={item}>
        Email
        <input
          type='email'
          name='email'
          className='input-element'
          placeholder='johndoe@example.com'
          required
        />
      </motion.label>

      <motion.label className='input-label' variants={item}>
        Message
        <textarea
          name='message'
          placeholder='I have a project in mind....'
          className='input-element input-textarea'
          required></textarea>
      </motion.label>

      <motion.div className='form__footer' variants={item}>
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
      </motion.div>
    </motion.form>
  );
}
