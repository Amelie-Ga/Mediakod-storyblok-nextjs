import Placeholder from './Placeholder'
import Page from './Page'

import BlockColors from './BlockColors'
import BlockDownload from './BlockDownload'
import BlockPreviewImage from './BlockPreviewImage'
import BlockTypography from './BlockTypography'
import BlockPreviewTypography from './BlockPreviewTypography'

import Navi from './Navi'

import PageTitle from './PageTitle'
import Paragraph from './Paragraph'

const Components = {
 
  'page': Page,
  'pageTitle': PageTitle,
  'paragraph': Paragraph,

  'navi' : Navi,

  'blockColors' : BlockColors,
  'blockDownload' : BlockDownload,
  'blockPreviewImage' : BlockPreviewImage,
  'blockTypography' : BlockTypography,
  'blockPreviewTypography' : BlockPreviewTypography,
  
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
