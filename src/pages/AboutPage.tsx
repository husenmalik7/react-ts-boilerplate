import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <div>AboutPage</div>

      <Link to="/">
        <button type="button" className="bg-blue-300 p-2 rounded-full cursor-pointer">
          Home
        </button>
      </Link>
    </>
  );
}

export default AboutPage;
