import Link from 'next/link';
import React from 'react';
// this is importing the icons from the react icons pack
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';


// this is for the styling of different section using the headerstyles.js
// we styled these all elements custom styless and we use in the header section
// we are not defining classes instead we are styling the elements using js
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  // we first pull all over contents in the Container so we can arrange them easily
 <Container>
 {/* then we have a Div1 it will define somemany things link what to display and the
 we will enter our portfolio inside a anger tag and also inside the a tag we define somestyles to perform to make our logo nice */}
  <Div1>
    <Link href='/'>
   <a style={{display:"flex",alignItems:"center",color:'white', marginBottom:'20;'}}>
   {/* then we have element called Dicsdesk and thats like a logo pic or like that and we already defined that thing in the styles from the react icons dec */}
     <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
   </a>
    </Link>
  </Div1>
  
{/* And we provide the other navbar elements like projects,technology and about in the div2
and the div2 is styled in an another file and inside the div2 there is a li and a link element and inside the Navlink we written the name of the thing */}
  <Div2>
    <li> 
       <Link href="#projects">
          <NavLink>Projects</NavLink>
       </Link>
   </li>
    <li> 
       <Link href="#technology">
          <NavLink>Technology</NavLink>
       </Link>
   </li>
    <li> 
       <Link href="#about">
          <NavLink>About</NavLink>
       </Link>
   </li>
  </Div2>

{/* this Div3 is for the social icons and we have 3 social icons Eachone is insiade a socialIcon  */}
  <Div3>
    <SocialIcons href='https://github.com'>
    <AiFillGithub size="3rem"/>
    </SocialIcons>

    <SocialIcons href='https://linkedin.com'>
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>

    <SocialIcons href='https://instagram.com'>
    <AiFillInstagram size="3rem"/>
    </SocialIcons>
  </Div3>

 </Container>
);

export default Header;
