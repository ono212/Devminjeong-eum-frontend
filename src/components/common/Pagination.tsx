import TwoButtonSvg from '@/components/svg-component/TwoButtonSvg';
import OneButtonSvg from '@/components/svg-component/OneButtonSvg';
import usePagination from '@/hooks/usePagination';
import { PaginationPropType } from '@/types/main';

export default function Pagination({
  limit = 10,
  total = 100,
  viewPaginationNums = 4,
  setCurrent,
  current,
  style,
}: PaginationPropType) {
  const {
    onChangePage,
    calculateStartPage,
    noPrev,
    noNext,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination({ limit, total, viewPaginationNums, current, setCurrent });

  const startPage = calculateStartPage();

  return (
    <div className={`flex gap-4 ${style || ''}`}>
      <button
        onClick={goToFirstPage}
        disabled={noPrev}
        className={`customButton ${!noPrev ? 'hover-enabled' : 'hover-disabled'}`}
      >
        <TwoButtonSvg />
      </button>

      <button
        onClick={goToPrevPage}
        disabled={noPrev}
        className={`rotate-180  ${noPrev ? 'text-[#E5E8F2]' : 'text-main-blue'}`}
      >
        <OneButtonSvg />
      </button>

      {Array.from({ length: viewPaginationNums }, (_, i) => {
        const page = startPage + i;
        return (
          <div key={page} className="flex gap-[12px]">
            <button
              className={`text-[18px] ${page > totalPages ? 'text-[#D7DCEB]' : current === page ? 'text-main-blue font-bold' : 'text-main-gray font-normal'}`}
              onClick={() => onChangePage(page)}
              disabled={page > totalPages}
            >
              {page}
            </button>
          </div>
        );
      })}

      <button
        onClick={goToNextPage}
        disabled={noNext}
        className={` ${noNext ? 'text-[#E5E8F2]' : 'text-main-blue'}`}
      >
        <OneButtonSvg />
      </button>

      <button
        onClick={goToLastPage}
        disabled={noNext}
        className={`rotate-180 customButton ${!noNext ? 'hover-enabled' : 'hover-disabled'}`}
      >
        <TwoButtonSvg />
      </button>
    </div>
  );
}