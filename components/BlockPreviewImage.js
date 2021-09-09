import React from "react";
import SbEditable from "storyblok-react";

const BlockPreviewImage = ({ blok }) => {
   return (
      <SbEditable content={blok}>
         <figure className="block mt-8 mb-16 border border-gray-200 shadow-lg rounded-md">
            <div className={`p-8 rounded-t-md`} style={{ backgroundColor: blok.background_color.color || "#FFF" }}>
               <img src={blok.image.filename} className="w-full h-auto mx-auto" style={{ maxWidth: "640px" }} />
            </div>

            {blok.description && <figcaption className="block text-center px-8 py-4 bg-gray-100 border-t border-gray-200 text-sm text-gray-500">{blok.description}</figcaption>}
         </figure>
      </SbEditable>
   );
};

export default BlockPreviewImage;
