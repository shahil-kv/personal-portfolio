import React from 'react';

// we have imported several custom elements from other files such as global 
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, } from './AcomplishmentsStyles';

// this is the data that we want to show to the section 
const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

// we are starting the section 
const Acomplishments = () => (
  <div>
   <Section>
   {/* this is the title for the personal accomplisment large title */}
    <SectionTitle> Personal Accomplishment </SectionTitle>
    <Boxes>
  //  we are using a map function to give Each and every function to get elements
// we are using the card as the data and the index as the number of datas in the
         {data.map((card,index)=>(
          <Box key={index}>
          we include our Number of achievements in the boxnum as card.num
          <BoxNum>${card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box>
         ) )} 
    </Boxes>
   </Section>
  </div>
);

export default Acomplishments;
