import React from "react";
import SbEditable from "storyblok-react";

const BlockPreviewTypography = ({ blok }) => {
   const headingStyle = {
      fontFamily: `${blok.heading_font}, sans-serif`,
      fontWeight: blok.heading_weight,
      color: blok.heading_color.color,
   };

   const paragraphStyle = {
      fontFamily: `${blok.paragraph_family}, sans-serif`,
      fontSize: `${blok.paragraph_size}px`,
      fontWeight: blok.paragraph_weight,
      color: blok.paragraph_color.color,
   };

   return (
      <SbEditable content={blok}>
         <div className="block">
            <h1 className="mt-4 mb-1 text-5xl" style={{ ...headingStyle, fontSize: `${blok.heading_1_size}px` }}>
               Titre #1
            </h1>
            <p className="mb-8 text-gray-600">
               {blok.heading_name} - {blok.heading_1_size}px
            </p>

            <h2 className="mt-4 mb-1 text-4xl" style={{ ...headingStyle, fontSize: `${blok.heading_2_size}px` }}>
               Titre #2
            </h2>
            <p className="mb-8 text-gray-600">
               {blok.heading_name} - {blok.heading_2_size}px
            </p>

            <h3 className="mt-4 mb-1 text-3xl" style={{ ...headingStyle, fontSize: `${blok.heading_3_size}px` }}>
               Titre #3
            </h3>
            <p className="mb-8 text-gray-600">
               {blok.heading_name} - {blok.heading_3_size}px
            </p>

            <h4 className="mt-4 mb-1 text-2xl" style={{ ...headingStyle, fontSize: `${blok.heading_4_size}px` }}>
               Titre #4
            </h4>
            <p className="mb-8 text-gray-600">
               {blok.heading_name} - {blok.heading_4_size}px
            </p>

            <h5 className="mt-4 mb-1 text-xl" style={{ ...headingStyle, fontSize: `${blok.heading_5_size}px` }}>
               Titre #5
            </h5>
            <p className="mb-8 text-gray-600">
               {blok.heading_name} - {blok.heading_5_size}px
            </p>

            {blok.heading_alt_color.color && <h3 style={{ ...headingStyle, fontSize: `${blok.heading_3_size}px`, color: blok.heading_alt_color.color }}>Titre secondaires</h3>}

            <h3>Paragraphes</h3>

            <p className="mb-4 " style={paragraphStyle}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget eros tempor ex elementum facilisis. Pellentesque id diam sit amet est commodo pellentesque et sed nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nulla vel leo pharetra sagittis ut non nisl. Vivamus ante felis, mollis et volutpat vel, faucibus quis risus. Suspendisse nisi augue, pretium ac fringilla et, placerat in lorem. Praesent interdum ipsum libero, in finibus elit viverra a. Cras finibus id arcu et dictum. Vivamus orci arcu, sodales vitae varius commodo, elementum nec felis. Phasellus facilisis dignissim dui a cursus. In non odio ipsum. Cras id quam augue. Morbi id orci velit. Vestibulum vulputate, massa in bibendum rutrum, justo mi congue mi, sit amet viverra sapien ipsum et mauris.{" "}
            </p>

            <p className="mb-8 text-gray-600">
               {blok.paragraph_name} - {blok.paragraph_size}px
            </p>

            <h3>Listes</h3>

            <ul className="mb-8 ml-8 list-disc " style={paragraphStyle}>
               <li>Ceci est un élément de liste</li>
               <li>
                  Ceci est un élément de liste
                  <ul className="ml-8 list-disc">
                     <li>Ceci est un élément de liste</li>
                     <li>Ceci est un élément de liste</li>
                     <li>Ceci est un élément de liste</li>
                  </ul>
               </li>
               <li>Ceci est un élément de liste</li>
               <li>Ceci est un élément de liste</li>
            </ul>

            <h3>Liens</h3>

            <a href="#" className="underline hover:no-underline " style={{ ...paragraphStyle, color: blok.link_color.color }}>
               Ceci est un lien
            </a>
         </div>
      </SbEditable>
   );
};

export default BlockPreviewTypography;