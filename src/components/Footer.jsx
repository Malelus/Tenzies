import { useState } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <footer className={`footer ${showFooter ? 'footer--visible' : ''}`}>
      <a href='https://github.mndev.eu' target='_blank' className='btn btn--icon' onClick={() => setShowFooter(false)}>
        Author <i className='fa-brands fa-github' />
      </a>
      <a
        href='https://github.mndev.eu/Tenzies'
        target='_blank'
        className='btn btn--icon'
        onClick={() => setShowFooter(false)}
      >
        Project <i className='fa-brands fa-github' />
      </a>

      <button className='btn btn--icon footer__toggle' onClick={() => setShowFooter((prev) => !prev)}>
        <i className='fa-brands fa-github' />
      </button>
    </footer>
  );
};

export default Footer;
