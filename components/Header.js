import Link from 'next/link'
import Image from 'next/image'
import SbEditable from "storyblok-react";


const Header = ({ blok }) => {
   return (

         <header className="block ds-nav p-0 bg-white bg-fixed mt-8 w-full container mx-auto">
            <div className="w-full sm:w-4/12 md:w-3/12 pr-6">
               <h1 className="font-bold text-lg text-gray-800">
               <Link href="/">
                     <a>
                       
                     </a>
               </Link>
               </h1>
            </div>
         
         </header>
    
   );
};

export default Header;
