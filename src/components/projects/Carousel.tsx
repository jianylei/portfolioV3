import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import CarouselDots from './CarouselDots'
import React from 'react'
import CarouselControls from './CarouselControls'

type Props = PropsWithChildren & EmblaOptionsType

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap()
      setSelectedIndex(index || 0)
    }

    emblaApi?.on('select', selectHandler)
    // cleanup
    return () => {
      emblaApi?.off('select', selectHandler)
    }
  }, [emblaApi])

  const length = React.Children.count(children)
  const canScrollNext = !!emblaApi?.canScrollNext()
  const canScrollPrev = !!emblaApi?.canScrollPrev()

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <CarouselDots
        itemsLength={length}
        selectedIndex={selectedIndex}
        onClick={(index: number) => emblaApi?.scrollTo(index)}
      />
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  )
}
export default Carousel
