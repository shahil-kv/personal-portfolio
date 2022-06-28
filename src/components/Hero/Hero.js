import React from 'react';
// Here we have some sections section text etc this all are global elements and we need that in
//  everyplace thats way we added all the elements in a different file 
// the style we need for the section text or anything is inside the styles global components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// this is the hero section starting and we are going to add all the content needed to display in the browser
const Hero = () => (
    <Section row nopadding>

      <LeftSection>
      {/* this is the section were the main title is belong to and the content */}
        <SectionTitle main center>
        Welcome To <br/>
        My personal Portfolio
        </SectionTitle>
  {/* this is the section title which is to be athe discription like  */}
        <SectionText>
    My name is shahil and I am a self taught developer and I will create beautifull and productive web apps for you

        </SectionText>
    
        {/* there is a button in the website and whenever its is clicked we call a onClick function
        and it will understand and give a location to go  */}
        <Button onClick={()=> window.location='mshahillkv@gmail.com'}>Learn More</Button>
      </LeftSection>
 
    </Section>  

);

export default Hero;