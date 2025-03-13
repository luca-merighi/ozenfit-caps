import SectionTemplate from '../../section-template'

export default function VideoVSL() {
    return (
        <SectionTemplate
            id="video-vsl"
            flexClass="flex flex-col gap-8 items-center">
            <div className="relative w-full lg:w-[75%] h-60 md:h-96 lg:h-[30rem] xl:h-[35rem]">
                <div className="
                    absolute top-0 right-0 z-30
                    h-full w-[75%] bg-emerald-500 rounded-md" />


                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/1059804065?autoplay=1h=ef2b652a65"
                    className="
                        absolute bottom-0 z-40 bg-black
                        w-full h-52 md:h-[22rem] lg:h-[28rem] xl:h-[33rem]
                        rounded-md rounded-tr-none object-cover" />
            </div>

            <div className="flex flex-col gap-3 items-center justify-center lg:text-center">
                <strong className="text-2xl lg:text-3xl text-emerald-500 font-black font-lato">
                    O Segredo Americano que Está Queimando a Gordura de Milhares de Brasileiros <span className="xl:hidden">–</span> <br className="hidden xl:block" /> Sem Dietas Malucas ou Injeções Caras! 😎
                </strong>

                <span className="text-base md:text-lg text-slate-700">
                    CHEGA DE PAGAR CARO NAQUELAS "CANETINHAS" E AINDA SOFRER COM EFEITO SANFONA OU REBOTE!
                </span>
            </div>
        </SectionTemplate>
    )
}