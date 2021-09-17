
import Link from 'next/link'

const Navi = () => {
    return (
    <>
    
      <nav className="flex-shrink-0 w-full pr-6 mt-4 mb-4 sm:w-4/12 sm:sticky sm:top-6 md:mb-0">
          <label className="text-sm text-gray-500 uppercase">logotype</label>
          <ul className="mb-4 md:mb-8">
              <li>
                  <Link href="/logotype/zone-de-protection">
                      <a     className="text-gray-800 hover:underline focus:underline active:underline">
                          Zone de protection
                      </a>
                  </Link>

              </li>
              <li>
                  <Link href="/logotype/version-du-logo">
                      <a className="text-gray-800 hover:underline focus:underline active:underline">
                          Version du logo
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="/logotype/fichier-telechargeables" >
                      <a className="text-gray-800 hover:underline focus:underline active:underline">
                          Fichier telechargeables
                      </a>
                  </Link>
              </li>
          </ul>
          
          <label className="text-sm text-gray-500 uppercase">identité</label>
          <ul className="m-0">
            <li>
                <Link href="/identite/couleurs">
                    <a className="text-gray-800 hover:underline focus:underline active:underline">
                        Couleurs
                        </a>
                </Link>
            </li>
            <li>
                <Link href="/identite/typographie">
                    <a className="text-gray-800 hover:underline focus:underline active:underline">
                        Typographie
                        </a>
                </Link>
            </li>
          </ul>
      </nav>
      

    </>
    );
 };
 
 export default Navi;










 