import Warning from '@/components/warning'
import SectionDivider from '@/components/sections/section-divider'

import Header from '@/components/header'
import VideoVSL from '@/components/sections/pages/video-vsl'
import Lead from '@/components/sections/pages/lead'
import Story from '@/components/sections/pages/story'
import Pitch from '@/components/sections/pages/pitch'
import Testimonials from '@/components/sections/pages/testimonials'
import Offers from '@/components/sections/pages/offers'
import FAQ from '@/components/sections/pages/faq'
import Support from '@/components/sections/pages/support'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <main className="flex flex-col">
            <Warning
                bgColor="bg-red-500"
                text="ATENÇÃO: Devido à alta demanda gerada pelas recentes reportagens na TV, nossos frascos de OZENFIT CAPS estão quase esgotados! ÚLTIMAS UNIDADES!"
                icon="⌛" />

            <Header />

            <VideoVSL />

            <SectionDivider bgGradientDirection="left" />

            <Lead />

            <SectionDivider bgGradientDirection="right" />

            <Story />

            <SectionDivider bgGradientDirection="left" />

            <Pitch />

            <SectionDivider bgGradientDirection="right" />

            <Testimonials />

            <Warning
                bgColor="bg-emerald-500"
                text="Atenção: Este produto está prestes a esgotar, por isso tem uma oferta especial apenas hoje!"
                icon="⏰" />

            <Offers />

            <FAQ />

            <Support />

            <Footer />
        </main>
    )
}