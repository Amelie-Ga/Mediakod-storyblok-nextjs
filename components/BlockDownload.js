import React from "react";
import SbEditable from "storyblok-react";
import Link from 'next/link';


const BlockDownload = ({ blok }) => {

   return (
     
      <SbEditable content={blok}>
         <span className="block mt-8 mb-16 border border-gray-200 rounded-md shadow-lg">
            <span className="flex flex-col p-8 md:block md:clear" >
               <Link href={blok.link}>
                  <a target="_blank" className="order-2 w-full px-4 py-2 font-bold text-center rounded-md md:float-right md:w-auto md:px-8" style={{ backgroundColor: blok.background_color.color, color: getContrast(blok.background_color.color)}}>
                     Afficher le dossier
                  </a>
               </Link>
               <span className="order-1 mb-4 text-2xl font-bold md:block md:mb-0">{blok.title}</span>
            </span>
            {blok.description && <span className="block px-8 py-4 text-sm text-gray-500 uppercase bg-gray-100 border-t border-gray-200">{blok.description}</span>}
         </span>
      </SbEditable>
      
   );
};

export default BlockDownload;

const getContrast = (hex) => {
   let r = parseInt(hex.substr(1, 2), 16),
      g = parseInt(hex.substr(3, 2), 16),
      b = parseInt(hex.substr(5, 2), 16),
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
   return yiq >= 128 ? "black" : "white";
};