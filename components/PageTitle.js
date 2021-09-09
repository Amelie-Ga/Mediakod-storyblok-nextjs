import React from 'react'
import SbEditable from 'storyblok-react'


const PageTitle = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <h1>{blok.title}</h1>
    </SbEditable>
  )
}

export default PageTitle
