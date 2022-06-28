import Image from "next/image";
import Link from "next/link";

export default function PrintPage(){

  return (
    <article className="flex flex-col container max-w-4xl mx-auto pt-8 pb-16 gap-8 text-justify text-sm">
      <header>
        <div className="flex items-center gap-2">
          <div className="relative aspect-video lg:aspect-square rounded-lg border border-secondary truncate w-[85px] h-[85px]">
            <Image
              src="/img/qr/fablab-mg-com.png"
              layout="fill"
              alt="QR Code"
              className="object-cover" />
          </div>
          <div className="rounded block border border-secondary relative w-[85px] h-[85px]">
            <Image
              src="/img/icons/cropped-icon_fablab-270x270.png"
              layout="fill"
              alt="Fab Lab"
              title="Fab Lab für Mönchengladbach" />
          </div>
          <div>
            <span className="block w-full text-3xl font-bold text-secondary">FabLab <span className="font-thin">für</span></span>
            <span className="block w-full text-3xl font-thin text-secondary">Mönchengladbach</span>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-4 w-3/5">
        <h2 className="text-2xl pt-4">Ein FabLab für Mönchengladbach?</h2>
        <p>Ein <strong>FabLab</strong> (&quot;Fabrication Laboratory&quot;, dt. &quot;Fabrikationslabor&quot;) ist eine offene Kreativwerkstatt, die das gemeinsame Arbeiten und Experimentieren mit der Herstellung von Dingen aller Art ermöglicht. Und genau das möchten wir - zentral in Rheydt oder Mönchengladbach. <i className="bi bi-boxes" /></p>
        <h2 className="text-2xl pt-4">Das Lab</h2>
        <p>Wir stellen uns ein FabLab für unsere Stadt als einen zentralen Ort vor, um kreatives Ausprobieren und Austausch zu fördern. Wir möchten einen niedrigschwelligen Zugang zu Technologie und Fertigungsverfahren bieten, Neugier wecken und den Austausch von Wissen unterstützen.</p>
        <p>Um den Personen die im Lab arbeiten wollen das nötige Handwerkszeug bereitzustellen muss eine gewisse Grundausstattung bereitgestellt werden. Diese könnte entweder durch den Projektträger angeschafft oder durch Projektpartner bereitgestellt werden. Ein paar erste Ideen für die Ausstattung haben wir auf einer Liste zusammengestellt. Mehr dazu findest Du auf unserer Projekt-Webseite. Besuch uns auf <Link href="https://fablab-mg.com"><a><strong>www.fablab-mg.com</strong></a></Link> oder folge einfach dem QR-Code oben links.</p>
        <h2 className="text-2xl pt-4">Partner & Träger</h2>
        <p>Neben einem Träger braucht das Projekt Partner, die sich für seine Umsetzung engagieren und von der neuen Einrichtung profitieren. Insbesondere Unternehmen der Stadt, die Hochschule, Volkshochschule, Berufskollegs sowie andere Bildungseinrichtungen sind hier herzlich eingeladen.</p>
        <p className="text-neutral-500 pt-4">IG FabLab für Mönchengladbach &amp; Schola Vitae e.V.</p>
      </main>
    </article>
  )
}
