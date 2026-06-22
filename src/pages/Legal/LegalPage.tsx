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
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-pink-soft">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[12ch] font-heading text-[3.6rem] leading-[0.9] tracking-[-0.04em] text-white sm:text-[4.6rem] lg:text-[5.6rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-[46rem] text-[1.02rem] leading-8 text-cream-light/88 sm:text-[1.08rem]">
            {content.intro}
          </p>
          <p className="mt-5 text-[0.86rem] font-semibold uppercase tracking-[0.14em] text-cream-light/62">
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
                <h2 className="font-heading text-[2.15rem] leading-none tracking-[-0.03em] text-forest sm:text-[2.55rem]">
                  {section.title}
                </h2>

                {section.paragraphs ? (
                  <div className="mt-4 space-y-4 text-[0.98rem] leading-7 text-forest-dark/82 sm:text-[1.02rem] sm:leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-forest-dark/82 sm:text-[1.02rem] sm:leading-8">
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
