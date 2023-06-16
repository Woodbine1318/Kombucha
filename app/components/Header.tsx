import { prismic } from '@/lib/prismic';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Header = async () => {
  const nav = await prismic.getSingle('site_navigation', {
    fetchLinks: 'landing_page.name',
  });

  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="c-container">
        <p className="font-display text-center text-2xl font-extrabold py-6 border-b border-black border-opacity-5">
          Kombucha
        </p>

        <nav className="py-4">
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] justify-items-center text-sm">
            {nav.data.links.map(({ link }, index) => (
              <li key={index}>
                <PrismicNextLink field={link} className="uppercase text-xs font-medium first-letter:uppercase">
                  {link.data.name}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
