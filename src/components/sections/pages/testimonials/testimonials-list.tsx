'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import ListItem from './list-item'

import 'keen-slider/keen-slider.min.css'

const list = [
    {
        profileImage: '/images/profiles/img-1.png',
        name: 'Olívia Magalhães',
        age: 35,
        description: 'Super Recomendo! Produto condiz com o resultado que tive , inclusive já fiz novo pedido , desde já agradeço todos vocês.'
    },
    {
        profileImage: '/images/profiles/img-2.png',
        name: 'Carla Cristina',
        age: 38,
        description: 'Nossa, me sinto muito mais confiante com as mudanças no meu corpo que tive até aqui, minha barriga vivia estufada, parecia que eu estava doente, estou muito satisfeita, estou amando o tratamento! Recomendo demais pessoal!'
    },
    {
        profileImage: '/images/profiles/img-3.png',
        name: 'José Rodrigues',
        age: 49,
        description: 'Produto realmente funciona. Mudança incrível para os primeiros dias, já estou sentindo diferença na pochete e também na saciedade.'
    },
    {
        profileImage: '/images/profiles/img-4.png',
        name: 'Márcia Andrade',
        age: 42,
        description: 'Produto chegou super rápido, antes mesmo da data prevista. Amei o OZENFIT CAPS, com certeza comprarei mais vezes, pois sofro com gordurinhas indesejadas desde a minha primeira gravidez! Recomendo!'
    },
]

export default function TestimonialsList() {
    const [loaded, setLoaded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 425px)": {
                slides: { perView: 1, spacing: 16 }
            },
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 16 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3,  spacing: 16 }
            }
        },
        slides: {
            perView: 1,
            spacing: 16
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })

    return (
        <div className="
            w-[20rem] md:w-[40rem] lg:w-[50rem] xl:w-[65rem]
            flex flex-col gap-4 items-center">
            <ul
                ref={sliderRef}
                className="relative w-full keen-slider">
                {list.map((item, index) => {
                    return (
                        <ListItem
                            profileImage={item.profileImage}
                            name={item.name}
                            age={item.age}
                            description={item.description}
                            key={index} />
                    )
                })}
            </ul>

            {loaded && instanceRef.current && (
                <div className="py-2 flex gap-2 justify-center">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
                        (index) => {
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => instanceRef.current?.moveToIdx(index)}
                                    data-active={currentSlide === index ? true : false}
                                    className="
                                    w-2.5 h-2.5 bg-slate-200
                                    cursor-pointer rounded-full
                                    data-[active=true]:bg-emerald-300" />
                            )
                        }
                    )}
                </div>
            )}
        </div>
    )
}