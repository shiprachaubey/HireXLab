import React, { useState } from 'react';
import '../styles/FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Setting the second question as initially active

  const faqData: FAQItem[] = [
    {
      question: "How does HireX Lab use AI in the hiring process?",
      answer: "HireX Lab leverages AI throughout the hiring journey—from automatically parsing and ranking resumes based on job requirements to conducting preliminary candidate screenings through conversational AI. Our algorithms help eliminate bias while identifying the most promising candidates quickly."
    },
    {
      question: "Can I customize the assessments for different job roles?",
      answer: "Absolutely! You can create role-specific tests or use our smart templates. Assessments adapt to the job's skill requirements and can be MCQs, coding tasks, or logic-based questions."
    },
    {
      question: "How fast can I start using HireX Lab?",
      answer: "You can be up and running within minutes. Simply sign up, select your plan, and create your first job posting. Our onboarding wizard will guide you through configuration, and you can import candidates from your existing ATS or spreadsheets for immediate processing."
    },
    {
      question: "Do candidates need to sign up to apply for jobs?",
      answer: "No, candidates can apply directly through your branded application portal without creating accounts. This streamlined process significantly improves completion rates while still gathering all necessary information and automatically scheduling initial assessments."
    },
    {
      question: "What's included in the white-labeled Enterprise plan?",
      answer: "Our Enterprise plan offers complete white-labeling of all candidate-facing elements, including assessment portals, email communications, and interview scheduling tools. Your branding remains front and center throughout the candidate journey, ensuring a consistent experience aligned with your company identity."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left-content">
        <h2 className="faq-title">
          Frequently<br />asked <span>questions</span>
        </h2>
        <p className="faq-subtitle">
          Got questions? We've got answers. Here's what recruiters and candidates often ask before getting started.
        </p>
        <button className="faq-cta-button">
          Start Hiring
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="faq-right-content">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question-row" onClick={() => toggleQuestion(index)}>
              <h3 className="faq-question">{item.question}</h3>
              <div className={`faq-toggle-icon ${activeIndex === index ? 'minus' : 'plus'}`}>
                {activeIndex === index ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <p className="faq-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;