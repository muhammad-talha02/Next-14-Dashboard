"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
interface searchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: searchProps) => {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParam);

      params.set("page", "1");
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params}`);
    },
    400
  );

  // console.log({ searchParams, pathname });
  return (
    <div className="bg-[#2e374a] flex p-2.5 w-max items-center gap-2.5 rounded-lg">
      <MdSearch size={20} />
      <input
        type="text"
        className="outline-none bg-transparent"
        placeholder={placeholder || "Search...."}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
