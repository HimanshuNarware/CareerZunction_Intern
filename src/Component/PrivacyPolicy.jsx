import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1>CareerZunction Privacy Policy</h1>

      <section className="first">
        <h2>1. Introduction</h2>
        <p>Welcome to CareerZunction. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>Personal details (name, email, phone number)</li>
          <li>Educational background</li>
          <li>Skills and interests</li>
          <li>Usage data (how you interact with our platform)</li>
          <li>Device information</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Match you with relevant internship opportunities</li>
          <li>Improve our platform and user experience</li>
          <li>Communicate updates and opportunities</li>
          <li>Provide career resources and support</li>
          <li>Analyze usage patterns to enhance our services</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Internship providers (with your consent)</li>
          <li>Educational institutions (for verification purposes)</li>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of certain data collection and use</li>
          <li>Receive a copy of your data in a portable format</li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. We will notify you of any significant changes through our platform or via email.</p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at privacy@careerzunction.com</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;