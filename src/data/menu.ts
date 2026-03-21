export type DietType = "veg" | "non-veg";

export interface MenuItem {
  name: string;
  diet: DietType;
  price: number; // Single price OR Medium price for chai
  priceL?: number; // Large price (chai specials only)
  hasSizes: boolean; // true only for Chai Specials category
}

export interface MenuCategory {
  id: string; // kebab-case slug
  name: string; // Display name
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "chai-specials",
    name: "Chai Specials",
    items: [
      { name: "Classic Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
      { name: "Masala Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
      { name: "Ginger Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
      { name: "Cardamom Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
      { name: "Elaichi Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
      { name: "Lemon Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true },
    ],
  },
  {
    id: "coffee-cold-coffee",
    name: "Coffee & Cold Coffee",
    items: [
      { name: "Classic Filter Coffee", diet: "veg", price: 70, hasSizes: false },
      { name: "Espresso", diet: "veg", price: 179, hasSizes: false },
      { name: "Cappuccino", diet: "veg", price: 189, hasSizes: false },
      { name: "Americano", diet: "veg", price: 189, hasSizes: false },
      { name: "Latte", diet: "veg", price: 179, hasSizes: false },
      { name: "Black Coffee", diet: "veg", price: 189, hasSizes: false },
      { name: "Classic Cold Coffee", diet: "veg", price: 169, hasSizes: false },
      { name: "Caramel Cold Coffee", diet: "veg", price: 179, hasSizes: false },
      { name: "Chocolate Cold Coffee", diet: "veg", price: 179, hasSizes: false },
      { name: "Hazelnut Cold Coffee", diet: "veg", price: 179, hasSizes: false },
      { name: "Matcha Cold Coffee", diet: "veg", price: 189, hasSizes: false },
    ],
  },
  {
    id: "thick-shakes-smoothies",
    name: "Thick Shakes & Smoothies",
    items: [
      { name: "Mango Jugalbandi", diet: "veg", price: 169, hasSizes: false },
      { name: "Pistachio Triangle", diet: "veg", price: 179, hasSizes: false },
      { name: "Creamy Vanilla", diet: "veg", price: 149, hasSizes: false },
      { name: "Choco Banana", diet: "veg", price: 169, hasSizes: false },
      { name: "Choco Brownie", diet: "veg", price: 199, hasSizes: false },
      { name: "Oreo Thick Shake", diet: "veg", price: 199, hasSizes: false },
      { name: "Tender Coconut with Guava", diet: "veg", price: 249, hasSizes: false },
      { name: "Apple & Banana Smoothie", diet: "veg", price: 139, hasSizes: false },
      { name: "Mixed Berry Smoothie", diet: "veg", price: 169, hasSizes: false },
      { name: "Dry Fruit Smoothie", diet: "veg", price: 179, hasSizes: false },
    ],
  },
  {
    id: "ice-tea",
    name: "Ice Tea",
    items: [
      { name: "Lemon Mint", diet: "veg", price: 99, hasSizes: false },
      { name: "Peach", diet: "veg", price: 119, hasSizes: false },
      { name: "Orange & Basil", diet: "veg", price: 139, hasSizes: false },
    ],
  },
  {
    id: "lassi",
    name: "Lassi",
    items: [
      { name: "Sweet", diet: "veg", price: 90, hasSizes: false },
      { name: "Mango", diet: "veg", price: 100, hasSizes: false },
      { name: "Dry Fruit", diet: "veg", price: 130, hasSizes: false },
      { name: "Rose", diet: "veg", price: 90, hasSizes: false },
      { name: "Kesar Badam", diet: "veg", price: 135, hasSizes: false },
      { name: "Strawberry", diet: "veg", price: 100, hasSizes: false },
    ],
  },
  {
    id: "mojito",
    name: "Mojito",
    items: [
      { name: "Virgin Mojito", diet: "veg", price: 159, hasSizes: false },
      { name: "Chilli Guava", diet: "veg", price: 169, hasSizes: false },
      { name: "Blue Lagoon", diet: "veg", price: 159, hasSizes: false },
      { name: "Watermelon", diet: "veg", price: 169, hasSizes: false },
      { name: "Green Apple", diet: "veg", price: 159, hasSizes: false },
      { name: "Strawberry", diet: "veg", price: 159, hasSizes: false },
      { name: "Blueberry", diet: "veg", price: 159, hasSizes: false },
      { name: "Peach", diet: "veg", price: 169, hasSizes: false },
    ],
  },
  {
    id: "healthy-drinks",
    name: "Healthy Drinks",
    items: [
      { name: "Beetroot Solid", diet: "veg", price: 79, hasSizes: false },
      { name: "ABC", diet: "veg", price: 179, hasSizes: false },
      { name: "Cucumber Mint Lime", diet: "veg", price: 89, hasSizes: false },
      { name: "Cabos", diet: "veg", price: 159, hasSizes: false },
    ],
  },
  {
    id: "soda",
    name: "Soda",
    items: [
      { name: "Fresh Lime Soda", diet: "veg", price: 89, hasSizes: false },
      { name: "Masala Lime Soda", diet: "veg", price: 99, hasSizes: false },
      { name: "Masala Coke", diet: "veg", price: 99, hasSizes: false },
    ],
  },
  {
    id: "snack-bites",
    name: "Snack Bites",
    items: [
      { name: "Samosa", diet: "veg", price: 59, hasSizes: false },
      { name: "Veg Puff", diet: "veg", price: 73, hasSizes: false },
      { name: "Egg Puff", diet: "non-veg", price: 80, hasSizes: false },
      { name: "Chicken Puff", diet: "non-veg", price: 110, hasSizes: false },
      { name: "Korean Maskabun", diet: "veg", price: 169, hasSizes: false },
      { name: "Chicken Nuggets", diet: "non-veg", price: 249, hasSizes: false },
      { name: "Classic Salted Fries", diet: "veg", price: 100, hasSizes: false },
      { name: "Peri Peri Fries", diet: "veg", price: 120, hasSizes: false },
      { name: "Cheesy Fries", diet: "veg", price: 159, hasSizes: false },
      { name: "Potato Wedges", diet: "veg", price: 148, hasSizes: false },
      { name: "Crispy Chicken Wings (2 pcs)", diet: "non-veg", price: 183, hasSizes: false },
      { name: "Crispy Chicken Strips (2 pcs)", diet: "non-veg", price: 193, hasSizes: false },
    ],
  },
  {
    id: "omelette",
    name: "Omelette",
    items: [
      { name: "Plain Omelette", diet: "non-veg", price: 119, hasSizes: false },
      { name: "Masala Omelette", diet: "non-veg", price: 128, hasSizes: false },
      { name: "Spinach & Mushroom Omelette", diet: "veg", price: 141, hasSizes: false },
      { name: "Cheese Omelette", diet: "non-veg", price: 168, hasSizes: false },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    items: [
      { name: "Plain Maggi", diet: "veg", price: 169, hasSizes: false },
      { name: "Masala Egg Maggi", diet: "non-veg", price: 179, hasSizes: false },
      { name: "Cheese Chicken Maggi", diet: "non-veg", price: 199, hasSizes: false },
    ],
  },
  {
    id: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    items: [
      { name: "Classic Veg Burger", diet: "veg", price: 149, hasSizes: false },
      { name: "Paneer Tikka Burger", diet: "veg", price: 169, hasSizes: false },
      { name: "Mexican Veg Burger", diet: "veg", price: 159, hasSizes: false },
      { name: "Crispy Chicken Burger", diet: "non-veg", price: 219, hasSizes: false },
      { name: "Chicken Tikka Burger", diet: "non-veg", price: 219, hasSizes: false },
      { name: "Paneer Tikka Sandwich", diet: "veg", price: 179, hasSizes: false },
      { name: "Chicken Tikka Sandwich", diet: "non-veg", price: 229, hasSizes: false },
      { name: "Tomato Cheese Sandwich", diet: "veg", price: 189, hasSizes: false },
      { name: "Spinach Corn Sandwich", diet: "veg", price: 249, hasSizes: false },
      { name: "Tomato Cucumber Sandwich", diet: "veg", price: 179, hasSizes: false },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      { name: "Veg Caesar Salad", diet: "veg", price: 219, hasSizes: false },
      { name: "Chicken Caesar Salad", diet: "non-veg", price: 299, hasSizes: false },
      { name: "Cornflakes with Hot Milk", diet: "veg", price: 209, hasSizes: false },
      { name: "Oats with Dry Fruits", diet: "veg", price: 249, hasSizes: false },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Chicken Clear Soup", diet: "non-veg", price: 159, hasSizes: false },
      { name: "Veg Clear Soup", diet: "veg", price: 139, hasSizes: false },
    ],
  },
  {
    id: "pancakes",
    name: "Pancakes",
    items: [
      { name: "Plain Pancake", diet: "veg", price: 289, hasSizes: false },
      { name: "Nutella Pancake", diet: "veg", price: 310, hasSizes: false },
      { name: "Banana Pancake", diet: "veg", price: 310, hasSizes: false },
    ],
  },
  {
    id: "breakfast-plates",
    name: "Breakfast Plates",
    items: [
      { name: "English Veg", diet: "veg", price: 399, hasSizes: false },
      { name: "English Non-Veg", diet: "non-veg", price: 449, hasSizes: false },
      { name: "Mexican Veg", diet: "veg", price: 349, hasSizes: false },
      { name: "Mexican Non-Veg", diet: "non-veg", price: 359, hasSizes: false },
      { name: "Hummus with Feta Bread", diet: "veg", price: 349, hasSizes: false },
    ],
  },
  {
    id: "pasta-ramen",
    name: "Pasta & Ramen",
    items: [
      { name: "Alfredo Pasta Veg", diet: "veg", price: 279, hasSizes: false },
      { name: "Alfredo Pasta Chicken", diet: "non-veg", price: 329, hasSizes: false },
      { name: "Arrabiata Pasta Veg", diet: "veg", price: 279, hasSizes: false },
      { name: "Arrabiata Pasta Chicken", diet: "non-veg", price: 329, hasSizes: false },
      { name: "Veg Ramen Bowl", diet: "veg", price: 349, hasSizes: false },
      { name: "Egg Ramen Bowl", diet: "non-veg", price: 379, hasSizes: false },
      { name: "Chicken Ramen Bowl", diet: "non-veg", price: 479, hasSizes: false },
    ],
  },
  {
    id: "pastry",
    name: "Pastry",
    items: [
      { name: "DBC Pastry", diet: "veg", price: 149, hasSizes: false },
      { name: "Red Velvet Cake", diet: "veg", price: 179, hasSizes: false },
      { name: "Plain Cheesecake", diet: "veg", price: 189, hasSizes: false },
      { name: "Hazelnut Brownie", diet: "veg", price: 169, hasSizes: false },
      { name: "Walnut Brownie", diet: "veg", price: 169, hasSizes: false },
    ],
  },
  {
    id: "falooda-fruit-salad",
    name: "Falooda & Fruit Salad",
    items: [
      { name: "Rose Falooda", diet: "veg", price: 149, hasSizes: false },
      { name: "Bombay Falooda", diet: "veg", price: 179, hasSizes: false },
      { name: "Dry Fruit Falooda", diet: "veg", price: 189, hasSizes: false },
      { name: "Exotic Fruit Salad", diet: "veg", price: 200, hasSizes: false },
      { name: "Custard Mixed Fruit Salad", diet: "veg", price: 230, hasSizes: false },
    ],
  },
  {
    id: "scoop-ice-cream",
    name: "Scoop Ice Cream",
    items: [
      { name: "Vanilla", diet: "veg", price: 69, hasSizes: false },
      { name: "Mango", diet: "veg", price: 69, hasSizes: false },
      { name: "Strawberry", diet: "veg", price: 69, hasSizes: false },
      { name: "Tender Coconut", diet: "veg", price: 89, hasSizes: false },
      { name: "Guava", diet: "veg", price: 79, hasSizes: false },
    ],
  },
  {
    id: "sundae",
    name: "Sundae",
    items: [
      { name: "DBC Sundae", diet: "veg", price: 260, hasSizes: false },
      { name: "Brownie Sundae", diet: "veg", price: 260, hasSizes: false },
      { name: "Pista Sundae", diet: "veg", price: 230, hasSizes: false },
    ],
  },
  {
    id: "boba",
    name: "Boba",
    items: [
      { name: "Blueberry Boba", diet: "veg", price: 70, hasSizes: false },
      { name: "Strawberry Boba", diet: "veg", price: 70, hasSizes: false },
      { name: "Mango Boba", diet: "veg", price: 70, hasSizes: false },
    ],
  },
] as const satisfies MenuCategory[];

export const chefsPicks: string[] = [
  "Masala Chai",
  "Chicken Ramen Bowl",
  "Oreo Thick Shake",
  "Brownie Sundae",
];

export const bestsellers: string[] = [
  "Classic Chai",
  "Masala Chai",
  "Chicken Ramen Bowl",
  "Oreo Thick Shake",
  "Crispy Chicken Burger",
  "Brownie Sundae",
  "Hazelnut Brownie",
  "Classic Cold Coffee",
];
