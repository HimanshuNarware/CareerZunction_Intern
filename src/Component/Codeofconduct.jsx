import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: left;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: white;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  padding: 0;
  color: white;
`;

const Footer = styled.div`
  margin-top: 40px;
  color: white;
  text-align: center;
`;

const CodeOfConduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <Title>Contributor Covenant Code of Conduct</Title>

            <Subtitle>Our Pledge</Subtitle>
            <Paragraph>We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</Paragraph>
            <Paragraph>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.</Paragraph>

            <Subtitle>Our Standards</Subtitle>
            <Paragraph>Examples of behavior that contributes to a positive environment for our community include:</Paragraph>
            <Paragraph>- Demonstrating empathy and kindness toward other people</Paragraph>
            <Paragraph>- Being respectful of differing opinions, viewpoints, and experiences</Paragraph>
            <Paragraph>- Giving and gracefully accepting constructive feedback</Paragraph>
            <Paragraph>- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</Paragraph>
            <Paragraph>- Focusing on what is best not just for us as individuals, but for the overall community</Paragraph>

            <Paragraph>Examples of unacceptable behavior include:</Paragraph>
            <Paragraph>- The use of sexualized language or imagery, and sexual attention or advances of any kind</Paragraph>
            <Paragraph>- Trolling, insulting or derogatory comments, and personal or political attacks</Paragraph>
            <Paragraph>- Public or private harassment</Paragraph>
            <Paragraph>- Publishing others' private information, such as a physical or email address, without their explicit permission</Paragraph>
            <Paragraph>- Other conduct which could reasonably be considered inappropriate in a professional setting</Paragraph>

            <Subtitle>Enforcement Responsibilities</Subtitle>
            <Paragraph>Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.</Paragraph>
            <Paragraph>Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.</Paragraph>

            <Subtitle>Scope</Subtitle>
            <Paragraph>This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.</Paragraph>

            <Subtitle>Enforcement</Subtitle>
            <Paragraph>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at suchitrasahoo874@gmail.com. All complaints will be reviewed and investigated promptly and fairly.</Paragraph>
            <Paragraph>All community leaders are obligated to respect the privacy and security of the reporter of any incident.</Paragraph>

            <Subtitle>Enforcement Guidelines</Subtitle>
            <Paragraph>Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:</Paragraph>

            <Subtitle>1. Correction</Subtitle>
            <Paragraph>Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.</Paragraph>
            <Paragraph>Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.</Paragraph>

            <Subtitle>2. Warning</Subtitle>
            <Paragraph>Community Impact: A violation through a single incident or series of actions.</Paragraph>
            <Paragraph>Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.</Paragraph>

            <Subtitle>3. Temporary Ban</Subtitle>
            <Paragraph>Community Impact: A serious violation of community standards, including sustained inappropriate behavior.</Paragraph>
            <Paragraph>Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.</Paragraph>

            <Subtitle>4. Permanent Ban</Subtitle>
            <Paragraph>Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.</Paragraph>
            <Paragraph>Consequence: A permanent ban from any sort of public interaction within the community.</Paragraph>

            <Subtitle>Attribution</Subtitle>
            <Paragraph>This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.</Paragraph>
            <Paragraph>Community Impact Guidelines were inspired by Mozilla's code of conduct enforcement ladder.</Paragraph>
            <Paragraph>For answers to common questions about this code of conduct, see the FAQ at https://www.contributor-covenant.org/faq. Translations are available at https://www.contributor-covenant.org/translations.</Paragraph>

            <Footer>
                If you have any questions or concerns about this code of conduct, please contact us at <a href="mailto:suchitrasahoo874@gmail.com" style={{ color: 'white' }}>suchitrasahoo874@gmail.com</a>
            </Footer>
        </Container>
    );
};

export default CodeOfConduct;
