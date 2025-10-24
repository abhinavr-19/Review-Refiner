import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-8 md:px-12 lg:px-24 bg-transparent border-none">
      <div className="text-center text-sm text-muted-foreground">
        Created by{' '}
        <Link
          href="https://github.com/AbhinavRajesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Abhinav R
        </Link>
        {' | '}
        <Link
          href="https://github.com/AbhinavRajesh/review-refiner"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View on Github
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
