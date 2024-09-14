import React from 'react';
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id = "about">
    <div className='about-image'>
        <img src={aboutimage} alt=''/>
    </div>
    <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, eius nihil fugiat eligendi ex? Eligendi inventore omnis unde quas, deserunt officiis laboriosam dicta aliquid architecto ad quia libero. Inventore?</p>
        <button>READ MORE</button>
    </div>
    </div>
  );
}

export default About;
