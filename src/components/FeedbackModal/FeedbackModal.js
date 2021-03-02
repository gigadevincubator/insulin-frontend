import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './FeedbackModal.module.css';

import quotes from './mockup';

const FeedbackModal = ({ isShowing, hide }) => {
  const [randomQuote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const getRandomQuote = () =>
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return isShowing ? (
    <div className={style.modalOverlay}>
      <div
        className={style.modalWrapper}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        {/* <span aria-hidden="true" onClick={hide} className={style.modalClose}>
          &times;
        </span> */}
        <div className={style.quote}>
          <p className={style.quoteText}>"{randomQuote.quote}"</p>
          <p className={style.quoteAuthor}>-{randomQuote.author}</p>
        </div>
        <Link to="/" className={style.modalButton} onClick={getRandomQuote}>
          Dashboard
        </Link>
      </div>
    </div>
  ) : null;
};

export default FeedbackModal;
