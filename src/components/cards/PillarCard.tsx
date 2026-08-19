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
        <h3 className="type-card-title text-pink-soft">
          {title}
        </h3>
        <p className="type-body mt-1.5 text-pink-soft/88">
          {subtitle}
        </p>
        <p className="type-body mt-6 text-cream-light/92 sm:mt-7">
          {description}
        </p>
      </div>
    </article>
  )
}
