import React from "react";
import SbEditable from "storyblok-react";
import Link from 'next/link';


const BlockDownload = ({ blok }) => {

   return (
       <>
      <SbEditable content={blok}>
         <span className="block mt-8 mb-16 border border-gray-200 shadow-lg rounded-md">
            <span className="flex flex-col md:block md:clear p-8">
               <span className="order-2 w-full md:float-right md:w-auto md:px-8 rounded-md bg-orange-500 text-white font-bold py-2 px-4 text-center" >
                  Afficher le dossier
               </span>
               <span className="order-1 md:block text-2xl font-bold mb-4 md:mb-0">{blok.title}</span>
            </span>
            {blok.description && <span className="block px-8 py-4 bg-gray-100 border-t border-gray-200 uppercase text-sm text-gray-500">{blok.description}</span>}
         </span>
        
      </SbEditable>

      </>
   );
};

export default BlockDownload;
