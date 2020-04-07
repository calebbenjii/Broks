import React from 'react'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Hero 
        title="awesome gadgets" 
        max="true">
        <Link to="/styleguide" className="main-link" style={{ margin:"4rem" }}>Our Products</Link>
       
      </Hero>
    </>
  )
}
