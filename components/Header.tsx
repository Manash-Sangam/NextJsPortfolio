import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaDownload } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('.dynamic-text')?.setAttribute('style', `z-index: ${!isOpen ? -1 : 1}`);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.querySelector('.dynamic-text')?.setAttribute('style', 'z-index: 1');
  };

  return (
    <header className="bg-foreground p-4 shadow-md opacity-90 h-10vh ">
      <div className="mx-auto flex h-full justify-end items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-background text-lg">
            ☰
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex opacity-100 ' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:gap-20 items-center text-lg">
            <li>
              <Link href="/" legacyBehavior>
                <a onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/' ? 'border-b-2 border-light-text' : ''}`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/about' ? 'border-b-2 border-light-text' : ''}`}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/projects' ? 'border-b-2 border-light-text' : ''}`}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/contact' ? 'border-b-2 border-light-text' : ''}`}>
                  Contact
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <FaDownload className="mr-2 text-background text-lg" />
              <Link href="#" legacyBehavior>
                <a onClick={closeMenu} className="text-background hover:text-gray-600 font-lato">
                  Resume
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}