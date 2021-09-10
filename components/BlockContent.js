import React from "react";
import SbEditable from "storyblok-react";
import DynamicComponent from './DynamicComponent'

const Content = ({ blok }) => {
   return (
      <SbEditable content={blok}>
         <div>{blok.body && blok.body.content.map((childBlok, index) => <DynamicComponent blok={childBlok} key={childBlok._uid} />)}</div>
      </SbEditable>
   );
};

export default Content;

