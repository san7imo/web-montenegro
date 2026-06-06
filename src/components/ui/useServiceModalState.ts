import { useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useServiceModalState(serviceId: string) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isOpenedByUrl = useMemo(() => {
    const params = new URLSearchParams(location.search)

    return params.get('service') === serviceId
  }, [location.search, serviceId])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)

    const params = new URLSearchParams(location.search)

    if (params.get('service') !== serviceId) {
      return
    }

    params.delete('service')
    const nextSearch = params.toString()
    navigate(
      `${location.pathname}${nextSearch ? `?${nextSearch}` : ''}${location.hash}`,
      { replace: true },
    )
  }, [location.hash, location.pathname, location.search, navigate, serviceId])

  return {
    closeModal,
    isModalOpen: isModalOpen || isOpenedByUrl,
    openModal,
  }
}
