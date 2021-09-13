import React from 'react'
import SbEditable from 'storyblok-react'

import { render } from "storyblok-rich-text-react-renderer"




const Paragraph = ({blok}) => {



  return (
    <SbEditable content={blok} key={blok._uid}>
      
      <h2>{blok.h2}</h2>

      <div className="mb-8">{render(blok.text)}</div>
    
      
    </SbEditable>
  )
}

export default Paragraph

