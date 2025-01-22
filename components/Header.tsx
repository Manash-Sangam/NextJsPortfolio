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
    <header className="bg-foreground p-4 shadow-md opacity-90">
      <div className="mx-auto flex justify-end items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-background">
            ☰
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex opacity-100 ' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:gap-20 items-center ">
            <li>
              <Link href="/"  onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/' ? 'border-b-2 border-light-text' : ''}`}>
                  Home
              </Link>
            </li>
            <li>
              <Link href="/about"  onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/about' ? 'border-b-2 border-light-text' : ''}`}>
                  About
              </Link>
            </li>
            <li>
              <Link href="/projects"  onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/projects' ? 'border-b-2 border-light-text' : ''}`}>
                  Projects
              </Link>
            </li>
            <li>
              <Link href="/contact"  onClick={closeMenu} className={`text-background hover:text-gray-600 font-lato ${router.pathname === '/contact' ? 'border-b-2 border-light-text' : ''}`}>
                  Contact
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/assets/resume.pdf" target='_blank' download={"Manash_Sangam_Resume.pdf"} className="text-background hover:text-gray-600 font-lato">
                <FaDownload className="mr-2 text-background hover:text-gray-600" />
              </Link>
              <Link href="/assets/resume.pdf" target='_blank'className="text-background hover:text-gray-600 font-lato">
                  Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}