import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about company" style={{background: "var(--darkGrey)"}}/>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About Us" center="center" />
            <p className="text-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti dolorum tenetur quo consequuntur voluptatum modi beatae? Harum perferendis itaque hic ex quia, illo eos saepe, possimus, optio ducimus maxime.</p>
            <p className="text-lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti dolorum tenetur quo consequuntur voluptatum modi beatae? Harum perferendis itaque hic ex quia, illo eos saepe, possimus, optio ducimus maxime.</p>
            <button className="main-link" type="button" style={{marginTop: "2rem"}}>more info</button>
          </div>
        </div>
      </div>
    </section>
  )
}
