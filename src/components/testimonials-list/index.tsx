'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import ListItem from './list-item'

import 'keen-slider/keen-slider.min.css'

export interface CardItem {
    profileImage: string,
    name: string,
    age: number,
    description: string
}

export interface ImageItem {
    image: string
}

interface TestimonialsListProps {
    list: CardItem[] | ImageItem[],
    testimonialType: 'card' | 'image'
}

export default function TestimonialsList({ list, testimonialType }: TestimonialsListProps) {
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
                            testimonialType={testimonialType}
                            item={item}
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