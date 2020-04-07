import React from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';

export default function DefaultPage() {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 style={{marginBottom: '2rem'}}>Page not found</h2>
        <Link to="/" className="main-link">
        return home
      </Link>
      </Hero>
    </>
  )
}
