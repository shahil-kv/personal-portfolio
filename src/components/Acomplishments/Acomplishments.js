import React from 'react';

// we have imported several custom elements from other files such as global 
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, } from './AcomplishmentsStyles';

// this is the data that we want to show to the section 
const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 15, text: 'Uncompleted projects', },
  { number: 45, text: 'Github Followers', },
  { number: 50, text: 'Github Stars', }
];

// we are starting the section 
const Acomplishments = () => (
  <div>
   <Section>
   {/* this is the title for the personal accomplisment large title */}
    <SectionTitle> Personal Accomplishment </SectionTitle>
 <Boxes>
         {data.map((card,index)=>(
          <Box key={index}>
        
          <BoxNum>${card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box>
         ) )} 
    </Boxes>
   </Section>
  </div>
);

export default Acomplishments;
