import React, { useState } from 'react';
import '../styles/subscription.css';

const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 18V12.75M12 12.75C12.506 12.7504 13.0099 12.6869 13.5 12.561M12 12.75C11.494 12.7504 10.9901 12.6869 10.5 12.561M14.25 20.039C12.7633 20.3213 11.2367 20.3213 9.75 20.039M13.5 22.422C12.5027 22.5264 11.4973 22.5264 10.5 22.422M14.25 18V17.808C14.25 16.825 14.908 15.985 15.758 15.492C17.186 14.665 18.3014 13.3902 18.9314 11.865C19.5614 10.3399 19.6708 8.64948 19.2427 7.05582C18.8145 5.46217 17.8728 4.05419 16.5633 3.05006C15.2538 2.04594 13.6497 1.50171 11.9995 1.50171C10.3493 1.50171 8.74523 2.04594 7.43574 3.05006C6.12624 4.05419 5.18447 5.46217 4.75633 7.05582C4.32819 8.64948 4.43759 10.3399 5.06759 11.865C5.69758 13.3902 6.81299 14.665 8.241 15.492C9.091 15.985 9.75 16.825 9.75 17.808V18" stroke="#F1D2FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const GrowthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2.25 18.0001L9 11.2501L13.306 15.5561C14.5509 13.1023 16.6045 11.1532 19.12 10.0381L21.86 8.81811M21.86 8.81811L15.92 6.53711M21.86 8.81811L19.58 14.7581" stroke="#F1D2FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2.25 21H21.75M3.75 3V21M14.25 3V21M20.25 7.5V21M6.75 6.75H7.5M6.75 9.75H7.5M6.75 12.75H7.5M10.5 6.75H11.25M10.5 9.75H11.25M10.5 12.75H11.25M6.75 21V17.625C6.75 17.004 7.254 16.5 7.875 16.5H10.125C10.746 16.5 11.25 17.004 11.25 17.625V21M3 3H15M14.25 7.5H21M17.25 11.25H17.258V11.258H17.25V11.25ZM17.25 14.25H17.258V14.258H17.25V14.25ZM17.25 17.25H17.258V17.258H17.25V17.25Z" stroke="#F1D2FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  icon: React.ReactNode;
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  subtitle: string;
  features: PlanFeature[];
  ctaText: string;
}

const Subscription = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      icon: "💡",
      title: "Starter",
      price: {
        monthly: 29,
        yearly: 290,
      },
      subtitle: "For Small Businesses",
      features: [
        { text: "Up to 3 job postings/month" },
        { text: "AI Resume Parsing" },
        { text: "Automated Assessments" },
        { text: "Basic Interview Scheduling" },
        { text: "Email support" },
      ],
      ctaText: "Choose Starter",
    },
    {
      icon: "📈",
      title: "Growth",
      price: {
        monthly: 79,
        yearly: 790,
      },
      subtitle: "For Growing Businesses",
      features: [
        { text: "Unlimited Job Postings" },
        { text: "AI Resume Parsing + Ranking" },
        { text: "Smart Scheduling Agent" },
        { text: "Custom Assessments" },
        { text: "Interviewer Feedback Forms" },
        { text: "Priority support" },
      ],
      ctaText: "Choose Growth",
      featured: true
    },
    {
      icon: "🏢",
      title: "Enterprise",
      price: {
        monthly: 99,
        yearly: 990,
      },
      subtitle: "For Established Businesses",
      features: [
        { text: "Everything in Growth+" },
        { text: "Dedicated Account Manager" },
        { text: "White-Labelled Platforms" },
        { text: "ATS Integrations" },
        { text: "Custom Analytics Dashboard" },
        { text: "API Access + SLA Uptime Guarantee" },
      ],
      ctaText: "Book a Demo Call",
    }
  ];


  return (
    <section className="pricing-section">
      <div className="heading-container">
        <h1 className="heading">Flexible Plans for<br />Every Hiring Team</h1>
        <p className="subheading">
          Start small or scale fast—choose the plan that matches your hiring goals. No hidden
          fees. No manual work. Just smart, AI-powered recruitment.
        </p>
      </div>

      <div className="toggle-container">
        <button
          className={`toggle-button ${billingPeriod === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingPeriod('monthly')}
        >
          Monthly
        </button>
        <button
          className={`toggle-button ${billingPeriod === 'yearly' ? 'active' : ''}`}
          onClick={() => setBillingPeriod('yearly')}
        >
          Yearly
        </button>
      </div>

      <div className="cards-container">
        {plans.map((plan, index) => (
          <div 
            className={`pricing-card ${plan.featured ? 'featured-card' : ''}`} 
            key={index}
          >
            <div className="card-top-row">
              <span className="card-icon">{plan.icon}</span>
              <h2 className="card-title">{plan.title}</h2>
            </div>

            <div className="price-container">
              <span className="price">${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}</span>
              <span className="price-period">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
            </div>

            <p className="card-subtitle">{plan.subtitle}</p>
            <div className="divider" />

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li className="feature-item" key={i}>
                  <span className="feature-check">✓</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <button className="cta-button">
              {plan.ctaText} <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
