import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getSeoMetadata, siteName, siteUrl } from '../../data/seo'

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }

  canonical.href = href
}

export function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { path, metadata } = getSeoMetadata(pathname)
    const canonicalPath = metadata.canonicalPath ?? path
    const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`
    const robots = metadata.noindex ? 'noindex, follow' : 'index, follow'

    document.title = metadata.title
    upsertCanonical(canonicalUrl)
    upsertMeta('meta[name="description"]', 'name', 'description', metadata.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', robots)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description)
  }, [pathname])

  return null
}

