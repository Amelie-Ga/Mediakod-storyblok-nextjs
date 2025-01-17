import React from "react";
import SbEditable from "storyblok-react";

const BlockColors = ({ blok }) => {

   return (
      <SbEditable content={blok}>
         <ul className="flex flex-wrap -mx-4">
            {blok.colors.map(
               (color) =>
                  color.color_name &&
                  isHexFormat(color.colors.color) && (
                     <SbEditable content={color} key={color._uid}>
                        
                        <li
                           className="flex flex-col justify-end w-full pt-20 mx-4 mb-8 rounded-md shadow-lg md:w-auto"
                           style={{
                              backgroundColor: color.colors.color,
                              minWidth: "320px",
                           }}
                        >
                           <span
                              className="block p-4 text-2xl font-semibold tracking-wide"
                              style={{
                                 color: getContrast(color.colors.color),
                              }}
                           >
                              {color.color_name}
                           </span>
                           <span className="block p-4 bg-white rounded-b-md">
                              <span className="block text-base">
                                 <span className="inline-block w-16 text-gray-500 uppercase">HEX</span>
                                 {color.colors.color}
                              </span>

                              {getRGB(color.colors.color) && (
                                 <span className="block text-base">
                                    <span className="inline-block w-16 text-gray-500 uppercase">RVB</span>
                                    {getRGB(color.colors.color)}
                                 </span>
                              )}


                              {color.hsl ? (
                                 <span className="block text-base">
                                    <span className="inline-block w-16 text-gray-500 uppercase">HSL</span>
                                    {color.hsl}
                                 </span>
                              ) : (
                                 <span className="block text-base">
                                    <span className="inline-block w-16 text-gray-500 uppercase">HSL</span>
                                    {getHSL(color.colors.color)}
                                 </span>
                              )}


                              {getCMJN(color.colors.color) && (
                                 <span className="block text-base">
                                    <span className="inline-block w-16 text-gray-500 uppercase">CMJN</span>
                                    {getCMJN(color.colors.color)}
                                 </span>
                              )}
                           </span>
                        </li>
                     </SbEditable>
                  )
            )}
         </ul>
      </SbEditable>
   );
};

export default BlockColors;

const isHexFormat = (code) => {
   if (!code.startsWith("#")) return false;
   if (code.length < 7) return false;
   if (code.length > 7) return false;

   return true;
};

const getContrast = (hex) => {
   let r = parseInt(hex.substr(1, 2), 16),
      g = parseInt(hex.substr(3, 2), 16),
      b = parseInt(hex.substr(5, 2), 16),
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
   return yiq >= 128 ? "black" : "white";
};

const getHSL = (hex) => {
   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
      r = parseInt(result[1], 16) / 255,
      g = parseInt(result[2], 16) / 255,
      b = parseInt(result[3], 16) / 255;

   let max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      h,
      s,
      l = (max + min) / 2;

   if (max === min) {
      h = s = 0; // achromatic
   } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
         case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
         case g:
            h = (b - r) / d + 2;
            break;
         case b:
            h = (r - g) / d + 4;
            break;
         default:
            break;
      }
      h /= 6;
   }

   s = s * 100;
   s = Math.round(s);
   l = l * 100;
   l = Math.round(l);
   h = Math.round(360 * h);

   return "hsl(" + h + ", " + s + "%, " + l + "%)";
};


const getRGB = (hex) => {
   let r = parseInt(hex.substr(1, 2), 16),
   g = parseInt(hex.substr(3, 2), 16),
   b = parseInt(hex.substr(5, 2), 16);
   return  r + "-" + g + "-" + b ;
};


const getCMJN = (hex, normalized) => {

   let r = parseInt(hex.substr(1, 2), 16),
   g = parseInt(hex.substr(3, 2), 16),
   b = parseInt(hex.substr(5, 2), 16);
   
   let c = 1 - (r / 255);
   let m = 1 - (g / 255);
   let j = 1 - (b / 255);
   let n = Math.min(c, Math.min(m, j));
   
   c = (c - n) / (1 - n);
   m = (m - n) / (1 - n);
   j = (j - n) / (1 - n);
   
   if(!normalized){
       c = Math.round(c * 10000) / 100;
       m = Math.round(m * 10000) / 100;
       j = Math.round(j * 10000) / 100;
       n = Math.round(n * 10000) / 100;
   }
   
   return  Math.round(c) + "-" + Math.round(m) + "-" + Math.round(j) + "-" + Math.round(n) ;
}

 
