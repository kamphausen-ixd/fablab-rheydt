import Image from "next/image"
import Link from "next/link"

const Header = ({}) => (
  <header className="bg-secondary text-gray-50">
    <div className="container mx-auto max-w-7xl">
      <nav className="flex flex-row justify-between items-center p-4">
        <Link href="/">
          <a className="rounded block bg-primary">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/img/icons/cropped-icon_fablab-270x270.png"
                layout="fill"
                alt="Fab Lab"
                title="Fab Lab für Mönchengladbach" />
            </div>
          </a>
        </Link>
        <div className="grow flex flex-row justify-end items-center">
          {[0, 1, 2, 3, 4].map((item, i) => (
            <Link key={i} href="#"><a className="py-2 px-4 rounded hover:bg-primary hover:text-secondary transition-all">Link {item}</a></Link>
          ))}
        </div>
      </nav>
    </div>
  </header>
)

const Footer = ({}) => (
  <footer className="bg-secondary text-gray-50">

  </footer>
)

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
