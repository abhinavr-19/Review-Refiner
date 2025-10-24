import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 flex justify-center items-center text-center">
      <div className="text-sm text-muted-foreground">
        Created by{' '}
        <a
          href="https://abhinavr.work"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Abhinav R
        </a>
        {' | '}
        <a
          href="https://github.com/abhinavr-19/Review-Refiner"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View on Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
