import React from 'react'
import SbEditable from 'storyblok-react'
import Link from 'next/link'

import { render, NODE_UL, NODE_OL, MARK_LINK} from "storyblok-rich-text-react-renderer"




const Paragraph = ({blok}) => {



  return (
    <SbEditable content={blok} key={blok._uid}>
      
      <h2>{blok.h2}</h2>

      <div className="mb-8 space-y-4">{render(blok.text, 
      {nodeResolvers: {
        [NODE_UL]: (children) => <ul className="pl-16 space-y-4 list-disc"> {children}</ul>,
        [NODE_OL]: (children) => <ol className="pl-16 space-y-4 list-decimal"> {children}</ol>
        },
        markResolvers: {
          [MARK_LINK]: (children, props) => {
              const { href, target, linktype } = props;
              if (linktype === 'email') {
                  // Email links: add `mailto:` scheme and map to <a>
                  return <a className="underline hover:no-underline" href={`mailto:${href}`}>{children}</a>;
              }
              if (href.match(/^(https?:)?\/\//)) {
                  // External links: map to <a>
                  return <Link href={href}><a className="underline hover:no-underline"  href={href} target={target}>{children}</a></Link>;
              }
              // Internal links: map to <Link>
              return <Link href={href}><a className="underline hover:no-underline">{children}</a></Link>;
          }
      }
      }
  )}</div>
    
      
    </SbEditable>
  )
}

export default Paragraph

