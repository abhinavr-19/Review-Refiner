import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 bg-transparent border-none -mt-12">
      <div className="text-center text-sm text-muted-foreground">
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
          href="https://github.com/abhinavr-19/"
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
