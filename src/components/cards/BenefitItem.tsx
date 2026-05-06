type BenefitItemProps = {
  label: string
  text: string
}

export function BenefitItem({ label, text }: BenefitItemProps) {
  return (
    <div className="rounded-[1.25rem] border border-white/78 bg-white/6 px-4 py-4 text-[1.02rem] leading-8 text-white/96 backdrop-blur-[1px] sm:px-5 sm:text-[1.08rem] lg:text-[1.12rem]">
      <span className="font-semibold text-white">{label} </span>
      <span>{text}</span>
    </div>
  )
}
