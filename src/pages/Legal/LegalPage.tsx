import { Navigate } from 'react-router-dom'

import { PageShell } from '../../components/layout/PageShell'
import { Container } from '../../components/ui/Container'
import { legalPages, type LegalPageContent } from '../../data/legal'

type LegalPageProps = {
  page: LegalPageContent['slug']
}

export function LegalPage({ page }: LegalPageProps) {
  const content = legalPages[page]

  if (!content) {
    return <Navigate to="/" replace />
  }

  return (
    <PageShell footerTone="sage" showFloatingButton={false}>
      <section className="bg-forest pt-28 pb-14 text-cream-light sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-18">
        <Container>
          <p className="type-eyebrow text-pink-soft">
            {content.eyebrow}
          </p>
          <h1 className="type-display mt-4 max-w-[12ch] text-white">
            {content.title}
          </h1>
          <p className="type-lead mt-6 max-w-[46rem] text-cream-light/88">
            {content.intro}
          </p>
          <p className="type-eyebrow mt-5 text-cream-light/62">
            {content.updatedAt}
          </p>
        </Container>
      </section>

      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-[58rem] space-y-6">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.65rem] border border-forest/10 bg-cream-light/58 px-6 py-6 shadow-[0_16px_36px_rgba(36,61,49,0.08)] sm:px-8 sm:py-7"
              >
                <h2 className="type-card-title text-forest">
                  {section.title}
                </h2>

                {section.paragraphs ? (
                  <div className="type-body mt-4 space-y-4 text-forest-dark/82">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <ul className="type-body mt-4 space-y-3 text-forest-dark/82">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  )
}
