export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  foodRating: number;
  serviceRating: number;
  atmosphereRating: number;
  timeAgo: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "A Visitor",
    rating: 5,
    text: "Just discovered this gem — ChaiBar, right next to the Indiranagar CMH Road metro station, and I'm already in love! The location couldn't be more perfect. Once you step in, the vibe instantly hits you — cozy, aesthetic, and full of life. The ambience is just beautiful — perfect for catching up with friends, a casual date, or even some peaceful solo time. And the food? Absolutely on point!",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "4 days ago",
  },
  {
    id: "r2",
    name: "A Visitor",
    rating: 5,
    text: "Went to this place which is in front of Indiranagar metro station, food was really good especially their chicken ramen bowl which was worth more than the price and chicken salad was also exceptionally good.",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "2 days ago",
  },
  {
    id: "r3",
    name: "A Visitor",
    rating: 5,
    text: "Very nice cafe with lovely tea and coffee. The food is tasty, delivery is fast, and the staff are friendly and welcoming. It's a great place with a good ambience to hang out with friends and family. Highly recommended — a must-visit spot!",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "6 days ago",
  },
  {
    id: "r4",
    name: "A Visitor",
    rating: 5,
    text: "Best spot for a quick tea break! The chai is consistently hot, flavorful, and perfectly balanced — not too sweet, just the right amount of ginger. Great value for money and always served with a smile.",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "6 days ago",
  },
  {
    id: "r5",
    name: "A Visitor",
    rating: 5,
    text: "Chai Bar is a new cafe. Best spot for quick bites and refreshments. I tried chai, dry fruits falooda and ramen bowl which was very tasty and unique. Service is very good. Must visit spot and great ambiance.",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "6 days ago",
  },
  {
    id: "r6",
    name: "A Visitor",
    rating: 5,
    text: "Very warm customer service. The coffee tasted great — definitely worth trying. The indoor ambience is really pleasant. Quiet, easy to talk.",
    foodRating: 5,
    serviceRating: 5,
    atmosphereRating: 5,
    timeAgo: "6 days ago",
  },
];
