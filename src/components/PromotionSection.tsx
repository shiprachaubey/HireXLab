import React from 'react';
import '../styles/PromotionSection.css';
import { ArrowRight } from 'lucide-react';

const PromotionSection: React.FC = () => {
  return (
    <section className="promotion-container">
      <div className="promotion-section">
        <div className="promotion-content">
          <p className="promotion-label">SUMMER DEAL SALES</p>
          
          <h2 className="promotion-title">
            Unlock Exclusive<br />
            Savings on <span className="highlight-text">AI-Driven</span><br />
            Business Automation
          </h2>
          
          <p className="promotion-description">
            Leverage the power of AI automation to streamline operations, enhance<br />
            customer satisfaction, and drive exponential business growth.
          </p>
          
          <button className="promotion-cta">
            Get Started <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="graph-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="109" height="106" viewBox="0 0 109 106" fill="none">
  <path d="M49.0481 105.687L0.00012207 79.0055L0.13113 8.30713L49.1791 34.989L49.0481 105.687Z" fill="#DADADA"/>
  <path d="M49.1791 34.9891L0.131104 8.3073L59.0654 0.0244141L108.113 26.7062L49.1791 34.9891Z" fill="#E6E6E6"/>
  <path d="M108.113 26.7061L107.982 97.4044L49.048 105.687L49.179 34.9889L108.113 26.7061Z" fill="#F5F2F3"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="109" height="177" viewBox="0 0 109 177" fill="none">
  <path d="M49.5326 176.484L0.484619 149.802L0.746635 8.40601L49.7946 35.0869L49.5326 176.484Z" fill="#DADADA"/>
  <path d="M49.7946 35.0867L0.746582 8.40586L59.6989 0.120117L108.747 26.8019L49.7946 35.0867Z" fill="#E6E6E6"/>
  <path d="M108.747 26.8018L108.484 168.198L49.5325 176.483L49.7945 35.0865L108.747 26.8018Z" fill="#F5F2F3"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="110" height="248" viewBox="0 0 110 248" fill="none">
  <path d="M50.0343 247.278L0.986328 220.596L1.3803 8.50171L50.4283 35.1835L50.0343 247.278Z" fill="#DADADA"/>
  <path d="M50.4283 35.1836L1.38031 8.50183L60.3317 0.217041L109.38 26.8979L50.4283 35.1836Z" fill="#E6E6E6"/>
  <path d="M109.38 26.8979L108.986 238.993L50.0342 247.278L50.4281 35.1837L109.38 26.8979Z" fill="#F5F2F3"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="311" viewBox="0 0 51 311" fill="none">
  <path d="M49.5363 310.072L0.488281 283.391L1.01326 0.598145L50.0622 27.28L49.5363 310.072Z" fill="#DADADA"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="61" height="292" viewBox="0 0 61 292" fill="none">
  <path d="M60.0136 -0.00610352L59.4886 282.787L0.536255 291.072L1.06219 8.27963L60.0136 -0.00610352Z" fill="#F5F2F3"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="109" height="36" viewBox="0 0 109 36" fill="none">
  <path d="M49.0623 35.2798L0.0133057 8.59799L58.9656 0.312256L108.014 26.9941L49.0623 35.2798Z" fill="#E6E6E6"/>
</svg>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="252" height="236" viewBox="0 0 252 236" fill="none">
  <path d="M221.382 61.6379L251.788 64.2391L221.717 0.220215L182.41 58.2773L212.53 60.8775C208.926 83.2171 202.617 105.104 193.028 125.492C192.407 126.999 191.633 128.429 190.86 129.859L188.559 134.148C187.032 137.026 185.561 139.924 183.728 142.629L178.534 150.858L172.748 158.698C164.785 168.931 155.848 178.446 145.897 186.796C125.898 203.362 102.452 215.642 77.6161 223.525C65.2074 227.476 52.4513 230.401 39.5385 232.376C28.0536 234.097 16.448 235.13 4.82161 235.097C3.35585 235.093 1.88819 235.072 0.422424 235.033C3.78305 235.221 7.14652 235.315 10.5109 235.324C20.2586 235.352 30.0101 234.67 39.6961 233.518C52.7057 231.909 65.6356 229.372 78.293 225.751C103.571 218.527 127.761 206.811 148.749 190.422C159.196 182.169 168.685 172.675 177.201 162.347L183.404 154.431L189.017 146.087C190.983 143.345 192.586 140.408 194.267 137.491L196.777 133.105C197.626 131.657 198.457 130.188 199.154 128.661C209.787 107.6 217.024 84.8642 221.385 61.636L221.382 61.6379Z" fill="#E4A0F7"/>
</svg> */}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;