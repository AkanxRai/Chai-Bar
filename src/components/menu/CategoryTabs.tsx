interface CategoryTabsProps {
  categories: { id: string; name: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={[
              "flex-none rounded-full px-4 py-2 font-body text-sm font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
              isActive
                ? "bg-terracotta text-warm-white"
                : "bg-cream/50 text-charcoal/70 hover:bg-cream",
            ].join(" ")}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
