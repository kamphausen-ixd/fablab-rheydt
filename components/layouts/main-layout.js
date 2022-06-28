import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from 'react'
import { useOutsideClick } from '../../lib/hooks/useOutsideClick'
import { useWindowSize, twBreakpoints } from "../../lib/hooks/useWindowSize"

const GOOGLE_FORMS_URL = 'https://forms.gle/Dv1wNcP3ZLRGu37F7'

const Header = ({}) => {

  const [menuState, setMenuState] = useState(false)
  const size = useWindowSize()
  const menuRef = useRef(null)

  useOutsideClick(menuRef, () => {
    setMenuState(false)
  })

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  const navigation = [
    {
      title: 'Lab',
      href: '#lab',
      target: null,
      highlight: null,
      icon: null
    },
    {
      title: 'Angebote',
      href: '#formats',
      target: null,
      highlight: null,
      icon: null
    },
    {
      title: 'Location',
      href: '#location',
      target: null,
      highlight: null,
      icon: null
    },
    {
      title: 'Vorbilder',
      href: '#role-models',
      target: null,
      highlight: null,
      icon: null
    },
    {
      title: 'Partner',
      href: '#partners',
      target: null,
      highlight: null,
      icon: null
    },
    {
      title: 'Unterstützen',
      href: GOOGLE_FORMS_URL,
      target: '_blank',
      highlight: true,
      icon: 'bi bi-plus-circle'
    },
  ]

  return(
    <header className="bg-secondary text-gray-50 border-b border-neutral-700">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex flex-row flex-wrap justify-between items-center p-4" ref={menuRef}>
          <Link href="/">
            <a>
              <div className="flex items-center gap-2">
                <div className="rounded block bg-primary relative w-[60px] h-[60px]">
                  <Image
                    src="/img/icons/cropped-icon_fablab-270x270.png"
                    layout="fill"
                    alt="Fab Lab"
                    title="Fab Lab für Mönchengladbach" />
                </div>
                <div>
                  <span className="block w-full text-xl font-bold text-primary">FabLab</span>
                  <span className="block w-full text-xl font-thin text-primary">Mönchengladbach</span>
                </div>
              </div>
            </a>
          </Link>
          {
            (size.width < twBreakpoints.lg) &&
            <div>
              <a className="no-underline text-4xl -mt-2 pr-0 cursor-pointer" onClick={toggleMenu}>
                {
                  menuState ? <i className="bi bi-x-lg" /> : <i className="bi bi-list" />
                }
              </a>
            </div>
          }
          <div className={`
            grow w-full lg:w-auto flex flex-col lg:flex-row justify-end items-center gap-4
            ${(size.width >= twBreakpoints.lg)  || menuState ? 'h-auto' : 'h-0'} truncate transition-all ease-in-out
          `}>
            {navigation.map(({ title, href, target, highlight, icon }, i) => (
              <Link key={i} href={href}>
                <a className={`
                ${highlight ? 'bg-primary text-secondary' : null}
                py-2 px-4 rounded hover:bg-primary hover:text-secondary transition-all
              `} target={target}>
                  <span>{title}</span>
                  {icon && <i className={`pl-2 ${icon}`} />}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

const Footer = ({}) => (
  <footer className="py-16 bg-secondary text-neutral-900 p-4">
    <div className="container mx-auto max-w-7xl">
      <span className="block md:inline">© 2022 IG FabLab für Mönchengladbach & <Link href="https://www.schola-vitae.de/"><a target="_blank" title="Schola Vitae - Lernen für das Leben" className="hover:text-quartary transition-all">Schola Vitae e.V.</a></Link></span>
    </div>
  </footer>
)

const Banner = ({}) => {

  const [bannerState, setBannerState] = useState(true)
  const toggleBanner = () => {
    setBannerState(!bannerState)
  }

  if (bannerState) return(
    <div className="fixed bottom-0 bg-black w-full">
      <div className="container mx-auto w-max-5xl min-h-24 text-neutral-100 flex justify-between items-center p-4 text-xs md:text-sm">
        <p className="w-4/5">By using this website, you agree to our use of cookies and analytics. We use both to provide you with a great experience and to help our website run effectively. We never ever share our data.</p>
        <i className="bi bi-x-lg text-2xl p-4" onClick={toggleBanner} />
      </div>
    </div>
  )
  return null
}

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <Banner/>
    </div>
  )
}
