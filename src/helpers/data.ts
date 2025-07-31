import { Special, Testimonial } from '../interfaces/common';

export const specials: Special[] = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/greek-salad.jpg',
    prepTime: '10 min',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/images/bruchetta.jpg',
    prepTime: '5 min',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: '/images/lemon-dessert.jpg',
    prepTime: '15 min',
    rating: 4.9,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    rating: 5,
    review:
      "The food was absolutely amazing! The Greek salad was fresh and the flavors were incredible. I'll definitely be coming back with my family.",
    image: '/images/customer-maria.jpg',
    location: 'Chicago, IL',
  },
  {
    id: 2,
    name: 'John Thompson',
    rating: 5,
    review:
      'Best Mediterranean restaurant in Chicago! The atmosphere is perfect for a romantic dinner and the staff is so welcoming. Highly recommended!',
    image: '/images/customer-john.jpg',
    location: 'Evanston, IL',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    rating: 4,
    review:
      "Love this place! The lemon dessert is to die for. It really does taste like it came from grandma's kitchen. Great service too!",
    image: '/images/customer-sarah.jpg',
    location: 'Oak Park, IL',
  },
  {
    id: 4,
    name: 'Michael Johnson',
    rating: 5,
    review:
      'Little Lemon has become our go-to spot for special occasions. The food is consistently excellent and the ambiance is just perfect.',
    image: '/images/customer-michael.jpg',
    location: 'Chicago, IL',
  },
];
