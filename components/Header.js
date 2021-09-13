  {/** 
import Link from 'next/link'
import Image from 'next/image'
import SbEditable from "storyblok-react";


const Header = ({ blok }) => {
   let img= "https://a.storyblok.com/f/126025/532x292/1a5d71ff06/logo-positif-avec-baseline"
   let name ="Factory Les Cygnes"
   return (
    
         <header className="container block w-full p-0 mx-auto mt-8 bg-fixed bg-white ds-nav">
            <div className="w-full pr-6 sm:w-4/12 md:w-3/12">
               <h1 className="text-lg font-bold text-gray-800">
                  
               <Link href="/">
                     <a>
                        
                       <img src={img} alt={name} className="w-full"/>
                     
                     </a>
               </Link>
               </h1>
            </div>
         </header>
      
 
  
   );
};

export default Header;
*/}


{/**-------------------translation------------------------------------------------------- */}
{/** 
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Link, useStaticQuery, graphql } from "gatsby";

import React from "react";
import { GetStaticProps } from 'next'


const Header = () => {
  

   
   const { sbEntry } = async function getStaticProps(graphql`
   {
      sbEntry: storyblokEntry(slug: { eq: "site-settings" }) {
         content
      }
   }
`);

   const siteSettings = JSON.parse(sbEntry.content);

   return (
      <header className="container block w-full p-0 mx-auto mt-8 bg-fixed bg-white ds-nav">
         <div className="w-full pr-6 sm:w-4/12 md:w-3/12">
            <h1 className="text-lg font-bold text-gray-800">
               <Link href="/"><a>{siteSettings.logo && siteSettings.logo.filename ? <img blok={siteSettings.logo} className="max-w-xs" /> : <p>Site title</p>}</a></Link>
            </h1>
         </div>
      </header>
   );
};

export default Header;
*/}

{/**-----------------------my try------------------------------------------------------- */}
import Link from 'next/link'
import Image from 'next/image'
import SbEditable from "storyblok-react";


const Header = ({ blok }) => {
   let img= "https://a.storyblok.com/f/126025/532x292/1a5d71ff06/logo-positif-avec-baseline"
   let name ="Factory Les Cygnes"
   return (
    
         <header className="container block w-full p-0 mx-auto mt-8 bg-fixed bg-white ds-nav">
            <div className="w-full pr-6 sm:w-4/12 md:w-3/12">
               <h1 className="text-lg font-bold text-gray-800">
                  
               <Link href="/">
                     <a>
                        
                       <img src={img} alt={name} className="w-full"/>
                     
                     </a>
               </Link>
               </h1>
            </div>
         </header>
      
 
  
   );
};

export default Header;




