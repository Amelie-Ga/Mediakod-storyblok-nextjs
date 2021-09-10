import React from 'react'
import SbEditable from 'storyblok-react'
import RichTextField from './RichTextField'
/*
import { render } from "storyblokrich-text-react-renderer"
*/

const Paragraph = ({blok}) => {
  
  return (
    <SbEditable content={blok} key={blok._uid}>
      
      <h2>{blok.h2}</h2>
    
      <p>{/*render(blok.text)*/}</p>
    
    </SbEditable>
  )
}

export default Paragraph

