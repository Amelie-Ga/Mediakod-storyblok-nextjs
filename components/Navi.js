import Link from 'next/link'

const Navi = () => {
    return (
      <nav className="mt-4 w-full sm:w-4/12 md:w-3/12 pr-6 flex-shrink-0 sm:sticky sm:top-6">
          <label className="text-gray-500 text-sm uppercase">logotype</label>
          <ul className="mb-8">
              <li><Link href="/logotype/zone-de-protection" className="text-gray-800 hover:underline focus:underline active:underline"><a>Zone de protection</a></Link></li>
              <li><Link href="/logotype/version-du-logo" className="text-gray-800 hover:underline focus:underline active:underline"><a>version du logo</a></Link></li>
              <li><Link href="/logotype/fichier-telechargeables" className="text-gray-800 hover:underline focus:underline active:underline"><a>fichier telechargeables</a></Link></li>
          </ul>
          <label className="text-gray-500 text-sm uppercase">identité</label>
          <ul className="m-0">
          <li><Link href="/identite/couleurs" className="text-gray-800 hover:underline focus:underline active:underline"><a>couleurs</a></Link></li>
          <li><Link href="/identite/typographie" className="text-gray-800 hover:underline focus:underline active:underline"><a>typographie</a></Link></li>
          </ul>
      </nav>
    );
 };
 
 export default Navi;