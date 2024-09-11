'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import { UIModel } from '@/app/dev/lib/components/UIModel';

export default function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button type="button"
        className="flex items-center justify-center p-3 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 md:hidden"
        onClick={toggleMenu} >
        <Menu size={24} strokeWidth={2} />
      </button>

      {/* Popup Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="relative w-full max-w-sm p-4 rounded-lg shadow-lg bg-base-100" onClick={(e) => e.stopPropagation()} >
            <button type="button" className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={closeMenu} >
              <X size={24} strokeWidth={2} />
            </button>

            <UIModel
              isOpen={isMenuOpen}
              onClose={closeMenu}
              title="Menu" >
              <nav className="flex flex-col">
                <Link className='block px-4 py-2 transition duration-300 rounded-lg hover:bg-base-200' href="/" >Home</Link>
                <Link className='block px-4 py-2 transition duration-300 rounded-lg hover:bg-base-200' href="/everyday/posts" >Archive</Link>
                <Link className='block px-4 py-2 transition duration-300 rounded-lg hover:bg-base-200' href="/everyday/snippets">Snippets</Link>
                <Link className='block px-4 py-2 transition duration-300 rounded-lg hover:bg-base-200' href="/dev/tools">Tools</Link>
                <Link className='block px-4 py-2 transition duration-300 rounded-lg hover:bg-base-200' href="/looking-back">Looking Back</Link>
              </nav>
            </UIModel>

          </div>
        </div>
      )}
    </>
  );
}