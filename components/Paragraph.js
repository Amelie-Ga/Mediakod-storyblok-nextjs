import React from 'react'
import SbEditable from 'storyblok-react'

import { render, NODE_UL, NODE_OL } from "storyblok-rich-text-react-renderer"




const Paragraph = ({blok}) => {



  return (
    <SbEditable content={blok} key={blok._uid}>
      
      <h2>{blok.h2}</h2>

      <div className="mb-8 space-y-4">{render(blok.text, {nodeResolvers: {
        [NODE_UL]: (children) => <ul className="pl-16 space-y-4 list-disc"> {children}</ul>,
        [NODE_OL]: (children) => <ol className="pl-16 space-y-4 list-decimal"> {children}</ol>
    }})
  }</div>
    
      
    </SbEditable>
  )
}

export default Paragraph

