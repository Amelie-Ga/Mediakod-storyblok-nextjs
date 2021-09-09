import React from 'react'
import Navi from "./Navi"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
  <div id="site" className="px-8">
    <Header/>
  <div className="container mx-auto flex flex-col sm:flex-row py-4 items-start">
            <Navi />
            <main className=" w-full">{children}</main>
         </div>
  <footer className="my-8">
  <div className="container mx-auto border-t border-solid border-gray-200 text-right pt-8">
     <a href="#site" className="text-gray-800 hover:underline focus:underline active:underline">
        Retour en haut de page
     </a>
  </div>
</footer>
</div>
</>
)

export default Layout
