"use client";

import { useState } from "react";
import { MenuItem, bestsellers, mustTry } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
  compact?: boolean;
}

export function MenuItemCard({ item, compact }: MenuItemCardProps) {
  const [selectedSize, setSelectedSize] = useState<"M" | "L">("M");

  const isBestseller = bestsellers.includes(item.name);
  const isMustTry = mustTry.includes(item.name);

  const displayPrice =
    item.hasSizes && selectedSize === "L" && item.priceL != null
      ? item.priceL
      : item.price;

  // Compact mobile card layout
  if (compact) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-warm-white p-3 shadow-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,85,50,0.12)]">
        {/* Placeholder image */}
        <div
          className="h-20 w-20 flex-none rounded-lg bg-gradient-to-br from-cream to-muted-gold/20"
          aria-hidden="true"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-brand text-sm font-semibold text-charcoal">
            {item.name}
          </span>
          {item.description && (
            <span className="mt-0.5 truncate text-[0.82rem] italic leading-snug text-[#4A7058]">
              {item.description}
            </span>
          )}
          <div className="mt-1 flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                item.diet === "veg" ? "bg-green-600" : "bg-red-600"
              }`}
              aria-hidden="true"
            />
            <span className="sr-only">
              {item.diet === "veg" ? "Vegetarian" : "Non-Vegetarian"}
            </span>
            {isBestseller && (
              <span className="rounded-full bg-[#7CAE68] px-2 py-0.5 text-[0.65rem] font-medium text-white">
                Bestseller
              </span>
            )}
            {isMustTry && !isBestseller && (
              <span className="rounded-full bg-terracotta px-2 py-0.5 text-[0.65rem] font-medium text-white">
                Must Try
              </span>
            )}
            <span className="ml-auto font-brand text-sm font-bold text-chai-brown">
              ₹{displayPrice}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full desktop card layout
  return (
    <div className="flex flex-col rounded-xl bg-warm-white shadow-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,85,50,0.12)]">
      {/* Image placeholder — 16:9 warm bg */}
      <div
        className="relative aspect-video w-full rounded-t-xl bg-gradient-to-br from-cream to-muted-gold/20"
        aria-hidden="true"
      >
        {/* Badge row */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <span
            className={`h-3 w-3 rounded-full border-2 border-white ${
              item.diet === "veg" ? "bg-green-600" : "bg-red-600"
            }`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {item.diet === "veg" ? "Vegetarian" : "Non-Vegetarian"}
          </span>
          {isBestseller && (
            <span className="rounded-full bg-[#7CAE68] px-2.5 py-0.5 text-[0.65rem] font-semibold text-white">
              Bestseller
            </span>
          )}
          {isMustTry && !isBestseller && (
            <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-[0.65rem] font-semibold text-white">
              Must Try
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="font-brand text-[1.1rem] font-semibold text-charcoal">
          {item.name}
        </span>
        {item.description && (
          <p className="mt-1 text-[0.82rem] italic leading-relaxed text-[#4A7058]">
            {item.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between pt-3">
          {/* Size toggle for chai */}
          {item.hasSizes && item.priceL != null ? (
            <div className="flex gap-1" role="group" aria-label="Size selection">
              <button
                onClick={() => setSelectedSize("M")}
                aria-label="Medium size"
                aria-pressed={selectedSize === "M"}
                className={`cursor-pointer rounded-md px-3 py-1 font-body text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  selectedSize === "M"
                    ? "bg-chai-brown text-cream"
                    : "border border-chai-brown/30 text-chai-brown/60"
                }`}
              >
                M ₹{item.price}
              </button>
              <button
                onClick={() => setSelectedSize("L")}
                aria-label="Large size"
                aria-pressed={selectedSize === "L"}
                className={`cursor-pointer rounded-md px-3 py-1 font-body text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  selectedSize === "L"
                    ? "bg-chai-brown text-cream"
                    : "border border-chai-brown/30 text-chai-brown/60"
                }`}
              >
                L ₹{item.priceL}
              </button>
            </div>
          ) : (
            <span className="font-brand text-[1.1rem] font-bold text-chai-brown">
              ₹{item.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
