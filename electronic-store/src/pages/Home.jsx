import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>მოგესალმებით TechStore-ში!</h1>
      <p>საუკეთესო კომპიუტერული ტექნიკა და აქსესუარები.</p>
      <Link to="/products" className="btn btn-primary">
        პროდუქტების ნახვა
      </Link>
    </div>
  );
}

export default Home;