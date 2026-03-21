import { Search } from "lucide-react";

interface MenuFiltersProps {
  search: string;
  filters: Set<string>;
  onSearchChange: (value: string) => void;
  onFilterToggle: (filter: string) => void;
}

const FILTER_PILLS = [
  { id: "veg", label: "Veg Only" },
  { id: "non-veg", label: "Non-Veg" },
  { id: "under-150", label: "Under ₹150" },
] as const;

export function MenuFilters({
  search,
  filters,
  onSearchChange,
  onFilterToggle,
}: MenuFiltersProps) {
  return (
    <div className="w-full">
      {/* Search bar */}
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40 pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="What are you craving?"
          className="w-full rounded-xl border border-cream bg-warm-white px-4 py-3 pl-10 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {FILTER_PILLS.map(({ id, label }) => {
          const isActive = filters.has(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onFilterToggle(id)}
              className={[
                "rounded-full px-4 py-1.5 font-body text-xs font-medium cursor-pointer transition-colors duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
                isActive
                  ? "bg-terracotta text-warm-white"
                  : "border border-cream/80 bg-warm-white text-charcoal/60 hover:border-terracotta/30 hover:text-charcoal",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
