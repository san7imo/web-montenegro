type BenefitItemProps = {
  label: string
  text: string
}

export function BenefitItem({ label, text }: BenefitItemProps) {
  return (
    <div className="type-body rounded-[1.25rem] border border-white/78 bg-white/6 px-4 py-4 text-white/96 backdrop-blur-[1px] sm:px-5">
      <span className="font-semibold text-white">{label} </span>
      <span>{text}</span>
    </div>
  )
}
