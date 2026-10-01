import { getCatalogImage } from './catalogImages'
import { getServiceCardPrice, servicePricingByCategory, type PricingCategory } from './servicePricing'
export type ServiceCategory = PricingCategory
export type ServiceCatalogItem = {
  category: ServiceCategory
  categoryLabel: string
  description: string
  duration?: string
  id: string
  image: string
  path: string
  price?: string
  title: string
}
export const categoryLabels: Record<PricingCategory, string> = {
  oasis: 'Oasis', tacto: 'Tacto', tez: 'Tez', filo: 'Filo', hebra: 'Hebra',
  brote: 'Brotes', lienzo: 'Lienzo', lazo: 'Lazo', raiz: 'Raíz',
}
export const serviceCatalog: ServiceCatalogItem[] = Object.entries(servicePricingByCategory)
  .flatMap(([key, services]) => services.map((service) => {
    const category = key as PricingCategory
    return {
      category, categoryLabel: categoryLabels[category],
      description: service.description, id: service.id, title: service.title,
      duration: service.options.length === 1 ? service.options[0].duration : 'Según opción',
      price: getServiceCardPrice(service), image: getCatalogImage(category, service.id),
      path: category === 'brote' ? '/brote' : `/${category}`,
    }
  }))
export function getRandomServiceRecommendation(currentKey: string) {
  const options = serviceCatalog.filter((service) => `${service.category}:${service.id}` !== currentKey)
  return options[Math.floor(Math.random() * options.length)]
}
