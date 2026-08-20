import { lazy, Suspense } from 'react'

import type { ServiceModalProps } from './ServiceModal'

const ServiceModal = lazy(() =>
  import('./ServiceModal').then(({ ServiceModal }) => ({ default: ServiceModal })),
)

export function DeferredServiceModal(props: ServiceModalProps) {
  if (!props.isOpen) return null

  return (
    <Suspense fallback={null}>
      <ServiceModal {...props} />
    </Suspense>
  )
}
