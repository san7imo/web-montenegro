import leftIcon from '../../assets/esencia/icono-izquierdo.webp'
import centerIcon from '../../assets/esencia/icono-centro.webp'
import rightIcon from '../../assets/esencia/icono-derecho.webp'
import { ImageLayer } from '../ui/ImageLayer'

type ValueCardIcon = 'left' | 'center' | 'right'

type ValueCardProps = {
  title: string
  description: string
  icon: ValueCardIcon
}

const iconByKey: Record<ValueCardIcon, string> = {
  left: leftIcon,
  center: centerIcon,
  right: rightIcon,
}

export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[2.7rem] bg-white/[0.045] px-8 py-10 shadow-[0_12px_26px_rgba(24,35,28,0.1)] ring-1 ring-black/3 backdrop-blur-[1px] sm:px-9 sm:py-11">
      <h3 className="type-card-title text-center text-cream-light">
        {title}
      </h3>
      <div className="mt-8 flex justify-center">
        <ImageLayer
          src={iconByKey[icon]}
          alt=""
          className="h-[10.5rem] w-[10.5rem] object-contain sm:h-[11.25rem] sm:w-[11.25rem]"
        />
      </div>
      <p className="type-body mt-7 text-center text-cream-light/92">
        {description}
      </p>
    </article>
  )
}
