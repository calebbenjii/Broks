import React from 'react'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Hero 
        title="awesome gadgets" 
        description="get cool products from us" max="true">
        <Link to="/styleguide">Our Products</Link>
       
      </Hero>
    </>
  )
}
