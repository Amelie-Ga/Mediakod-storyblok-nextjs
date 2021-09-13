import React from 'react'
import Navi from "./Navi"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
  <div id="site" className="px-8">
             <Header/>
  <div className="container flex flex-col items-start py-4 mx-auto sm:flex-row">
            <Navi />
            <main className="w-full ">{children}</main>
         </div>
  <footer className="my-8">
  <div className="container pt-8 mx-auto text-right border-t border-gray-200 border-solid">
     <a href="#site" className="text-gray-800 hover:underline focus:underline active:underline">
        Retour en haut de page
     </a>
  </div>
</footer>
</div>
</>
)

export default Layout
