"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IPagination {
  count: number;
}

const Pagination = ({ count }: IPagination) => {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page: number = Number(searchParam.get("page")) || 1;

  const params = new URLSearchParams(searchParam);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (page - 1).toString())
      : params.set("page", (page + 1).toString());

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between p-2.5">
      <button
        className="py-1.5 px-2.5 bg-white text-black rounded-md disabled:cursor-not-allowed disabled:bg-gray-500"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <strong>Total {count}</strong>
      <button
        className="py-1.5 px-2.5 bg-white text-black rounded-md disabled:cursor-not-allowed disabled:bg-gray-500"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
