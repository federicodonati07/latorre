"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import Btns from '../rootly/btns';

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image className='object-center' src="/imgs/stabilimento.png" alt="stabilimento.png" width={4032} height={1569}></Image>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center font-extrabold tracking-widest">
              Il nostro stabilimento offre una moltitudine di servizi tra cui:<br/>
              lettini,<br/>
              ombrelloni,<br/>
              bar/ristorante.<br/>
            </div>
            <div className='absolute mx-52 sm:mx-0 inset-0 sm:my-52 md:my-20'>
              <Link href="/book" className=''><Btns title="Scopri i prezzi" index="2"></Btns></Link>
            </div>
          </div>
          <div className="embla__slide">
            <Image src="/imgs/torre.png" alt="torre.png" width={4032} height={1700}></Image>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center font-extrabold tracking-widest">
              Nelle vicinanze potrai scorgere una torre. <br/>
              La torre di Lavinio della riserva naturale che affaccia al mare.
            </div>
            <div className='absolute mx-52 sm:mx-0 inset-0 sm:my-20'>
              <Link href="/where" className=''><Btns title="Scopri dove" index="3"></Btns></Link>
            </div>
          </div>
          <div className="embla__slide">
            <Image src="/imgs/tramonto.png" alt="tramonto.png" width={4032} height={3024}></Image>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center font-extrabold tracking-widest">
              Goditi serate in compagnia dei tuoi amici e di un tramonto fantastico.
            </div>
          </div>
          <div className="embla__slide">
            <Image src="/imgs/vista.png" alt="vista.png" width={4032} height={3024}></Image>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center font-extrabold tracking-widest">
              Il panorama che si vede durante l'ora d'oro è impagabile<br/>
              Il sole e le onde che si infrangono sulla sabbia e sulla torre.
            </div>
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
