"use client";

import { useState, useMemo } from "react";
import { menuCategories } from "@/data/menu";
import { ChefsPicks } from "./ChefsPicks";
import { MenuFilters } from "./MenuFilters";
import { CategoryTabs } from "./CategoryTabs";
import { MenuItemCard } from "./MenuItemCard";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Set<string>>(new Set());

  const handleFilterToggle = (filter: string) => {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        // veg and non-veg are mutually exclusive
        if (filter === "veg") next.delete("non-veg");
        if (filter === "non-veg") next.delete("veg");
        next.add(filter);
      }
      return next;
    });
  };

  const activeItems = useMemo(() => {
    const category = menuCategories.find((c) => c.id === activeCategory);
    if (!category) return [];

    return category.items.filter((item) => {
      // Search filter
      if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      // Diet filters
      if (filters.has("veg") && item.diet !== "veg") return false;
      if (filters.has("non-veg") && item.diet !== "non-veg") return false;
      // Price filter
      if (filters.has("under-150") && item.price > 150) return false;

      return true;
    });
  }, [activeCategory, search, filters]);

  const totalInCategory = menuCategories.find(
    (c) => c.id === activeCategory
  )?.items.length ?? 0;

  const categoryTabs = menuCategories.map((c) => ({ id: c.id, name: c.name }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-brand text-4xl font-bold text-chai-brown sm:text-5xl">
        Our Menu
      </h1>
      <p className="mt-2 font-body text-charcoal/60">
        From chai specials to hearty meals — find your favourite.
      </p>

      {/* Chef's Picks */}
      <div className="mt-10">
        <ChefsPicks />
      </div>

      {/* Filters & Search */}
      <div className="mt-10">
        <MenuFilters
          search={search}
          filters={filters}
          onSearchChange={setSearch}
          onFilterToggle={handleFilterToggle}
        />
      </div>

      {/* Category Tabs */}
      <div className="mt-6 sticky top-16 z-40 bg-warm-white/95 backdrop-blur py-3 -mx-4 px-4 sm:-mx-6 sm:px-6">
        <CategoryTabs
          categories={categoryTabs}
          activeId={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      {/* Item count */}
      <p className="mt-4 font-body text-sm text-charcoal/50">
        {activeItems.length === totalInCategory
          ? `${totalInCategory} items`
          : `${activeItems.length} of ${totalInCategory} items`}
      </p>

      {/* Menu Items Grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {activeItems.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>

      {activeItems.length === 0 && (
        <p className="mt-8 text-center font-body text-charcoal/40">
          No items match your filters. Try adjusting your search or filters.
        </p>
      )}
    </div>
  );
}
