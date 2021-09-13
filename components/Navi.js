import Link from 'next/link'

const Navi = () => {
    return (
      <nav className="flex-shrink-0 w-full pr-6 mt-4 mb-4 sm:w-4/12 md:w-3/12 sm:sticky sm:top-6 md:mb-0">
          <label className="text-sm text-gray-500 uppercase">logotype</label>
          <ul className="mb-4 md:mb-8">
              <li><Link href="/logotype/zone-de-protection" className="text-gray-800"><a className="hover:underline focus:underline active:underline">Zone de protection</a></Link></li>
              <li><Link href="/logotype/version-du-logo" className="text-gray-800"><a className="hover:underline focus:underline active:underline">version du logo</a></Link></li>
              <li><Link href="/logotype/fichier-telechargeables" className="text-gray-800"><a className="hover:underline focus:underline active:underline">fichier telechargeables</a></Link></li>
          </ul>
          <label className="text-sm text-gray-500 uppercase">identité</label>
          <ul className="m-0">
          <li><Link href="/identite/couleurs" className="text-gray-800 "><a className="hover:underline focus:underline active:underline">couleurs</a></Link></li>
          <li><Link href="/identite/typographie" className="text-gray-800"><a className="hover:underline focus:underline active:underline">typographie</a></Link></li>
          </ul>
      </nav>
    );
 };
 
 export default Navi;