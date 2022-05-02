import { useMemo, useState } from 'react'

const OFFSET = 20

export default function usePagination<Data>(arr: Data[] | null) {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = useMemo(() => {
    return arr ? Math.ceil(arr.length / OFFSET) : 1
  }, [arr])

  const goToNextPage = () => {
    setCurrentPage((curr) => {
      if (arr && curr + 1 < totalPages) {
        return curr + 1
      }
      return curr
    })
  }

  const goToPrevPage = () => {
    setCurrentPage((curr) => {
      if (arr && curr > 0) {
        return curr - 1
      }
      return curr
    })
  }

  const data = useMemo(() => {
    const paginationStart = currentPage * OFFSET
    const paginationEnd = paginationStart + OFFSET
    return arr?.slice(paginationStart, paginationEnd) ?? []
  }, [arr, currentPage])

  return {
    data,
    totalPages,
    currentPage,
    goToNextPage,
    goToPrevPage,
  }
}
