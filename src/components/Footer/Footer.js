import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
// this is the section for the footer

const Footer = () => {
  return (
     <FooterWrapper> 
     {/* link list have to tell the footer link and everything */}
      <LinkList>
       <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+91 9846786928'>+91 9846786928</LinkItem>
        <LinkItem href='mail to:mshahilkv@gmail.com'>mshahilkv@gmail.com</LinkItem>
       </LinkColumn> 
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
       <SocialContainer>
          <SocialIcons href='https://github.com'>
    <AiFillGithub size="3rem"/>
    </SocialIcons>

    <SocialIcons href='https://linkedin.com'>
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>

    <SocialIcons href='https://instagram.com'>
    <AiFillInstagram size="3rem"/>
    </SocialIcons>
 </SocialContainer>
        </SocialIconsContainer>
     </FooterWrapper>
  );
};

export default Footer;
