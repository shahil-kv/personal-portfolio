import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Welcome To <br/>
        My personal Portfolio
        </SectionTitle>
        <SectionText>
      The purpose of Javascript Mastery is to help aspiring and established developers to make awesome web apps

        </SectionText>
        <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
      </LeftSection>
 
    </Section>  

);

export default Hero;