import React from 'react'
import SbEditable from 'storyblok-react'


const PageTitle = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <h2>{blok.title}</h2>
    </SbEditable>
  )
}

export default PageTitle
