import React from 'react'
import SbEditable from 'storyblok-react'


const Paragraph = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <h2>{blok.h2}</h2>
      <p>{blok.text}</p>
    </SbEditable>
  )
}

export default Paragraph
