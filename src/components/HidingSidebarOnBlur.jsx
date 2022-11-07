import { useRef, useEffect } from 'react';

const useOutsideAlerter = (ref, setShowFooter) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowFooter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

const HidingSidebarOnBlur = ({ children, showFooter, setShowFooter }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowFooter);

  return (
    <footer className={`footer ${showFooter ? 'footer--visible' : ''}`} ref={wrapperRef}>
      {children}
    </footer>
  );
};

export default HidingSidebarOnBlur;
