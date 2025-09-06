import React, { useEffect } from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const updateLastUpdatedDate = () => {
      const dateElement = document.getElementById("last-updated-date");
      if (!dateElement) {
        console.error("Element with ID 'last-updated-date' not found.");
        return;
      }
      const now = new Date();
      const day = now.getDate();
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const month = monthNames[now.getMonth()]; // Get the full month name
      const year = now.getFullYear();
      dateElement.textContent = `${month} ${day}, ${year}`;
    };

    const updateWeekly = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
      const timeUntilNextUpdate = (7 - dayOfWeek) * 24 * 60 * 60 * 1000; // Time until next Sunday
      updateLastUpdatedDate();
      setTimeout(updateWeekly, timeUntilNextUpdate);
    };

    updateWeekly();
  }, []);

  return (
    <PrivacyWrapper>
      <h1>CareerZunction Privacy Policy</h1>
      <div className="Lastupdate">
            Last updated: <span id="last-updated-date"></span>
          </div>
      <Section>
        <h2>1. Introduction</h2>
        <p>Welcome to CareerZunction. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.</p>
      </Section>

      <Section>
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>Personal details (name, email, phone number)</li>
          <li>Educational background</li>
          <li>Skills and interests</li>
          <li>Usage data (how you interact with our platform)</li>
          <li>Device information</li>
        </ul>
      </Section>

      <Section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Match you with relevant internship opportunities</li>
          <li>Improve our platform and user experience</li>
          <li>Communicate updates and opportunities</li>
          <li>Provide career resources and support</li>
          <li>Analyze usage patterns to enhance our services</li>
        </ul>
      </Section>

      <Section>
        <h2>4. Data Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Internship providers (with your consent)</li>
          <li>Educational institutions (for verification purposes)</li>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </Section>

      <Section>
        <h2>5. Data Security</h2>
        <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of certain data collection and use</li>
          <li>Receive a copy of your data in a portable format</li>
        </ul>
      </Section>

      <Section>
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. We will notify you of any significant changes through our platform or via email.</p>
      </Section>

      <Section>
        <h2>8. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@careerzunction.com">privacy@careerzunction.com</a></p>
      </Section>
    </PrivacyWrapper>
  );
}

const PrivacyWrapper = styled.div`
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
    margin-top: 30px;
    color: #8a2be2;
  }

  p {
    margin: 10px 0;
  }

  p:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  ul > li {
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .Lastupdate {
          margin-bottom: 14px;
          font-size: 17px;         
          margin-top: 3px;
        }

  #last-updated-date {
          font-size: 17px;
        }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

export default PrivacyPolicy;
