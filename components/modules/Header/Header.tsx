import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-4 flex gap-8 items-center justify-between border-b-2 border-blue-800 mb-8">
      <Link href='/'>
        <a id="logo" className="flex items-center gap-2">
          <div className="bg-blue-800 w-8 h-8 rounded-lg" />
          <h2 className="font-black font-uppercase text-xl cursor-pointer hover:opacity-80">
            Parts list
          </h2>
        </a>
      </Link>
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-4">
          List
        </div>
        <div className="mx-4">
          Base
        </div>
        <div className="mx-4">
          Other
        </div>
      </div>
      <a
        href="#"
        className="px-4 py-2 border-2 rounded-md font-medium underline transition-colors hover:text-blue-400"
      >
        Login
      </a>
    </header>
  );
};

export default Header;
