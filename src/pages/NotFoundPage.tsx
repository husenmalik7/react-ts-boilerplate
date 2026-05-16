import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <div>NotFoundPage</div>

      <Link to="/">
        <button type="button" className="bg-blue-300 p-2 rounded-full cursor-pointer">
          Back to Home
        </button>
      </Link>
    </>
  );
}

export default NotFoundPage;
