import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import Layout from '../components/Layout'
import DynamicComponent from '../components/DynamicComponent'

import Storyblok, { useStoryblok } from "../utils/storyblok"

export default function Page({ story, preview }) {


  console.log('Before sb:', story)
  if(preview)
    story = useStoryblok(story, preview)

  console.log("after sb:", story )



  return (
    <Layout >
      <DynamicComponent blok={story.content} />
    </Layout>
  )
}


export async function getStaticProps({ params, preview = false }) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: "draft", // or 'draft'
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],

  }
 
  if (preview) {
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)
 
  return {
    props: {
      story: data ? data.story : false,
      preview
    }
  }
}

export async function getStaticPaths() {  
  let { data } = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach(linkKey => {
      if (data.links[linkKey].is_folder) {
        return
      }

      // get array for slug because of catch all
      const slug = data.links[linkKey].slug
      let splittedSlug = slug.split("/")
      if(slug === 'home') splittedSlug = [];

      // create additional languages

        paths.push({ params: { slug: splittedSlug } })

  })

  return {
      paths: paths,
      fallback: false,
  }
}
