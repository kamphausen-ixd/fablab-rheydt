import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/main-layout'
import styles from '../styles/Home.module.css'

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
    </MainLayout>
  )
}
