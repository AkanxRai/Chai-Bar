"use client";

import { useState } from "react";
import { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [selectedSize, setSelectedSize] = useState<"M" | "L">("M");

  const displayPrice =
    item.hasSizes && selectedSize === "L" && item.priceL != null
      ? item.priceL
      : item.price;

  return (
    <div className="rounded-xl bg-warm-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        {/* Left: name + badge + optional size toggle */}
        <div className="flex flex-col gap-2">
          <span className="font-brand text-lg font-semibold text-chai-brown">
            {item.name}
          </span>

          {/* Diet badge */}
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-full ${
                item.diet === "veg" ? "bg-green-600" : "bg-red-600"
              }`}
            />
            <span className="font-body text-sm text-charcoal">
              {item.diet === "veg" ? "Veg" : "Non-Veg"}
            </span>
          </span>

          {/* M/L size toggle — only for chai specials */}
          {item.hasSizes && (
            <div className="flex gap-1" role="group" aria-label="Size selection">
              <button
                onClick={() => setSelectedSize("M")}
                aria-label="Medium size"
                aria-pressed={selectedSize === "M"}
                className={`cursor-pointer rounded-md px-3 py-1 text-sm font-body font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  selectedSize === "M"
                    ? "bg-terracotta text-warm-white"
                    : "bg-cream/50 text-charcoal/70"
                }`}
              >
                M
              </button>
              <button
                onClick={() => setSelectedSize("L")}
                aria-label="Large size"
                aria-pressed={selectedSize === "L"}
                className={`cursor-pointer rounded-md px-3 py-1 text-sm font-body font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  selectedSize === "L"
                    ? "bg-terracotta text-warm-white"
                    : "bg-cream/50 text-charcoal/70"
                }`}
              >
                L
              </button>
            </div>
          )}
        </div>

        {/* Right: price */}
        <span className="font-brand text-xl font-bold text-chai-brown whitespace-nowrap">
          ₹{displayPrice}
        </span>
      </div>
    </div>
  );
}
