import medicinalBathImage from '../../assets/oasis/baños-medicinales.webp'
import cellularHydrationImage from '../../assets/oasis/hidratacion-celular.webp'
import detoxTherapyImage from '../../assets/oasis/terapias-de-detoxificacion.webp'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'

type ServiceExperienceImageKey = 'bath' | 'detox' | 'hydration'

type ServiceExperienceCardProps = {
  title: string
  description: string
  duration: string
  price: string
  image: ServiceExperienceImageKey
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<ServiceExperienceImageKey, string> = {
  bath: medicinalBathImage,
  detox: detoxTherapyImage,
  hydration: cellularHydrationImage,
}

export function ServiceExperienceCard({
  title,
  description,
  duration,
  price,
  image,
  ctaHref,
  ctaLabel,
}: ServiceExperienceCardProps) {
  return (
    <article className="grid gap-8 py-4 sm:py-5 lg:grid-cols-[11rem_10rem_1fr] lg:items-start lg:gap-7 xl:grid-cols-[12rem_11rem_1fr] xl:gap-10">
      <div className="mx-auto w-full max-w-[11rem] lg:mx-0 lg:max-w-none">
        <ImageLayer
          src={imageByKey[image]}
          alt={title}
          className="aspect-square w-full rounded-[1.5rem] object-cover"
        />
      </div>

      <div className="w-full max-w-[12rem] text-forest-dark/92">
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 text-[1rem] leading-7">
          <span>Duración</span>
          <span className="justify-self-end font-semibold">{duration}</span>
        </div>
        <div className="mt-1 h-px w-full bg-pink/55" />
        <div className="mt-2 grid grid-cols-[auto_1fr] items-center gap-x-4 text-[1rem] leading-7">
          <span>Precio</span>
          <span className="justify-self-end font-semibold">{price}</span>
        </div>
        <div className="mt-1 h-px w-full bg-pink/55" />
      </div>

      <div className="max-w-[25rem] lg:max-w-none">
        <h3 className="font-heading text-[2.45rem] leading-[0.92] tracking-[-0.04em] text-forest sm:text-[2.8rem] lg:text-[3rem]">
          {title}
        </h3>
        <p className="mt-2 max-w-[24rem] text-[1.05rem] leading-8 text-forest-dark/92 sm:text-[1.08rem] lg:max-w-[26rem]">
          {description}
        </p>
        <div className="mt-6">
          <Button
            to={ctaHref}
            variant="primary"
            className="min-w-[11.25rem] px-7 text-[0.78rem] tracking-[0.08em]"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}
