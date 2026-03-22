import { Search, X } from "lucide-react";

interface MenuFiltersProps {
  search: string;
  filters: Set<string>;
  onSearchChange: (value: string) => void;
  onFilterToggle: (filter: string) => void;
  resultCount: number;
  totalCount: number;
}

const FILTER_PILLS = [
  { id: "veg", label: "\uD83D\uDFE2 Veg Only" },
  { id: "non-veg", label: "\uD83D\uDD34 Non-Veg" },
  { id: "under-150", label: "₹ Under ₹150" },
  { id: "bestsellers", label: "\u2B50 Bestsellers" },
] as const;

export function MenuFilters({
  search,
  filters,
  onSearchChange,
  onFilterToggle,
  resultCount,
  totalCount,
}: MenuFiltersProps) {
  const hasActiveFilters = filters.size > 0 || search.length > 0;

  return (
    <div className="w-full space-y-3">
      {/* Search bar */}
      <div className="relative mx-auto max-w-lg">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
          aria-hidden="true"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search chai, ramen, brownies..."
          aria-label="Search menu items"
          className="w-full rounded-xl border border-cream bg-cream/30 px-4 py-3 pl-10 pr-10 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-chai-brown focus:outline-none focus:ring-2 focus:ring-chai-brown/20"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-charcoal/40 hover:text-charcoal"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {FILTER_PILLS.map(({ id, label }) => {
          const isActive = filters.has(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onFilterToggle(id)}
              aria-pressed={isActive}
              className={[
                "rounded-full px-4 py-1.5 font-body text-xs font-medium cursor-pointer transition-colors duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
                isActive
                  ? "bg-chai-brown text-cream"
                  : "border border-cream/80 bg-warm-white text-charcoal/60 hover:border-chai-brown/30 hover:text-charcoal",
              ].join(" ")}
            >
              {isActive && "✓ "}
              {label}
            </button>
          );
        })}
      </div>

      {/* Result count */}
      {hasActiveFilters && (
        <p className="text-center font-body text-xs text-charcoal/40">
          Showing {resultCount} of {totalCount} items
        </p>
      )}
    </div>
  );
}
