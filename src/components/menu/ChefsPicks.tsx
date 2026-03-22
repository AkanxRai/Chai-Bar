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
      <h2 className="text-center font-brand text-2xl font-bold text-chai-brown">
        Chef&rsquo;s Picks
      </h2>
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {picks.map(({ item, category }) => (
          <div
            key={item.name}
            className="relative flex h-[280px] w-[260px] flex-none snap-start flex-col rounded-xl bg-gradient-to-br from-chai-brown to-[#0D3D1F] p-5 shadow-md transition-all duration-250 hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Badge */}
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-muted-gold/20 px-2.5 py-1 font-body text-xs font-medium text-cream backdrop-blur-sm">
              <Star size={12} className="fill-muted-gold text-muted-gold" />
              Chef&rsquo;s Pick
            </span>

            <p className="font-body text-xs tracking-wide text-cream/60">
              {category.name}
            </p>
            <h3 className="mt-auto font-script text-2xl leading-tight text-cream">
              {item.name}
            </h3>
            {item.description && (
              <p className="mt-2 text-[0.82rem] italic leading-relaxed text-cream/70">
                {item.description}
              </p>
            )}
            <p className="mt-3 font-brand text-lg font-bold text-muted-gold">
              {item.hasSizes ? `From ₹${item.price}` : `₹${item.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
