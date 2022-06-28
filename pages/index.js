import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../components/layouts/main-layout'

const Hero = ({ }) => (
  <div className=" grid grid-cols-1 grid-rows-5">
    <div className="bg-secondary text-neutral-50 row-start-1 row-span-4 pt-16 pb-32">
      <div className="container mx-auto max-w-7xl p-4 flex flex-col lg:flex-row gap-8">

        <div className="lg:order-2 w-full">
          <div className="relative aspect-video lg:aspect-square rounded-lg truncate">
            <Image
              src="/img/stock/tools-0.jpg"
              layout="fill"
              alt="Image"
              className="object-cover" />
          </div>
        </div>

        <div className="lg:order-1">
          <div className="flex flex-col gap-4 lg:gap-8 lg:w-4/5">
            <h1 className="text-2xl md:text-3xl lg:text-7xl">Ein Fab Lab für Mönchengladbach?</h1>
            <p className="text-lg lg:text-2xl">Ein <strong>Fab Lab</strong> (&quot;Fabrication Laboratory&quot;, dt. &quot;Fabrikationslabor&quot;) ist eine offene Kreativwerkstatt, die das gemeinsame Arbeiten und Experimentieren mit der Herstellung von Dingen aller Art ermöglicht. <i className="bi bi-boxes" /></p>
            <div className="flex flex-row pt-2">
              <Link href="#">
                <a className="py-2 px-4 bg-primary text-secondary rounded">
                  <span>Unterstützen</span>
                  <i className="bi bi-arrow-right pl-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="row-start-5">
      <div className="bg-primary lg:h-32 -my-[12%] md:-my-[10%] lg:-my-8 m-4 lg:mx-[12%] rounded grid grid-cols-3 lg:grid-cols-5 items-center justify-center shadow-md">
        {[
          { title: 'Ideate', icon: 'bi bi-lightbulb' },
          { title: 'Make', icon: 'bi bi-tools' },
          { title: 'Share', icon: 'bi bi-people-fill' },
          { title: 'Repair', icon: 'bi bi-wrench' },
          { title: 'Connect', icon: 'bi bi-arrows-angle-contract' },
        ].map(({title, icon}, i) => (
          <div key={i} className="p-4 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
            <i className={`${icon} text-3xl lg:text-5xl`}/>
            <div className="flex items-center">
              <h3 className="lg:text-2xl font-bold">{title}</h3>
              {/* <span></span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Fab Lab für Mönchengladbach</title>
        <meta name="description" content="Fab Lab für Mönchengladbach" />
        <link rel="icon" href="/img/icons/cropped-icon_fablab-32x32.png" sizes="32x32" />
        <link rel="icon" href="/img/icons/cropped-icon_fablab-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/img/icons/cropped-icon_fablab-180x180.png" />
        <meta name="msapplication-TileImage" content="/img/icons/cropped-icon_fablab-270x270.png" />
      </Head>

      <Hero />


      <div id="lab" className="py-16">
        <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <h2 className="text-2xl lg:text-3xl">Lab</h2>
            <p className="text-lg lg:text-xl">Wir stellen uns ein FabLab für unsere Stadt als einen Zentralen Ort vor, um kreatives Ausprobieren und Austausch zu fördern. Wir möchten einen niedrigschwelligen Zugang zu Technologie und Fertigungsverfahren bieten, Neugier wecken und den Austausch von Wissen unterstützen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/img/stock/laser-0.jpg',
                title: 'Laserschneiden & Gravieren',
                text: `Mit den richtigen Geräten lassen sich aus Vektorgrafiken - digitalen Skizzen - Zuschnitte aus unterschiedlichem Material machen: Holz, Pappe, Acrylglas und weitere. Daraus können viele kreative Dinge entstehen. Auch Gravuren sind möglich.`,
              },
              {
                image: '/img/stock/print-0.jpg',
                title: '3D-Druck',
                text: `Im Verfahren der additiven Fertigung können Objekte und Bauteile schichtweise hergestellt werden. Es gibt dabei unterschiedliche Verfahren und Möglichkeiten zu entdecken, die sowohl im privaten, als auch im industriellen Bereich Anwendung finden können.`,
              },
              {
                image: '/img/stock/electronics-0.jpg',
                title: 'Elektronik',
                text: 'Löten, Messen ausprobieren. In einer Elektronikwerkstatt können nicht nur neue Geräte entstehen, sondern auch alte repariert werden. Aus ausgedienten Produkten können Teile gewonnen und neue Ideen umgesetz werden.',
              },
              {
                image: '/img/stock/tech-0.jpg',
                title: 'Programmieren',
                text: `Mit Hilfe kleiner Computer können zum Beispiel Projekte im Bereich Robotik und Automatisierung umgesetzt werden. Der Kreativität sind hier keine Grenzen gesetz und unterschiedlichste Ideen und Projekte lassen sich leicht als Inspiration finden.`,
              },
              {
                image: '/img/stock/cnc-0.jpg',
                title: 'Holzarbeiten & CNC',
                text: `In der Werkstatt stehen diverse Hand- und Elektrogeräte zur fachmännischen Bearbeitung von Holz zur Verfügung. Wir denken hier an Akku-Schrauber, (Stand-)Bohrmaschien, Sägen und an eine CNC-Fräse. Diese ermöglich die computergeführte, präzise Bearbeitung.`,
              },
              {
                image: '/img/stock/tech-1.jpg',
                title: 'Reparatur & Wiederverwertung',
                text: `Alte Geräte lassen sich vielleicht mit Hilfe der Community reparieren - oder andernfalls zu Gunsten anderer Reparaturen oder neuer Projekte wiederverwerten. Oft enthalten Altgeräte noch nützliche Bauteile.`,
              },
              {
                image: '/img/stock/group-0.jpg',
                title: 'Zusammenarbeit',
                text: `Das FabLab lebt vom Austausch von Ideen und Kooperation. Es ist ein sicherer Ort, um Ideen auszuprobieren und gemeinsam an etwas zu arbeiten und lernen. Unabhängig von Vorkenntnissen, Ausbildung oder Hintergrund.`,
              },
              {
                image: '/img/stock/prototype-0.jpg',
                title: 'Prototyping',
                text: `Das FabLab bringt alles mit, was für die Herstellung funktionstüchtiger Prototypen benötigt wird. Egal ob für den privaten Gebrauch, die Schule, Fachhochschule, Uni - oder für eine Start-Up Idee.`,
              },

            ].map(({ title, image, text }, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-video rounded truncate relative">
                  <Image src={image} layout="fill" className="object-cover opacity-90 hover:opacity-100 transition-all" title={title} alt={title} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div id="lab" className="py-16">
        <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <h2 className="text-2xl lg:text-3xl">Angebote & Formate</h2>
            <p className="text-lg lg:text-xl">Das FabLab stellt die Infrastruktur, kümmert sich um deren Wartung und Sicherheit. In Zusammenarbeit mit Partnern können zum Beispiel thematische Angebote und regelmäßige Formate eingerichtet werden.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/img/stock/group-1.jpg',
                title: 'Projektarbeiten',
                text: `Schulen und andere Bildungseinrichtungen im Einzugsgebiet können bei Projektarbeiten auf die Kapazitäten des FabLab zurückgreifen und so ein völlig anderers Lernerlebnis schaffen.`,
              },
              {
                image: '/img/stock/design-0.jpg',
                title: 'Ideen- und Designworkshops',
                text: 'Gemeinsam Ideen entwickeln, austauschen und weiterspinenn. Das FabLab kann Raum bieten für kreative Workshopformate. Dabei kann es auch ein Ort für den Austausch im und über das Quartier sein.',
              },
              {
                image: '/img/stock/bike-repair-0.jpg',
                title: 'Fahrradwerkstatt',
                text: `Fahrräder reparieren, Verkehrssicherheit herstellen und insbesondere junge Fahrradfahrer befähigen, selbst nach dem Rad zu schauen? Vielleicht lassen sich hier Kooperationen mit lokalen Betrieben einrichten.`,
              }
            ].map(({ title, image, text }, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-video rounded truncate relative">
                  <Image src={image} layout="fill" className="object-cover opacity-90 hover:opacity-100 transition-all" title={title} alt={title} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div id="needs" className="py-16 bg-secondary text-neutral-50">
        <div className="container mx-auto max-w-7xl p-4 grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <h2 className="text-2xl lg:text-3xl">Location</h2>
            <p className="text-lg lg:text-xl">Für die Umsetzung des Projekts wird eine geignete, gut erreichbare und offene Laction benötigt. Das FabLab soll Gäste einladen und auf die Stadt wirken. <i className="bi bi-geo-alt-fill"/></p>
            <div className="flex flex-row pt-2">
              <Link href="#">
                <a className="py-2 px-4 bg-primary text-secondary rounded">
                  <span>Vorschlag machen</span>
                  <i className="bi bi-arrow-right pl-2"/>
                </a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 items-center justify-center">
            {[
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7983.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7949.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7956.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7957.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7959.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7963.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7969.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7979.JPG',
              },
              {
                title: 'Ein Leerstand?',
                image: '/img/rheydt/IMG_7983.JPG',
              },
            ].map(({ title, image, href, organization }, i) => (
              <div key={i} className="opacity-90 hover:opacity-100 transition-all rounded truncate" target="_blank">
                <div className="aspect-video relative grid  items-center">
                  <Image src={image} layout="fill" className="object-cover opacity-90 hover:opacity-100 transition-all" title={title} alt={title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div id="needs" className="py-16">
        <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <h2 className="text-2xl lg:text-3xl">Vorbilder</h2>
            <p className="text-lg lg:text-xl">Anregungen und Vorbilder lassen sich sowohl international, als auch in der Umgebung von Mönchengladbach finden. Das Konzept FabLab findet überall auf der Welt Anwendung. Nachfolgend findest Du ein paar Beispiele als Inspiration. <i className='bi bi-lightbulb-fill'></i></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-center justify-center">
            {[
              {
                title: 'Fablabs.io',
                image: 'https://www.fablabs.io/assets/logo-78c5ba6a9895eaf5debdd08d9856b62703ebf0658507f6972742505cb1f75a7b.svg',
                href: 'https://www.fablabs.io/',
                organization: 'fabfoundation & Co',
              },
              {
                title: 'FabLab Düsseldorf',
                image: 'https://garage-lab.de/wp-content/uploads/gl_logo-lang@4x-305x66.png',
                href: 'https://garage-lab.de',
                organization: 'GarageLab e.V.',
              },
              {
                title: 'Fab Lab Siegen',
                image: 'https://fablab-siegen.de/wp-content/uploads/2020/03/header_fablab.png',
                href: 'https://garage-lab.de',
                organization: 'Universität Siegen',
              },
              {
                title: 'fabLAB Darmstadt',
                image: 'https://www.lab3.org/wp-content/uploads/2021/07/20210630_LabLogofab.png',
                href: 'https://www.lab3.org/labore/fablab/',
                organization: 'LAB³ e.V.',
              },
              {
                title: 'OpenLab Hamburg',
                image: 'https://openlab-hamburg.de/wp-content/uploads/2021/09/Logo-fuer-neue-Webseite-bessere-Farbe-2048x1289.jpg',
                href: 'https://openlab-hamburg.de/',
                organization: 'Helmut-Schmidt-Universität',
              },


            ].map(({ title, image, href, organization }, i) => (
              <Link key={i} href={href}>
                <a className="grid grid-auto-rows gap-4 h-full bg-neutral-100 hover:bg-neutral-200 transition-all p-4" target="_blank">
                  <div className="aspect-video relative grid  items-center">
                    <img src={image} className="object-contain opacity-90 hover:opacity-100 transition-all" title={title} alt={title} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <span>{organization}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>


      <div id="partner" className="py-16 bg-secondary text-neutral-50">
        <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <h2 id="partner" className="text-2xl lg:text-3xl">Partner</h2>
            <p className="text-lg lg:text-xl">Neben einem Träger braucht das Projekt Partner, die sich für seine Umsetzung engagieren und von der neuen Einrichtung profitieren. Insbesondere Unternehmen der Stadt, die Hochschule, Volkshochschule, Berufskollegs sowie andere Bildungseinrichtungen sind hier herzlich eingeladen. <i className='bi bi-hearts'/></p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/triangle.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/square.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/circle.png' },

              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/square.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/circle.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/triangle.png' },

              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/square.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/circle.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/triangle.png' },

              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/square.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/circle.png' },
              { title: 'Platzhalter für Dein Logo. :-)', image: '/img/shapes/triangle.png' },
            ].map(({ title, image }, i) => (
              <div key={i} className="aspect-square rounded truncate relative">
                <Image src={image} layout="fill" className="object-cover opacity-25 hover:opacity-50 transition-all" title={title} alt={title}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-secondary text-neutral-50 h-[100vh] lg:h-[75vh]">
        <div className="container mx-auto max-w-7xl p-4">

        </div>
      </div> */}
    </MainLayout>
  )
}
