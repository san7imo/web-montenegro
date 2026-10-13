import { PageShell } from '../../components/layout/PageShell'
import { CategoryCatalog } from '../../components/ui/CategoryCatalog'
import { NewCategoryHero } from './sections/NewCategoryHero'

export function NewCategoryPage({ category }: { category: 'lienzo' | 'lazo' }) {
  return (
    <PageShell footerTone="dark">
      <NewCategoryHero category={category} />
      <CategoryCatalog category={category} />
    </PageShell>
  )
}
