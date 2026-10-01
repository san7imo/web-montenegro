import { approvedServicePricing } from './approvedServicePricing'

export type PricingCategory = 'oasis' | 'tez' | 'filo' | 'brote' | 'hebra' | 'tacto' | 'raiz' | 'lienzo' | 'lazo'
export type ServicePriceOption = {
  bonus?: string
  group?: string
  name: string
  price: string
  description?: string
  duration?: string
  sourceSheet?: string
  sourceRow?: number
}
export type ServicePricing = {
  bonus?: string
  description: string
  id: string
  options: ServicePriceOption[]
  title: string
}
export const servicePricingByCategory: Record<PricingCategory, ServicePricing[]> = approvedServicePricing

export function getCategoryPricing(category: PricingCategory): readonly ServicePricing[] {
  return servicePricingByCategory[category]
}

export function getServicePricing(
  category: PricingCategory,
  serviceId: string,
): ServicePricing | undefined {
  return getCategoryPricing(category).find((service) => service.id === serviceId)
}

export function getServiceCardPrice(service: ServicePricing) {
  const availableOptions = service.options.filter((option) => option.price !== 'Consultar')

  if (availableOptions.length === 0) {
    return 'Consultar'
  }

  const firstPrice = availableOptions[0].price

  if (availableOptions.length === 1 && firstPrice.length <= 26) {
    return firstPrice
  }

  const amounts = availableOptions.flatMap((option) => {
    const amount = option.price.match(/(?:Desde\s*)?([\d.]+(?:,\d+)?)\s*€/i)?.[1]

    if (!amount) {
      return []
    }

    const normalizedAmount = amount.includes('.') && amount.split('.').at(-1)?.length === 3
      ? amount.replace(/\./g, '')
      : amount.replace(',', '.')

    return [{ label: amount, value: Number(normalizedAmount) }]
  })
  const lowestAmount = amounts.reduce<(typeof amounts)[number] | undefined>(
    (lowest, amount) => !lowest || amount.value < lowest.value ? amount : lowest,
    undefined,
  )

  return lowestAmount ? 'Desde ' + lowestAmount.label + ' €' : 'Ver tarifas'
}
