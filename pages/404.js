import React from 'react'
import Layout from '../components/Layout'
import DynamicComponent from '../components/DynamicComponent'
import Link from 'next/link'

import { useStoryblok } from "../utils/storyblok"

export default function Page404({ preview}) {
   const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // load only inside preview mode
  const storyLoaded = useStoryblok(null, enableBridge)

  if(storyLoaded && storyLoaded.content) content = (<DynamicComponent blok={storyLoaded.content} />)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h2>Page 404</h2>
        <p className="w-2/3 text-center">La page demandée n’existe pas / plus. Celle-ci a peut-être été renommée ou déplacée. Veuillez nous excuser pour ce désagrément.</p>
        <Link  href="/">
          <a className="w-full px-4 py-2 my-8 font-bold text-center text-white bg-gray-500 rounded-md hover:bg-gray-600 md:w-auto md:px-8">
            Retour à la page d'acceuil
          </a>
        </Link>
      </div>
    </Layout>
  )
}


export async function getStaticProps({ preview = false }) {
    return {
      props: {
        preview,
      },
    }
  }