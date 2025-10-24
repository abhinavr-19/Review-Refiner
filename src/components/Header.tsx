import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-8">
      <Link href="/">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer">
          <span className="text-white">AR</span>
          <span className="text-primary">.</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
