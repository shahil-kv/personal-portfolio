import React from 'react';
// this are the icons we needed for the projects imported from the react icons
import { DiFirebase, DiReact, DiRedhat, } from 'react-icons/di';
// This all are always the global elements that we need to use everywhere so ....
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// this all are elements are included in the technologies style.js file and they all are styled
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  // this is the new section for the technology property 
  <Section id="tech">
  {/* this is the section divider it will give us an line before the new section so its nice */}
    <SectionDivider/>
    <br />
    <br/>
    {/* this is the title for the section */}
    <SectionTitle>Technologies</SectionTitle>
    {/* this is  the text for the section text which is inside the section text */}
    <SectionText>
      I have worked with a range of technologies in the web development world.
      From Back-end To Design 
      
    </SectionText>
    {/* there are the starting of the list items  */}
    <List>
      <ListItem>
      {/* this is the icon image adding field in the section */}
        <DiReact size="3rem"/>
        {/* there is a list of containers including the list title and the listparagraph
        and everything including in a single list item */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Experience with <br/>
          React.js 
          </ListParagraph>
        </ListContainer>
  
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Experience with <br/>
         Node and Databases
          </ListParagraph>
        </ListContainer>
  
      </ListItem>

      <ListItem>
        <DiRedhat size="3rem"/>
        <ListContainer>
          <ListTitle>Ethical Hacker</ListTitle>
          <ListParagraph>
          Experience with <br/>
          SQL hacking , Dark web
          </ListParagraph>
        </ListContainer>
  
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
