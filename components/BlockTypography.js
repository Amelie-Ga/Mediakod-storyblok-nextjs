import React from "react";
import SbEditable from "storyblok-react";

const BlockTypography = ({ blok }) => {
   return (
      <SbEditable content={blok}>
         <div className="flex flex-row flex-wrap justify-between rounded-md mb-8 p-8 shadow-lg w-full">
            <div className="w-full pb-8 text-2xl">{blok.fontName}</div>
            <div
               className="w-full px-8 text-6xl md:w-1/2 lg:w-auto"
               style={{
                  fontFamily: blok.fontFamily,
                  fontWeight: blok.fontWeight,
                  fontStyle: blok.fontStyle,
               }}
            >
               aA
            </div>
            <div
               className="w-full p-4 break-all md:border-l md:border-gray-200 md:w-1/2 lg:w-auto"
               style={{
                  fontFamily: blok.fontFamily,
                  fontWeight: blok.fontWeight,
                  fontStyle: blok.fontStyle,
               }}
            >
               <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
               <div>abcdefghijklmnopqrstuvwxyz</div>
               <div>1234567890(,.;:?!$&*)</div>
            </div>
            <div className="w-full p-4 ml-auto lg:border-l lg:border-gray-200 lg:w-auto">
               <div>
                  <b>Famille:</b> {blok.fontFamily}
               </div>
               <div>
                  <b>Graisse:</b> {blok.fontWeight}
               </div>
               <div>
                  <b>Style:</b> {blok.fontStyle}
               </div>
            </div>
         </div>
      </SbEditable>
   );
};

export default BlockTypography;