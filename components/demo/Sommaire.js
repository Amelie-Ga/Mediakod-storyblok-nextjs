import React from 'react'
import SbEditable from 'storyblok-react'
import Link from 'next/link'

import { render, NODE_UL, NODE_OL, MARK_LINK} from "storyblok-rich-text-react-renderer"




const Paragraph = ({blok}) => {



  return (
    <SbEditable content={blok} key={blok._uid}>
      
      <h3>{blok.title}</h3>

      <div className="mb-8 text-sm text-gray-500 uppercase">{render(blok.text, 
      {nodeResolvers: {
        [NODE_UL]: (children) => <ul className="mb-4 text-gray-800 normal-case "> {children}</ul>,
        [NODE_OL]: (children) => <ol className="mb-4 text-gray-800 normal-case "> {children}</ol>
        },
        markResolvers: {
          [MARK_LINK]: (children, props) => {
              const { href, target, linktype } = props;
              if (linktype === 'email') {
                  // Email links: add `mailto:` scheme and map to <a>
                  return <a className="text-gray-800 normal-case hover:underline focus:underline active:underline" href={`mailto:${href}`}>{children}</a>;
              }
              if (href.match(/^(https?:)?\/\//)) {
                  // External links: map to <a>
                  return <Link href={href}><a className="text-gray-800 normal-case hover:underline focus:underline active:underline"  href={href} target={target}>{children}</a></Link>;
              }
              // Internal links: map to <Link>
              return <Link href={href}><a className="text-gray-800 normal-case hover:underline focus:underline active:underline">{children}</a></Link>;
          }
      }
      }
  )}</div>
    
      
    </SbEditable>
  )
}

export default Paragraph

