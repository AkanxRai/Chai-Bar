export type DietType = "veg" | "non-veg";

export interface MenuItem {
  name: string;
  diet: DietType;
  price: number;
  priceL?: number;
  hasSizes: boolean;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "chai-specials",
    name: "Chai Specials",
    items: [
      { name: "Classic Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "The way it was always meant to be." },
      { name: "Masala Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "Ginger, cardamom, and a Tuesday that feels like Friday." },
      { name: "Ginger Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "A little sharp. A little warm. Exactly right." },
      { name: "Cardamom Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "Quiet luxury in a small cup." },
      { name: "Elaichi Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "Close your eyes. You\u2019re somewhere slower." },
      { name: "Lemon Chai", diet: "veg", price: 79, priceL: 129, hasSizes: true, description: "Bright, clean, and quietly surprising." },
    ],
  },
  {
    id: "coffee-cold-coffee",
    name: "Coffee & Cold Coffee",
    items: [
      { name: "Classic Filter Coffee", diet: "veg", price: 70, hasSizes: false, description: "South India in a sip." },
      { name: "Espresso", diet: "veg", price: 179, hasSizes: false, description: "Short, strong, no small talk." },
      { name: "Cappuccino", diet: "veg", price: 189, hasSizes: false, description: "Foam art optional. Comfort guaranteed." },
      { name: "Americano", diet: "veg", price: 189, hasSizes: false, description: "For the minimalists." },
      { name: "Latte", diet: "veg", price: 179, hasSizes: false, description: "Smooth enough to stay for another." },
      { name: "Black Coffee", diet: "veg", price: 189, hasSizes: false, description: "Just coffee. Uninterrupted." },
      { name: "Classic Cold Coffee", diet: "veg", price: 169, hasSizes: false, description: "A cold coffee that doesn\u2019t try too hard." },
      { name: "Caramel Cold Coffee", diet: "veg", price: 179, hasSizes: false, description: "Sweet, but not silly about it." },
      { name: "Chocolate Cold Coffee", diet: "veg", price: 179, hasSizes: false, description: "Dessert pretending to be a drink." },
      { name: "Hazelnut Cold Coffee", diet: "veg", price: 179, hasSizes: false, description: "Coffee shop in a glass." },
      { name: "Matcha Cold Coffee", diet: "veg", price: 189, hasSizes: false, description: "Quietly becoming everyone\u2019s favourite." },
    ],
  },
  {
    id: "thick-shakes-smoothies",
    name: "Thick Shakes & Smoothies",
    items: [
      { name: "Mango Jugalbandi", diet: "veg", price: 169, hasSizes: false, description: "Two flavours that were always meant to meet." },
      { name: "Pistachio Triangle", diet: "veg", price: 179, hasSizes: false, description: "Rich. Nutty. Worth every rupee." },
      { name: "Creamy Vanilla", diet: "veg", price: 149, hasSizes: false, description: "The classic that never apologises." },
      { name: "Choco Banana", diet: "veg", price: 169, hasSizes: false, description: "Comfort food in a glass." },
      { name: "Choco Brownie", diet: "veg", price: 199, hasSizes: false, description: "Brownie. But drinkable. You\u2019re welcome." },
      { name: "Oreo Thick Shake", diet: "veg", price: 199, hasSizes: false, description: "The one everyone orders twice." },
      { name: "Tender Coconut with Guava", diet: "veg", price: 249, hasSizes: false, description: "Bangalore weather, handled." },
      { name: "Apple & Banana Smoothie", diet: "veg", price: 139, hasSizes: false, description: "Healthy enough. Delicious enough." },
      { name: "Mixed Berry Smoothie", diet: "veg", price: 169, hasSizes: false, description: "Bright, tart, and a little bit fancy." },
      { name: "Dry Fruit Smoothie", diet: "veg", price: 179, hasSizes: false, description: "Wholesome, not boring." },
    ],
  },
  {
    id: "ice-tea",
    name: "Ice Tea",
    items: [
      { name: "Lemon Mint", diet: "veg", price: 99, hasSizes: false, description: "Cool, citrusy, and effortless." },
      { name: "Peach", diet: "veg", price: 119, hasSizes: false, description: "Soft sweetness, no rush." },
      { name: "Orange & Basil", diet: "veg", price: 139, hasSizes: false, description: "Unexpected, and you\u2019ll love it." },
    ],
  },
  {
    id: "lassi",
    name: "Lassi",
    items: [
      { name: "Sweet", diet: "veg", price: 90, hasSizes: false, description: "Classic, creamy, and honest." },
      { name: "Mango", diet: "veg", price: 100, hasSizes: false, description: "Summer in every sip." },
      { name: "Dry Fruit", diet: "veg", price: 130, hasSizes: false, description: "Thick, rich, and unapologetically indulgent." },
      { name: "Rose", diet: "veg", price: 90, hasSizes: false, description: "Delicate, floral, quietly lovely." },
      { name: "Kesar Badam", diet: "veg", price: 135, hasSizes: false, description: "The royal treatment, in a glass." },
      { name: "Strawberry", diet: "veg", price: 100, hasSizes: false, description: "Sweet, pink, and always a good idea." },
    ],
  },
  {
    id: "mojito",
    name: "Mojito",
    items: [
      { name: "Virgin Mojito", diet: "veg", price: 159, hasSizes: false, description: "The one that started it all." },
      { name: "Chilli Guava", diet: "veg", price: 169, hasSizes: false, description: "Sweet heat. Unexpected kick." },
      { name: "Blue Lagoon", diet: "veg", price: 159, hasSizes: false, description: "Bold colour, bolder flavour." },
      { name: "Watermelon", diet: "veg", price: 169, hasSizes: false, description: "Fresh, fruity, and deeply refreshing." },
      { name: "Green Apple", diet: "veg", price: 159, hasSizes: false, description: "Crisp, tart, and alive." },
      { name: "Strawberry", diet: "veg", price: 159, hasSizes: false, description: "Berry good. Every single time." },
      { name: "Blueberry", diet: "veg", price: 159, hasSizes: false, description: "Dark, sweet, a little mysterious." },
      { name: "Peach", diet: "veg", price: 169, hasSizes: false, description: "Soft, sunny, and easy." },
    ],
  },
  {
    id: "healthy-drinks",
    name: "Healthy Drinks",
    items: [
      { name: "Beetroot Solid", diet: "veg", price: 79, hasSizes: false, description: "Earthy, vibrant, and good for you." },
      { name: "ABC", diet: "veg", price: 179, hasSizes: false, description: "Apple, beetroot, carrot. The trifecta." },
      { name: "Cucumber Mint Lime", diet: "veg", price: 89, hasSizes: false, description: "Cool, clean, and incredibly fresh." },
      { name: "Cabos", diet: "veg", price: 159, hasSizes: false, description: "Carrot, apple, beetroot, orange. Sunshine bottled." },
    ],
  },
  {
    id: "soda",
    name: "Soda",
    items: [
      { name: "Fresh Lime Soda", diet: "veg", price: 89, hasSizes: false, description: "Sharp, fizzy, classic." },
      { name: "Masala Lime Soda", diet: "veg", price: 99, hasSizes: false, description: "The desi twist that just works." },
      { name: "Masala Coke", diet: "veg", price: 99, hasSizes: false, description: "Street-style, no apologies." },
    ],
  },
  {
    id: "snack-bites",
    name: "Snack Bites",
    items: [
      { name: "Samosa", diet: "veg", price: 59, hasSizes: false, description: "The original. Still undefeated." },
      { name: "Veg Puff", diet: "veg", price: 73, hasSizes: false, description: "Flaky outside. Warm inside. Always." },
      { name: "Egg Puff", diet: "non-veg", price: 80, hasSizes: false, description: "The breakfast you didn\u2019t plan for." },
      { name: "Chicken Puff", diet: "non-veg", price: 110, hasSizes: false, description: "A puff worth pausing for." },
      { name: "Korean Maskabun", diet: "veg", price: 169, hasSizes: false, description: "Soft, pillowy, and dangerously good." },
      { name: "Chicken Nuggets", diet: "non-veg", price: 249, hasSizes: false, description: "Crispy on the outside. Story on the inside." },
      { name: "Classic Salted Fries", diet: "veg", price: 100, hasSizes: false, description: "Simple. Honest. Irresistible." },
      { name: "Peri Peri Fries", diet: "veg", price: 120, hasSizes: false, description: "For the ones who like a little heat." },
      { name: "Cheesy Fries", diet: "veg", price: 159, hasSizes: false, description: "No regrets, only cheese." },
      { name: "Potato Wedges", diet: "veg", price: 148, hasSizes: false, description: "Chunky, crispy, satisfying in every sense." },
      { name: "Crispy Chicken Wings (2 pcs)", diet: "non-veg", price: 183, hasSizes: false, description: "Two is never enough." },
      { name: "Crispy Chicken Strips (2 pcs)", diet: "non-veg", price: 193, hasSizes: false, description: "Crispy. Juicy. The strip that hits different." },
    ],
  },
  {
    id: "omelette",
    name: "Omelette",
    items: [
      { name: "Plain Omelette", diet: "non-veg", price: 119, hasSizes: false, description: "Honest eggs. Nothing to prove." },
      { name: "Masala Omelette", diet: "non-veg", price: 128, hasSizes: false, description: "Spiced up and ready to go." },
      { name: "Spinach & Mushroom Omelette", diet: "veg", price: 141, hasSizes: false, description: "Green, earthy, and filling." },
      { name: "Cheese Omelette", diet: "non-veg", price: 168, hasSizes: false, description: "Melty, golden, worth every bite." },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    items: [
      { name: "Plain Maggi", diet: "veg", price: 169, hasSizes: false, description: "Two minutes? More like twenty of happiness." },
      { name: "Masala Egg Maggi", diet: "non-veg", price: 179, hasSizes: false, description: "The upgrade everyone deserves." },
      { name: "Cheese Chicken Maggi", diet: "non-veg", price: 199, hasSizes: false, description: "Loaded, cheesy, and utterly satisfying." },
    ],
  },
  {
    id: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    items: [
      { name: "Classic Veg Burger", diet: "veg", price: 149, hasSizes: false, description: "Every caf\u00e9 needs a classic. This is ours." },
      { name: "Paneer Tikka Burger", diet: "veg", price: 169, hasSizes: false, description: "Desi flavour, global ambition." },
      { name: "Mexican Veg Burger", diet: "veg", price: 159, hasSizes: false, description: "Bold spices. Bigger bite." },
      { name: "Crispy Chicken Burger", diet: "non-veg", price: 219, hasSizes: false, description: "The crunch you came for." },
      { name: "Chicken Tikka Burger", diet: "non-veg", price: 219, hasSizes: false, description: "Tandoor meets table." },
      { name: "Paneer Tikka Sandwich", diet: "veg", price: 179, hasSizes: false, description: "Street flavour, caf\u00e9 finish." },
      { name: "Chicken Tikka Sandwich", diet: "non-veg", price: 229, hasSizes: false, description: "Spiced. Grilled. Worth the napkins." },
      { name: "Tomato Cheese Sandwich", diet: "veg", price: 189, hasSizes: false, description: "Melted cheese. Perfect afternoon." },
      { name: "Spinach Corn Sandwich", diet: "veg", price: 249, hasSizes: false, description: "Green never tasted this good." },
      { name: "Tomato Cucumber Sandwich", diet: "veg", price: 179, hasSizes: false, description: "Light, fresh, and honestly underrated." },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      { name: "Veg Caesar Salad", diet: "veg", price: 219, hasSizes: false, description: "Crisp, fresh, and full of crunch." },
      { name: "Chicken Caesar Salad", diet: "non-veg", price: 299, hasSizes: false, description: "The classic, done properly." },
      { name: "Cornflakes with Hot Milk", diet: "veg", price: 209, hasSizes: false, description: "Comfort in a bowl." },
      { name: "Oats with Dry Fruits", diet: "veg", price: 249, hasSizes: false, description: "Wholesome start to any day." },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Chicken Clear Soup", diet: "non-veg", price: 159, hasSizes: false, description: "Warm, light, and deeply soothing." },
      { name: "Veg Clear Soup", diet: "veg", price: 139, hasSizes: false, description: "Simple broth, big comfort." },
    ],
  },
  {
    id: "pancakes",
    name: "Pancakes",
    items: [
      { name: "Plain Pancake", diet: "veg", price: 289, hasSizes: false, description: "Fluffy. Honest. Sunday in a plate." },
      { name: "Nutella Pancake", diet: "veg", price: 310, hasSizes: false, description: "You knew this would be your order." },
      { name: "Banana Pancake", diet: "veg", price: 310, hasSizes: false, description: "Sweet, soft, and slightly smug about it." },
    ],
  },
  {
    id: "breakfast-plates",
    name: "Breakfast Plates",
    items: [
      { name: "English Veg", diet: "veg", price: 399, hasSizes: false, description: "A morning that asks nothing of you." },
      { name: "English Non-Veg", diet: "non-veg", price: 449, hasSizes: false, description: "The full spread. Earned." },
      { name: "Mexican Veg", diet: "veg", price: 349, hasSizes: false, description: "Bright, bold, and better than your alarm." },
      { name: "Mexican Non-Veg", diet: "non-veg", price: 359, hasSizes: false, description: "Spiced, loaded, and entirely necessary." },
      { name: "Hummus with Feta Bread", diet: "veg", price: 349, hasSizes: false, description: "Mediterranean morning. Right here." },
    ],
  },
  {
    id: "pasta-ramen",
    name: "Pasta & Ramen",
    items: [
      { name: "Alfredo Pasta Veg", diet: "veg", price: 279, hasSizes: false, description: "Creamy, quiet comfort." },
      { name: "Alfredo Pasta Chicken", diet: "non-veg", price: 329, hasSizes: false, description: "Creamy, with a little more going on." },
      { name: "Arrabiata Pasta Veg", diet: "veg", price: 279, hasSizes: false, description: "Spicy. Saucy. Unapologetic." },
      { name: "Arrabiata Pasta Chicken", diet: "non-veg", price: 329, hasSizes: false, description: "Everything arrabiata, plus protein." },
      { name: "Veg Ramen Bowl", diet: "veg", price: 349, hasSizes: false, description: "Japan meets Indiranagar. Unexpectedly right." },
      { name: "Egg Ramen Bowl", diet: "non-veg", price: 379, hasSizes: false, description: "Soft egg. Deep broth. Perfect bowl." },
      { name: "Chicken Ramen Bowl", diet: "non-veg", price: 479, hasSizes: false, description: "The bowl people come back for." },
    ],
  },
  {
    id: "pastry",
    name: "Pastry",
    items: [
      { name: "DBC Pastry", diet: "veg", price: 149, hasSizes: false, description: "The house favourite. Ask anyone." },
      { name: "Red Velvet Cake", diet: "veg", price: 179, hasSizes: false, description: "Dramatic. Delicious. No notes." },
      { name: "Plain Cheesecake", diet: "veg", price: 189, hasSizes: false, description: "Creamy, dense, and worth saving room for." },
      { name: "Hazelnut Brownie", diet: "veg", price: 169, hasSizes: false, description: "Warm edges. Soft centre. Yours." },
      { name: "Walnut Brownie", diet: "veg", price: 169, hasSizes: false, description: "Crunchy. Rich. Don\u2019t share." },
    ],
  },
  {
    id: "falooda-fruit-salad",
    name: "Falooda & Fruit Salad",
    items: [
      { name: "Rose Falooda", diet: "veg", price: 149, hasSizes: false, description: "Pink and proud of it." },
      { name: "Bombay Falooda", diet: "veg", price: 179, hasSizes: false, description: "Old school, best school." },
      { name: "Dry Fruit Falooda", diet: "veg", price: 189, hasSizes: false, description: "Indulgent, layered, worth every spoon." },
      { name: "Exotic Fruit Salad", diet: "veg", price: 200, hasSizes: false, description: "Fresh, bright, and tropical." },
      { name: "Custard Mixed Fruit Salad", diet: "veg", price: 230, hasSizes: false, description: "Sweet, creamy, nostalgic." },
    ],
  },
  {
    id: "scoop-ice-cream",
    name: "Scoop Ice Cream",
    items: [
      { name: "Vanilla", diet: "veg", price: 69, hasSizes: false, description: "The original. Timeless." },
      { name: "Mango", diet: "veg", price: 69, hasSizes: false, description: "Sunshine, scooped." },
      { name: "Strawberry", diet: "veg", price: 69, hasSizes: false, description: "Sweet, pink, and perfect." },
      { name: "Tender Coconut", diet: "veg", price: 89, hasSizes: false, description: "Tropical, light, and refreshing." },
      { name: "Guava", diet: "veg", price: 79, hasSizes: false, description: "Tangy, sweet, uniquely ours." },
    ],
  },
  {
    id: "sundae",
    name: "Sundae",
    items: [
      { name: "DBC Sundae", diet: "veg", price: 260, hasSizes: false, description: "The sundae that started it all." },
      { name: "Brownie Sundae", diet: "veg", price: 260, hasSizes: false, description: "Hot brownie. Cold scoop. Magic." },
      { name: "Pista Sundae", diet: "veg", price: 230, hasSizes: false, description: "Nutty, sweet, quietly luxurious." },
    ],
  },
  {
    id: "boba",
    name: "Boba",
    items: [
      { name: "Blueberry Boba", diet: "veg", price: 70, hasSizes: false, description: "Pop, chew, repeat." },
      { name: "Strawberry Boba", diet: "veg", price: 70, hasSizes: false, description: "Sweet little surprises." },
      { name: "Mango Boba", diet: "veg", price: 70, hasSizes: false, description: "Sunshine in a cup." },
    ],
  },
];

export const chefsPicks: string[] = [
  "Masala Chai",
  "Chicken Ramen Bowl",
  "Oreo Thick Shake",
  "Brownie Sundae",
];

export const bestsellers: string[] = [
  "Masala Chai",
  "Oreo Thick Shake",
  "Chicken Ramen Bowl",
  "Brownie Sundae",
  "Crispy Chicken Burger",
  "DBC Pastry",
  "Mango Jugalbandi",
  "Cheesy Fries",
];

export const mustTry: string[] = [
  "Classic Chai",
  "Korean Maskabun",
  "Tender Coconut with Guava",
  "Paneer Tikka Burger",
  "Nutella Pancake",
  "DBC Sundae",
];
