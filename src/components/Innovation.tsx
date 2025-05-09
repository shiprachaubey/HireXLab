// import React from 'react';
// import '../styles/innovation.css';
// import '../styles/MissionVission.css';
// import { ArrowRight } from 'lucide-react';
// import Carios from '../assets/images/Carios.png'
// import Priya from '../assets/images/Priya.png'
// import Sara from '../assets/images/Sara.png'
// import David from '../assets/images/David.png'
// import People from '../assets/images/people.png'
// import '../styles/results.css';

// const Innovation = () => {
//   return (
//     <div className="innovation-container">
//       <h1 className="title">
//         <span>Purpose-Driven AI</span>
//         <span>Innovation for Growth</span>
//       </h1>
//       <p className="subtitle">
//       <span> Uniting our Vision and Mission to propel human-centric AI transformation</span>
//       <span>and drive lasting business impact.</span>
     
//       </p>

//       <div className="image-container">
//         <img src={People} alt="Innovation" className="image" />
//         <div className="overlay-text">
//           <h2>OUR VISION</h2>
//           <p>Forging a Future of Intelligent Enterprise Transformation and Sustainable Growth</p>
//         </div>
//       </div>

//       <div className="mission-vision-container">
//       <div className="card">
//         <div className="card-header">Our Mission</div>
//         <div className="card-title">
//           Empowering Enterprises with Responsible AI
//         </div>
//         <div className="card-description">
//           Empowering businesses of all sizes with intelligent automation, seamless integration, and real-time insights to scale smarter and faster.
//         </div>
//         <a href="#" className="learn-more">
//           Learn more <ArrowRight size={16} className="arrow-icon" />
//         </a>
//       </div>

//       <div className="card">
//         <div className="card-header">Our Vision</div>
//         <div className="card-title">
//           Charting a New Era of Intelligent Business
//         </div>
//         <div className="card-description">
//           Empowering every organization to harness AI for transformative growth through seamless automation and human-centric innovation.
//         </div>
//         <a href="#" className="learn-more">
//           Learn more <ArrowRight size={16} className="arrow-icon" />
//         </a>
//       </div>

//       <button className="get-started-btn">
//         Get Started <ArrowRight size={16} className="arrow-icon" />
//       </button>
//     </div>

//     {/* <div className="results-container">
//       <h1 className="results-title">Real Results from our Clients</h1>
//       <p className="results-subtitle">
//         Discover how leading businesses optimize performance, automate<br />
//         workflows, and achieve transformative growth with NexaAI.
//       </p>

//       <div className="testimonials-grid">
//         <div className="testimonial-card">
//           <div className="testimonial-content">
//             <h2 className="testimonial-title">Transformative Impact with NexaAI's Automation Suite</h2>
//             <p className="testimonial-text">
//               NexaAI has revolutionized our operations—in just weeks, we
//               slashed manual workload by 60% and gained clarity into
//               performance metrics we never had before.
//             </p>
//           </div>
//           <div className="testimonial-author">
//             <div className="author-image">
//               <img src={Sara} alt="Sarah Johnson" />
//             </div>
//             <div className="author-info">
//               <h3 className="author-name">Sarah Johnson</h3>
//               <p className="author-position">COO, TechFlow Innovations</p>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="testimonial-content">
//             <h2 className="testimonial-title">Unmatched Insight from NexaAI's Analytics Dashboard</h2>
//             <p className="testimonial-text">
//               With NexaAI, we moved from gut-feels to data-driven decisions.
//               The real-time insights uncovered new growth channels, and our
//               campaign ROI improved by 45% in the first month.
//             </p>
//           </div>
//           <div className="testimonial-author">
//             <div className="author-image">
//               <img src={David} alt="David Lee" />
//             </div>
//             <div className="author-info">
//               <h3 className="author-name">David Lee</h3>
//               <p className="author-position">Head of Marketing, BrightWave Media</p>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="testimonial-content">
//             <h2 className="testimonial-title">Seamless Integration, Instant Results</h2>
//             <p className="testimonial-text">
//               Integrating NexaAI into our legacy systems was effortless. Within
//               days we automated critical workflows, reduced errors, and freed
//               our team to focus on strategic initiatives. Simply outstanding.
//             </p>
//           </div>
//           <div className="testimonial-author">
//             <div className="author-image">
//               <img src={Priya} alt="Priya Kumar" />
//             </div>
//             <div className="author-info">
//               <h3 className="author-name">Priya Kumar</h3>
//               <p className="author-position">VP of Operations, Meridian Financial</p>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-card">
//           <div className="testimonial-content">
//             <h2 className="testimonial-title">Scalable AI That Grows with Us</h2>
//             <p className="testimonial-text">
//               As a fast-growing startup, we needed an AI partner that could
//               scale. NexaAI's modular platform expanded alongside our
//               business—delivering enterprise-grade features.
//             </p>
//           </div>
//           <div className="testimonial-author">
//             <div className="author-image">
//               <img src={Carios} alt="Carlos Ramirez" />
//             </div>
//             <div className="author-info">
//               <h3 className="author-name">Carlos Ramirez</h3>
//               <p className="author-position">CEO, NovaSolutions</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}
//     </div>
//   );
// };

// export default Innovation;

import React from 'react';
import '../styles/innovation.css';
import { ArrowRight } from 'lucide-react';
import People from '../assets/images/people.png';

const Innovation = () => {
  return (
    <div className="innovation-wrapper">
      <section className="innovation-header">
        <h1 className="title">
          <span>Purpose-Driven AI</span>
          <span>Innovation for Growth</span>
        </h1>
        <p className="subtitle">
          <span>Uniting our Vision and Mission to propel human-centric AI transformation</span>
          <span>and drive lasting business impact.</span>
        </p>
      </section>

      <div className="image-section">
        <img src={People} alt="Innovation" className="image" />
        <div className="image-overlay">
          <h2>OUR VISION</h2>
          <p>Forging a Future of Intelligent Enterprise Transformation and Sustainable Growth</p>
        </div>
      </div>

      <section className="cards-section">
        <div className="card">
          <h3 className="card-header">Our Mission</h3>
          <h2 className="card-title">Empowering Enterprises with Responsible AI</h2>
          <p className="card-description">
            Empowering businesses of all sizes with intelligent automation, seamless integration, and real-time insights to scale smarter and faster.
          </p>
          <a href="#" className="learn-more">
            Learn more <ArrowRight size={16} className="arrow-icon" />
          </a>
        </div>

        <div className="card">
          <h3 className="card-header">Our Vision</h3>
          <h2 className="card-title">Charting a New Era of Intelligent Business</h2>
          <p className="card-description">
            Empowering every organization to harness AI for transformative growth through seamless automation and human-centric innovation.
          </p>
          <a href="#" className="learn-more">
            Learn more <ArrowRight size={16} className="arrow-icon" />
          </a>
        </div>
      </section>

      <button className="get-started-btn">
        Get Started <ArrowRight size={16} className="arrow-icon" />
      </button>
    </div>
  );
};

export default Innovation;
