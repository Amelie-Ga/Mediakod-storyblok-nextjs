import Link from 'next/link'
import Image from 'next/image'
import SbEditable from "storyblok-react";


const Header = ({ blok }) => {
   let img= "./img/logo.png"
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
