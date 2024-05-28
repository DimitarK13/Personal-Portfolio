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
        Type
        <input
          type='text'
          name='type'
          className='input-element'
          placeholder='Development, Design or Mentor'
          required
        />
      </motion.label>

      <motion.label className='input-label' variants={item}>
        Message
        <input
          type='text'
          name='message'
          className='input-element'
          placeholder='I have a project in mind...'
          required
        />
      </motion.label>

      <input
        type='submit'
        className='btn btn--primary form__btn'
        value='Send'
      />
    </motion.form>
  );
}
