import { useMemo } from "react";

export const useSearch = (items, searchTerm, keys = []) =>
  useMemo(() => {
    if (!searchTerm) return items;
    const normalized = searchTerm.toLowerCase();

    return items.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        if (Array.isArray(value))
          return value.join(" ").toLowerCase().includes(normalized);
        return String(value || "")
          .toLowerCase()
          .includes(normalized);
      }),
    );
  }, [items, searchTerm, keys]);

export default useSearch;
