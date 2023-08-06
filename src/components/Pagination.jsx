function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center py-4 text-sm justify-between">
      <p className="text-gray-500">
        Showing {currentPage}/{totalPages}
      </p>

      <div className="inline-flex gap-2">
        <button
          className={'disabled:hidden'}
          disabled={currentPage === 1}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          className={'disabled:hidden'}
          disabled={currentPage === totalPages}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default Pagination
