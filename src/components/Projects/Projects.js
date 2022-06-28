import React from 'react';
// we have somany BlogCard and other elements styled in the projects styles and we imported into the projects.js
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
// these are the elements that we are using globally for all our pages and components so its alsos there
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// we have also imported the projects folder from the constant and all the details of the project where in that folder we saved
import { projects } from '../../constants/constants';

const prefix="/personal-portfolio"
// this is the starting of the project function we have created
const Projects = () => (
   <Section nopadding id="projects">
 {/* the section divide means the small line comes during the starting of a new section */}
   <SectionDivider/>
   {/* this is the section were we define the title of the section eg. projects */}
   <SectionTitle main>Projects</SectionTitle>

   {/* this gridcontainer defines the column size and the padding margin etc need for each of the project */}
   <GridContainer>
   {/* then we get the projects content from the folder and map through it and get each every project single we got 
        and the project have the id,title,tags,description etc and we get each of them*/}
    {projects.map(({id,image,title,tags,description,source,visit})=>( 
    //this is for the card to seperate using the id each and every project have a different project id and it will differentiate everything
          <BlogCard key={id}>
          {/* this will insert the image of the projects */}
          <Img src={prefix+image}/>
          {/* this is where we insert the title of the project and its name etc */}
        <TitleContent>
          <HeaderThree title>{title} </HeaderThree>
          <Hr/>
        </TitleContent>
        {/* we declare the description of the projects in the cardinfo  */}
   <CardInfo>{description}</CardInfo>
   <div>
   {/* this is the section where we declare the used stacks and everything and also we need an id for that to map out
   so we use a map function and get the output of i and tag from the return and we give the i as the key in the Tag and the content ={key} */}
    <TitleContent>Stack</TitleContent>
    <TagList>
      {tags.map((tag,i)=>(
        <Tag key={i}>{tag}</Tag>
      ))}
    </TagList>
   </div>
   {/* this is the section where all of the source code and visit the website all are shown in the category */}
   <UtilityList>
    <ExternalLinks href={visit}>Code</ExternalLinks>
    <ExternalLinks href={source}>Source</ExternalLinks>
   </UtilityList>
          </BlogCard>
  ))}
   </GridContainer>
   </Section>
);

export default Projects;
