"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

const CarouselContext = React.createContext(null)

export const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )

    React.useEffect(() => {
      if (emblaApi && setApi) {
        setApi(emblaApi)
      }
    }, [emblaApi, setApi])

    return (
      <div
        ref={ref}
        className={className}
        {...props}
      >
        <CarouselContext.Provider value={emblaApi}>
          <div ref={emblaRef} className="overflow-hidden">
            {children}
          </div>
        </CarouselContext.Provider>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        {...props}
      />
    )
  }
)
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={className}
        {...props}
      />
    )
  }
)
CarouselItem.displayName = "CarouselItem"
