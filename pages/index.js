import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../components/layouts/main-layout'
import styles from '../styles/Home.module.css'

// const Hero = ({}) => (
//   <div className="flex flex-col lg:grid lg:grid-cols-6 gap-8">

//     <div className="col-span-3 lg:order-2">
//       <div className="relative aspect-video lg:aspect-square bg-red-500">
//         <Image
//           src="/img/stock/tools-0.jpg"
//           layout="fill"
//           alt="Image"
//           className="object-cover" />
//       </div>
//     </div>

//     <div className="col-span-3 lg:order-1 flex flex-col gap-4">
//       <h1 className="text-3xl py-4">Ein Fab Lab für Mönchengladbach.</h1>
//       <p className="w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit ex deleniti voluptatibus sapiente voluptate, dolorum fugiat provident totam saepe harum natus corporis possimus aut error dolores repudiandae reiciendis voluptas!</p>
//       <div className="flex flex-row">
//         <Link href="#">
//           <a className="py-2 px-4 bg-primary text-secondary rounded">Lorem Ipsum</a>
//         </Link>
//       </div>
//     </div>

//     <div className="bg-primary rounded grid md:grid-cols-4 row-start-6">
//       {[1, 2, 3, 4].map((item, i) => (
//         <div key={i} className="p-4">
//           <i className="bi bi-activity text-5xl"/>
//         </div>
//       ))}
//     </div>
//   </div>
// )


const Hero = ({ }) => (
  <div className="min-h-[80vh] grid grid-cols-1 grid-rows-6">
    <div className="bg-secondary text-neutral-50 row-start-1 row-span-4 pb-32">
      <div className="container mx-auto max-w-7xl p-4 flex flex-col lg:flex-row gap-8">

        <div className="lg:order-2 w-full">
          <div className="relative aspect-video lg:aspect-square bg-red-500 rounded-lg truncate">
            <Image
              src="/img/stock/tools-0.jpg"
              layout="fill"
              alt="Image"
              className="object-cover" />
          </div>
        </div>

        <div className="lg:order-1">
          <div className="flex flex-col gap-4 lg:gap-8 lg:w-3/4">
            <h1 className="text-2xl md:text-3xl lg:text-7xl">Ein Fab Lab für Mönchengladbach?</h1>
            <p className="text-lg lg:text-2xl">Ein <strong>Fab Lab</strong> ("Fabrication Laboratory", dt. "Fabrikationslabor") ist eine offene Kreativwerkstatt, die das gemeinsame Arbeiten und Experimentieren mit der Herstellung von Dingen aller Art ermöglicht.</p>
            <div className="flex flex-row pt-2">
              <Link href="#">
                <a className="py-2 px-4 bg-primary text-secondary rounded">Lorem Ipsum</a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="row-start-5">
      <div className="bg-primary lg:h-32 -my-[12%] md:-my-[10%] lg:-my-8 mx-[10%] rounded grid grid-cols-3 lg:grid-cols-5 items-center justify-center shadow-md">
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

      {/* <div className="bg-secondary text-neutral-50 h-[100vh] lg:h-[75vh]">
        <div className="container mx-auto max-w-7xl p-4">

        </div>
      </div> */}
    </MainLayout>
  )
}
