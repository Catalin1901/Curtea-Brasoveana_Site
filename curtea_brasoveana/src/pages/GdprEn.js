import React, { useState } from 'react';
import '../styles/gdpr.css'; // Import the CSS file for styling
import Dropdown from '../ComponentsEn/DropdownEn.js';
import Navbar from '../ComponentsEn/NavbarbackgroundEn.js';
import Contact from '../ComponentsEn/ContactEn.js';
import styled from 'styled-components';

const Separator = styled.div`
  height: ${(props) => props.space}px; /* Set the desired space using the 'space' prop */
`;

const Gdpr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle}/> {/* Navbar */}
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Separator space={100} />
      <div className="gdpr-container">
        <h1 className="gdpr-title"><strong>GDPR</strong></h1>
        <div className="gdpr-text">
          <p>
            <h2><strong>GDPR INFORMATION</strong></h2>
          </p>
          <p>
            This Privacy Data Information (Information) applies to CURTEA BRASOVEANA Guesthouse (hereinafter referred to as CURTEA BRASOVEANA, we, or us). At CURTEA BRASOVEANA, we strive to deliver exceptional products, services, and experiences. We are delighted to have you as our guest and value your loyalty. We understand that privacy is an important concern for every guest. We have developed this Information to explain our practices regarding the personal data we collect from or about you on this website or through our applications/forms, through written or oral communications with us, when you visit one of our properties, or from other sources.
          </p>
          <p>
            Please note that this Information does not apply to the processing of personal data on behalf of third parties and in accordance with their instructions, such as airlines, car rental companies, or other service providers, companies that organize or offer vacation packages, marketing partners, or corporate clients.
          </p>
          <p>
            <strong>Personal Data We Collect</strong>
          </p>
          <p>
            We may collect personal data at each meeting or interaction with guests, as well as in other aspects of our business. This personal information may include: your identification data; your contact information; information regarding your reservation, stay, or visit to a specific property; participation in a membership program or loyalty program; participation in contests, raffles, or marketing programs (even if you are not staying at one of our hotels); information related to the purchase and receipt of products or services; personal characteristics, nationality, passport number, and the date and place of issuance thereof; travel history; payment information, such as your credit card number and other card-related information, as well as authentication information and other billing details and accounts associated with the mobile billing system; guest preferences; advertising and communication preferences; information about vehicles you may bring to our properties; reviews and opinions about our accommodation facilities (if identified or associated with you); and other types of information you choose to provide to us or that we may obtain about you.
          </p>
          <p>
            We may request details about travelers, including their names. It is also possible that we collect information about conversations, including recording or monitoring calls to the customer service for quality assurance and training purposes, as well as other communications such as messages within applications and SMS.
          </p>
          <p>
            <strong>How We Use Personal Data</strong>
          </p>
          <p>
            The collected personal data is used to provide our services and products, manage your reservations, provide you with relevant information about your stay, and ensure a pleasant experience at CURTEA BRASOVEANA Guesthouse. Additionally, we may use this data for internal analysis purposes, to improve the quality of our services, and to personalize the communications and offers you receive from us.
          </p>
          <p>
            <strong>Data Security</strong>
          </p>
          <p>
            We are committed to protecting the personal data we collect. We use appropriate technical and organizational security measures to protect this data against unauthorized access, misuse, or disclosure.
          </p>
          <p>
            <strong>Your Rights Regarding Personal Data</strong>
          </p>
          <p>
            According to GDPR regulations, you have the right to access, correct, or delete the personal data we hold about you. You also have the right to withdraw your consent for data processing or object to processing under certain conditions. To exercise these rights or for any questions related to the processing of personal data, please contact us through the contact details provided on the website or at <a href='office@curteabrasoveana.ro'>office@curteabrasoveana.ro</a>.
          </p>
          <p>
            <strong>Changes to the Privacy Policy</strong>
          </p>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be published on this website so that you are informed about the information we collect, how we use it, and under what circumstances we disclose it.
          </p>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Gdpr;
