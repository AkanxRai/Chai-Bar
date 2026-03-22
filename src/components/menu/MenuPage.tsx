"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { menuCategories, bestsellers } from "@/data/menu";
import { ChefsPicks } from "./ChefsPicks";
import { MenuFilters } from "./MenuFilters";
import { CategoryTabs } from "./CategoryTabs";
import { MenuItemCard } from "./MenuItemCard";

const ALL_ID = "all";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_ID);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilterToggle = (filter: string) => {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        if (filter === "veg") next.delete("non-veg");
        if (filter === "non-veg") next.delete("veg");
        next.add(filter);
      }
      return next;
    });
  };

  const filterItem = (item: { name: string; diet: string; price: number }) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (filters.has("veg") && item.diet !== "veg") return false;
    if (filters.has("non-veg") && item.diet !== "non-veg") return false;
    if (filters.has("under-150") && item.price > 150) return false;
    if (filters.has("bestsellers") && !bestsellers.includes(item.name))
      return false;
    return true;
  };

  // Filtered counts per category (for tab badges and dimming)
  const filteredCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    menuCategories.forEach((cat) => {
      counts[cat.id] = cat.items.filter(filterItem).length;
    });
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filters]);

  // Items for single category view
  const activeItems = useMemo(() => {
    if (activeCategory === ALL_ID) return [];
    const category = menuCategories.find((c) => c.id === activeCategory);
    if (!category) return [];
    return category.items.filter(filterItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, search, filters]);

  // Total items across all categories (for result count)
  const totalItems = menuCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );
  const totalFilteredItems = Object.values(filteredCounts).reduce(
    (sum, c) => sum + c,
    0
  );

  // Build tab data with counts
  const categoryTabs = [
    { id: ALL_ID, name: "All", count: totalItems },
    ...menuCategories.map((c) => ({
      id: c.id,
      name: c.name,
      count: c.items.length,
    })),
  ];

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    // Scroll content area to top
    const el = document.getElementById("menu-content");
    if (el?.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const noResults =
    activeCategory === ALL_ID
      ? totalFilteredItems === 0
      : activeItems.length === 0;

  return (
    <div className="bg-warm-white">
      {/* Page header */}
      <div className="px-4 pt-12 pb-8 text-center sm:px-6">
        <h1 className="font-brand text-3xl font-bold italic text-chai-brown sm:text-4xl md:text-5xl">
          What&rsquo;s your craving today?
        </h1>
        <p className="mx-auto mt-3 max-w-md font-body text-charcoal/60">
          From chai specials to hearty meals — 100+ things to love.
        </p>
      </div>

      {/* Chef's Picks */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ChefsPicks />
      </div>

      {/* Search + filters */}
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <MenuFilters
          search={search}
          filters={filters}
          onSearchChange={setSearch}
          onFilterToggle={handleFilterToggle}
          resultCount={
            activeCategory === ALL_ID ? totalFilteredItems : activeItems.length
          }
          totalCount={totalItems}
        />
      </div>

      {/* Sticky category tabs */}
      <div className="sticky top-16 z-40 mt-6 border-b border-chai-brown/10 bg-warm-white/95 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="mx-auto max-w-6xl">
          <CategoryTabs
            categories={categoryTabs}
            activeId={activeCategory}
            onSelect={handleCategorySelect}
            filteredCounts={filteredCounts}
          />
        </div>
      </div>

      {/* Menu content */}
      <div
        id="menu-content"
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6"
      >
        {/* All view — stacked categories */}
        {activeCategory === ALL_ID && (
          <div className="space-y-12">
            {menuCategories.map((category) => {
              const items = category.items.filter(filterItem);
              if (items.length === 0) return null;
              return (
                <section key={category.id}>
                  <div className="sticky top-32 z-30 border-l-4 border-muted-gold bg-warm-white/95 py-3 pl-4 backdrop-blur-sm">
                    <h3 className="font-brand text-xl font-bold text-chai-brown">
                      {category.name}
                    </h3>
                    <span className="font-body text-xs text-charcoal/40">
                      {items.length} items
                    </span>
                  </div>
                  {/* Desktop grid / Mobile compact list */}
                  <div className="mt-4 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <MenuItemCard key={item.name} item={item} />
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col gap-2 sm:hidden">
                    {items.map((item) => (
                      <MenuItemCard
                        key={item.name}
                        item={item}
                        compact
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Single category view */}
        {activeCategory !== ALL_ID && (
          <>
            {/* Desktop grid */}
            <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {activeItems.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
            {/* Mobile compact list */}
            <div className="flex flex-col gap-2 sm:hidden">
              {activeItems.map((item) => (
                <MenuItemCard key={item.name} item={item} compact />
              ))}
            </div>
          </>
        )}

        {/* No results */}
        {noResults && (
          <p className="mt-12 text-center font-body text-charcoal/40">
            No items found — but ask us when you visit, we might surprise
            you.
          </p>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-chai-brown px-4 py-16 text-center sm:px-6">
        <h2 className="font-brand text-2xl font-bold text-cream sm:text-3xl">
          Come experience it in person.
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-cream/80">
          The menu is just the beginning. Indiranagar&rsquo;s best seat is
          waiting.
        </p>
        <Link
          href="/visit"
          className="mt-8 inline-flex items-center gap-2 rounded bg-muted-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-[#8FBF7A]"
        >
          Get Directions &rarr;
        </Link>
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full bg-chai-brown p-3 text-cream shadow-lg transition-all hover:bg-chai-brown/90"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
