import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useServiceModalState(serviceId: string) {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const isModalOpen = params.get('service') === serviceId

  const openModal = useCallback(() => {
    const nextParams = new URLSearchParams(location.search)
    if (nextParams.get('service') === serviceId) return

    nextParams.set('service', serviceId)
    navigate({
      pathname: location.pathname,
      search: `?${nextParams.toString()}`,
      hash: location.hash,
    })
  }, [location.hash, location.pathname, location.search, navigate, serviceId])

  const closeModal = useCallback(() => {
    const nextParams = new URLSearchParams(location.search)
    if (nextParams.get('service') !== serviceId) return

    nextParams.delete('service')
    const nextSearch = nextParams.toString()
    navigate(
      {
        pathname: location.pathname,
        search: nextSearch ? `?${nextSearch}` : '',
        hash: location.hash,
      },
      { replace: true },
    )
  }, [location.hash, location.pathname, location.search, navigate, serviceId])

  return { closeModal, isModalOpen, openModal }
}
