import React from 'react';
import './FAQ.css';

function FAQ() {
    const toggleAnswer = (faqId, arrowId) => {
        const answer = document.getElementById(faqId);
        const arrow = document.getElementById(arrowId);

        answer.classList.toggle('hidden');
        if (answer.classList.contains('hidden')) {
            arrow.style.transform = 'rotate(0deg)';
        } else {
            arrow.style.transform = 'rotate(180deg)';
        }
    };

    return (
        <div className='container'>
            <section className="section">
                <h2 className="heading">
                    Frequently Asked Questions
                </h2>

                <div className="flex-div">
                    {/* FAQ 1 */}
                    <div className="faq">
                        <button onClick={() => toggleAnswer('faq1', 'arrow1')} className="faq-button">
                            <span>What is CareerZunction?</span>
                            <svg id="arrow1" className="h-6 w-6 arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"/>
                            </svg>
                        </button>
                        <div id="faq1" className="answer hidden">
                            CareerZunction connects students with internship opportunities across industries through a user-friendly platform.
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="faq">
                        <button onClick={() => toggleAnswer('faq2', 'arrow2')} className="faq-button">
                            <span>Is CareerZunction free?</span>
                            <svg id="arrow2" className="h-6 w-6 arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"/>
                            </svg>
                        </button>
                        <div id="faq2" className="answer hidden">
                            Yes, it's completely free for students. No fees for internships, profiles, or career resources.
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="faq">
                        <button onClick={() => toggleAnswer('faq3', 'arrow3')} className="faq-button">
                            <span>How do I apply for internships?</span>
                            <svg id="arrow3" className="h-6 w-6 arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"/>
                            </svg>
                        </button>
                        <div id="faq3" className="answer hidden">
                            Create a profile, find an internship, and follow the application instructions provided by employers.
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="faq">
                        <button onClick={() => toggleAnswer('faq4', 'arrow4')} className="faq-button">
                            <span className='small'>Does CareerZunction collaborate with institutions and employers?</span>
                            <svg id="arrow4" className="h-6 w-6 arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"/>
                            </svg>
                        </button>
                        <div id="faq4" className="answer hidden">
                        Yes, we collaborate to expand internship offerings and connect students with opportunities.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
