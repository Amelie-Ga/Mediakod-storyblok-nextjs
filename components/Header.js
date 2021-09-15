import Link from 'next/link'

import React,{useState,useEffect} from "react";



const Header = () => {

     //upload your logo in Storyblok => content => logo

    const [state, setState] = useState('');
	const getDataState = async () => {
		return await fetch("https://api.storyblok.com/v2/cdn/stories/logo?version=draft&token=9wcJu9VBMThoyv5u8WBVJwtt&cv=1631543553")
		.then(res => res.json())
	}
	useEffect(() => {
		async function data() {
			setState((await getDataState()).story.content.logo.filename)
		}
		data();
	
	},[]) 
   
   return (
      <header className="container block w-full p-0 mx-auto mt-8 bg-fixed bg-white ds-nav">
         <div className="w-full pr-6 sm:w-4/12 md:w-3/12">
            <h1 className="text-lg font-bold text-gray-800">
               <Link href="/"><a><img src={state} alt=""/></a></Link>
            </h1>
         </div>
      </header>
   );
};

export default Header;

