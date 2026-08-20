import { Link } from 'react-router-dom'

type PrivacyCheckboxTone = 'light' | 'dark'

type PrivacyCheckboxProps = {
  description: string
  id: string
  label: string
  linkLabel?: string
  name: string
  tone?: PrivacyCheckboxTone
  value?: string
}

const toneStyles: Record<PrivacyCheckboxTone, { label: string; description: string; link: string }> = {
  light: {
    label: 'text-forest-dark',
    description: 'text-forest-soft',
    link: 'text-pink hover:text-pink-dark',
  },
  dark: {
    label: 'text-white/92',
    description: 'text-white/66',
    link: 'text-pink-soft hover:text-white',
  },
}

export function PrivacyCheckbox({
  description,
  id,
  label,
  linkLabel = 'Consultar la Política de privacidad',
  name,
  tone = 'light',
  value = 'Sí',
}: PrivacyCheckboxProps) {
  const descriptionId = `${id}-description`
  const styles = toneStyles[tone]

  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        required
        aria-describedby={descriptionId}
        className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
      />
      <div>
        <label htmlFor={id} className={`type-caption block cursor-pointer font-semibold ${styles.label}`}>
          {label}
        </label>
        <p id={descriptionId} className={`type-caption mt-1 ${styles.description}`}>
          {description}{' '}
          <Link
            to="/legal/privacidad"
            className={`font-semibold underline decoration-current/45 underline-offset-2 transition-colors ${styles.link}`}
          >
            {linkLabel}
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

