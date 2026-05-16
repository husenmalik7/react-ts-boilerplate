import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <p className="text-2xl">text-2xl</p>
      <p className="text-3xl">text-3xl</p>

      <Link to="/about">
        <button type="button" className="bg-blue-300 p-2 rounded-full cursor-pointer">
          About
        </button>
      </Link>

      <Link to="/create-read">
        <button type="button" className="bg-blue-300 p-2 rounded-full cursor-pointer">
          Create Read
        </button>
      </Link>
    </>
  );
}

export default HomePage;
