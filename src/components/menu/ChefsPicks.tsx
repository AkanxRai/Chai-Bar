import { Star } from "lucide-react";
import { chefsPicks, menuCategories } from "@/data/menu";
import type { MenuItem, MenuCategory } from "@/data/menu";

interface ChefsPickItem {
  item: MenuItem;
  category: MenuCategory;
}

function findChefsPickItems(): ChefsPickItem[] {
  return chefsPicks.flatMap((pickName) => {
    for (const category of menuCategories) {
      const found = category.items.find((item) => item.name === pickName);
      if (found) {
        return [{ item: found, category }];
      }
    }
    return [];
  });
}

export function ChefsPicks() {
  const picks = findChefsPickItems();

  return (
    <div>
      <h2 className="font-brand text-2xl font-bold text-chai-brown">
        Chef&apos;s Picks
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide mt-4">
        {picks.map(({ item, category }) => {
          const displayPrice = item.hasSizes ? item.price : item.price;
          return (
            <div
              key={item.name}
              className="flex-none w-56 rounded-xl border border-muted-gold/30 bg-gradient-to-br from-warm-white to-cream/50 p-4 shadow-sm"
            >
              <div className="flex items-center gap-1">
                <span className="inline-block rounded-full bg-muted-gold/20 px-2.5 py-0.5 font-body text-xs font-medium text-muted-gold">
                  <Star size={12} className="inline mr-1" />
                  Chef&apos;s Pick
                </span>
              </div>
              <p className="font-body text-xs text-charcoal/50 mt-1">
                {category.name}
              </p>
              <p className="font-brand text-lg font-semibold text-chai-brown mt-2">
                {item.name}
              </p>
              <p className="font-body text-sm font-bold text-terracotta mt-1">
                ₹{displayPrice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
