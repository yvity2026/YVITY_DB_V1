"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PAGINATION_DOTS } from "@/lib/pagination";
import { motion } from "framer-motion";

function PaginationButton({
  children,
  disabled = false,
  active = false,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-lg border px-3 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 font-poppins ${
        active
          ? "border-[#0A4A4A] bg-[#0A4A4A] text-white shadow-md"
          : "border-[#F8F6F1] bg-white text-[#0A4A4A] hover:border-[#0A4A4A] hover:bg-[#F8F6F1]"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default function PaginationControls({
  pagination,
  onPageChange,
  label = "items",
}) {
  if (!pagination || pagination.totalItems === 0) {
    return null;
  }

  const {
    currentPage,
    totalPages,
    totalItems,
    startItem,
    endItem,
    hasPreviousPage,
    hasNextPage,
    pageNumbers,
  } = pagination;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 flex flex-col gap-3 border-t border-[#F8F6F1] pt-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm text-gray-600 font-poppins font-medium">
        Showing <span className="text-[#0A4A4A] font-semibold">{startItem}-{endItem}</span> of <span className="text-[#0A4A4A] font-semibold">{totalItems}</span> {label}
      </p>

      <div className="flex flex-col gap-2">
        {/* Mobile view */}
        <div className="flex items-center justify-between gap-2 sm:hidden">
          <PaginationButton
            disabled={!hasPreviousPage}
            onClick={() => onPageChange(currentPage - 1)}
            className="flex-1"
          >
            <span className="inline-flex items-center justify-center gap-1">
              <FiChevronLeft />
              Prev
            </span>
          </PaginationButton>

          <div className="min-w-[88px] text-center text-sm font-semibold text-[#0A4A4A] font-cormorant">
            {currentPage} / {totalPages}
          </div>

          <PaginationButton
            disabled={!hasNextPage}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex-1"
          >
            <span className="inline-flex items-center justify-center gap-1">
              Next
              <FiChevronRight />
            </span>
          </PaginationButton>
        </div>

        {/* Mobile page numbers */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:hidden">
          {pageNumbers.map((pageNumber, index) =>
            pageNumber === PAGINATION_DOTS ? (
              <span
                key={`${pageNumber}-${index}`}
                className="px-1 text-sm font-semibold text-gray-400"
              >
                {pageNumber}
              </span>
            ) : (
              <PaginationButton
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
                className="min-w-10"
              >
                {pageNumber}
              </PaginationButton>
            ),
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden items-center gap-2 sm:flex">
          <PaginationButton
            disabled={!hasPreviousPage}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span className="inline-flex items-center gap-1">
              <FiChevronLeft />
              Previous
            </span>
          </PaginationButton>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {pageNumbers.map((pageNumber, index) =>
              pageNumber === PAGINATION_DOTS ? (
                <span
                  key={`${pageNumber}-${index}`}
                  className="px-1 text-sm font-semibold text-gray-400"
                >
                  {pageNumber}
                </span>
              ) : (
                <PaginationButton
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => onPageChange(pageNumber)}
                  className="min-w-10"
                >
                  {pageNumber}
                </PaginationButton>
              ),
            )}
          </div>

          <PaginationButton
            disabled={!hasNextPage}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className="inline-flex items-center gap-1">
              Next
              <FiChevronRight />
            </span>
          </PaginationButton>
        </div>
      </div>
    </motion.div>
  );
}
