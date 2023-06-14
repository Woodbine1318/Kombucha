import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="c-container">
        <p className="font-display text-center text-2xl font-extrabold py-6 border-b border-black border-opacity-5">
          Kombucha
        </p>

        <nav className="py-4">
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] justify-items-center text-sm">
            <li>
              <Link className="uppercase text-xs font-medium" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="uppercase text-xs font-medium" href="/about">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
