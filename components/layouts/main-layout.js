import Image from "next/image"
import Link from "next/link"

const Header = ({}) => (
  <header className="bg-secondary text-gray-50 border-b border-neutral-700">
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
        <div className="grow flex flex-row justify-end items-center gap-4">
          {[
            {
              title: 'Lab',
              href: '#lab',
              target: null,
              highlight: null
            },
            {
              title: 'Bedarf',
              href: '#needs',
              target: null,
              highlight: null
            },
            // {
            //   title: 'Partner',
            //   href: '#partners',
            //   target: null,
            //   highlight: null
            // },
            {
              title: 'Unterstützen',
              href: '#support',
              target: null,
              highlight: true
            },
          ].map(({ title, href, target, highlight }, i) => (
            <Link key={i} href={href}>
              <a className={`
                ${highlight ? 'bg-primary text-secondary' : null}
                py-2 px-4 rounded hover:bg-primary hover:text-secondary transition-all
              `} target={target}>
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  </header>
)

const Footer = ({}) => (
  <footer className="py-16 bg-secondary text-neutral-900">
    <div className="container mx-auto max-w-7xl">
      © 2022 Interessengemeinschaft «FabLab für Mönchengladbach».
    </div>
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
