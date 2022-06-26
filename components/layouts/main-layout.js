import Image from "next/image"
import Link from "next/link"

const Header = ({}) => (
  <header className="w-full">
    <div className="bg-gray-600 text-neutral-50 min-h-[40px]">
      <div className="container max-w-7xl mx-auto flex items-center justify-end space-x-4 min-h-[40px]">
        <Link href="#"><a>Deutsch</a></Link>
        <Link href="#"><a>Englisch</a></Link>
      </div>
    </div>
    <div className="bg-gray-100 min-h-[40px]">
      <div className="container max-w-7xl mx-auto flex p-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-[64px] h-[64px]">
            <Image
              src="/img/icons/cropped-icon_fablab-180x180.png"
              alt="Fab Lab Logo"
              title="Fab Lab Logo"
              layout="fill" />
          </div>
          <div className="text-2xl font-bold">
            FabLab für <br/>
            Mönchengladbach
          </div>
        </div>
        <nav className="grow flex items-center justify-end space-x-4 min-h-[40px] text-xl">
          <Link href="#"><a>Startseite</a></Link>
          <Link href="#"><a>Aktuelles</a></Link>
          <Link href="#"><a>Unser Lab</a></Link>
          <Link href="#"><a>Projekte &amp; Partner</a></Link>
          <Link href="#"><a>Sicherheit</a></Link>
          <Link href="#"><a>Kontakt</a></Link>
        </nav>
      </div>
    </div>
  </header>
)

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}
