interface CategoryTabsProps {
  categories: { id: string; name: string; count: number }[];
  activeId: string;
  onSelect: (id: string) => void;
  filteredCounts?: Record<string, number>;
}

export function CategoryTabs({
  categories,
  activeId,
  onSelect,
  filteredCounts,
}: CategoryTabsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((category) => {
        const isActive = category.id === activeId;
        const displayCount =
          filteredCounts && category.id !== "all"
            ? filteredCounts[category.id] ?? 0
            : category.count;
        const isDimmed =
          filteredCounts &&
          category.id !== "all" &&
          (filteredCounts[category.id] ?? 0) === 0;

        return (
          <button
            key={category.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category.id)}
            className={[
              "flex-none snap-start rounded-full px-4 py-2 font-body text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
              isActive
                ? "bg-chai-brown text-cream"
                : isDimmed
                  ? "border border-chai-brown/20 text-chai-brown/30"
                  : "border border-chai-brown/30 text-chai-brown hover:bg-cream/50",
            ].join(" ")}
          >
            {category.name}
            <span
              className={`ml-1.5 text-xs ${
                isActive ? "text-cream/70" : "text-chai-brown/40"
              }`}
            >
              ({displayCount})
            </span>
          </button>
        );
      })}
    </div>
  );
}
