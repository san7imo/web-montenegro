import earthImage from '../../assets/origen/pilar-de-la-tierra.webp'
import waterImage from '../../assets/origen/pilar-del-agua.webp'
import timeImage from '../../assets/origen/pilar-del-tiempo.webp'
import { ImageLayer } from '../ui/ImageLayer'

type PillarImageKey = 'earth' | 'water' | 'time'

type PillarCardProps = {
  title: string
  subtitle: string
  description: string
  image: PillarImageKey
}

const imageByKey: Record<PillarImageKey, string> = {
  earth: earthImage,
  water: waterImage,
  time: timeImage,
}

export function PillarCard({
  title,
  subtitle,
  description,
  image,
}: PillarCardProps) {
  return (
    <article className="grid h-full grid-cols-[7.6rem_1fr] gap-5 rounded-[2.5rem] bg-[linear-gradient(180deg,#859379_0%,#95a188_100%)] p-4 shadow-[0_12px_26px_rgba(31,53,43,0.14)] ring-1 ring-black/4 sm:grid-cols-[8.4rem_1fr] sm:gap-6 sm:p-5">
      <ImageLayer
        src={imageByKey[image]}
        alt=""
        className="h-full min-h-[13.8rem] w-full rounded-[1.9rem] object-cover sm:min-h-[15.5rem]"
      />

      <div className="flex flex-col">
        <h3 className="font-heading text-[2.15rem] leading-none tracking-[-0.03em] text-pink-soft sm:text-[2.45rem]">
          {title}
        </h3>
        <p className="mt-1.5 text-[0.96rem] leading-6 text-pink-soft/88 sm:text-[1.02rem]">
          {subtitle}
        </p>
        <p className="mt-6 text-[0.98rem] leading-7 text-cream-light/92 sm:mt-7 sm:text-[1rem] sm:leading-8">
          {description}
        </p>
      </div>
    </article>
  )
}
