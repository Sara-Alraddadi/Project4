import React, {Component} from 'react';
// import About from './About';
import './About.css';


class About extends Component{
  render () {
    return (
    <div id="about">
      <section className="bg-light page-section" id="team">
        <div className="container4 mb-4 mt-4">
          <div className="row">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About Us</h2>
                <h3 className="section-subheading text-muted">As a photographer and our friend’s designated memory keeper, photos play an important role in our every day story. We have been seeing our life through the lens, and the perspective it’s given us invaluable.
                Through photography, W have learned to appreciate our life as it is right now instead of wishing for better days ahead. Sandwiched between the tedium of everyday living, We find a million joyful moments—if we looking for them.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>

    )
}}
    


export default About;