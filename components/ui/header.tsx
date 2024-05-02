import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import logoImg from '../../public/images/Untitled-1-03-removebg-preview.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Gumonda">
             <h3 className="h2 mb-4 mt-3 text-white" data-aos="fade-up">R<strong className='text-purple-500'>u</strong>y<strong className='text-purple-500'>a</strong>T<strong className='text-purple-500'>e</strong>ch</h3>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/About"
                  className="font-medium text-white-600 hover:text-purple-500 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
              About me
                </Link>
              </li>
              <li>
              <Link href="/products" className="btn-sm text-white  hover:text-purple-500">
              Projects
              </Link>
              <Link href="/contact" className="btn-sm text-white  hover:text-purple-500">
              Contact
              </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
