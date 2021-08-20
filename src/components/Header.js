import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
function Header() {
  const [timeoutId, setTimeoutId] = useState();

  const onSearchChange = (e) => {
    clearTimeout(timeoutId);
    // setSearchInput(e.target.value);
    const timeout = setTimeout(() => {
      search(e.target.value);
    }, 1000);
    setTimeoutId(timeout);
  };

  const search = (searchInput) => {
    router.push({
      pathname: '/search',
      query: {
        query: searchInput,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search Recipe"
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
        />
      </div>
    </header>
  );
}

export default Header;
