import React, { useEffect } from 'react';
import styled from 'styled-components';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TermsWrapper>
      <div>
        <h1>Terms and Conditions</h1>
        <section>
          <p>Last updated: July 24, 2024</p>
          <p>Welcome to CareerZunction! By using our platform, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully. If you do not agree to these terms, you should not use our platform.</p>
        </section>
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using CareerZunction, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, you may not use our platform.</p>
        </section>
        <section>
          <h2>2. Use of the Platform</h2>
          <p>You agree to use the platform in accordance with all applicable laws and regulations. You agree not to use the platform for any unlawful or prohibited purpose.</p>
        </section>
        <section>
          <h2>3. User Accounts</h2>
          <p>To access certain features of the platform, you may need to create an account. You agree to provide accurate and complete information when creating an account and to update your information as necessary. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.</p>
        </section>
        <section>
          <h2>4. Intellectual Property</h2>
          <p>All content on the platform, including text, graphics, logos, and software, is the property of CareerZunction or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from the platform without our express written permission.</p>
        </section>
        <section>
          <h2>5. Limitation of Liability</h2>
          <p>CareerZunction is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the platform. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.</p>
        </section>
        <section>
          <h2>6. Changes to the Terms</h2>
          <p>We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the platform after any such changes constitutes your acceptance of the new terms.</p>
        </section>
        <section>
          <h2>7. Contact Us</h2>
          <p>If you have any questions or comments about these Terms and Conditions, you may email us at <a href="mailto:careerzunction@gmail.com">careerzunction@gmail.com</a>.</p>
        </section>
      </div>
    </TermsWrapper>
  );
};

const TermsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: white; 

  h1 {
    font-size: 2.5rem;
    margin-top: 40px; 
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 30px; /
  }

  p {
    margin: 10px 0; 
  }

  p:not(:last-of-type) {
    margin-bottom: 20px; 
  }

  section {
    margin-bottom: 40px; 
  }

  section:last-of-type {
    margin-bottom: 80px; 
  }

  a {
    color: white; 
    text-decoration: none; 
  }

  a:hover {
    text-decoration: underline; 
  }
`;


export default TermsAndConditions;
