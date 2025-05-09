import React, { useState } from 'react';
import './FAQ.css';

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen: initialIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <button className={`faq-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && answer && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does NexaAI protect my data?",
      answer: "NexaAI employs enterprise-grade encryption and follows strict compliance protocols to ensure your data remains secure. All information is encrypted both in transit and at rest, and we maintain SOC 2 Type II certification. Our platform includes customizable data retention policies and never uses customer data for model training without explicit permission."
    },
    {
      question: "Can I change my subscription plan at any time?",
      answer: "Absolutely—you can upgrade or downgrade directly from your NexaAI dashboard. Prorated billing ensures you only pay for what you use, and changes take effect immediately with no downtime."
    },
    {
      question: "Are custom integrations available?",
      answer: "Yes, NexaAI offers extensive API access and supports integration with most major enterprise systems. Our professional services team can help develop custom connectors for proprietary systems, and we provide comprehensive documentation and support throughout the integration process."
    },
    {
      question: "What onboarding support does NexaAI provide?",
      answer: "NexaAI provides comprehensive onboarding support including dedicated implementation specialists, customized training sessions, and 24/7 technical assistance. Enterprise customers receive a dedicated customer success manager who helps with implementation strategy, adoption planning, and ongoing optimization."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-sidebar">
        <h1 className="faq-title">Frequently <span>asked questions</span></h1>
        <p className="faq-description">
          Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.
        </p>
        <button className="get-started-button">
          Get Started <span className="arrow">↗</span>
        </button>
      </div>
      <div className="faq-content">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            isOpen={index === 1} // Only the second item is open by default
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;