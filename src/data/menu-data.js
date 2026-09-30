/**
 * Full menu for Barrio Fiesta Mexican Grill — Tuscaloosa
 * Prices are editable placeholders based on typical local pricing
 * and the lunch-specials ~$8 note. Update freely.
 *
 * Tip: keep prices as strings so "$8.99" / "MP" / "Market" all work.
 */
export const menuCategories = [
  {
    id: 'lunch',
    name: 'Lunch Specials',
    note: 'Served daily 11 AM – 3 PM. Most specials start around $8.',
    items: [
      { name: 'Two Beef Tacos with Rice & Beans', price: '8.99', desc: 'Classic beef tacos with rice and beans.' },
      { name: 'Beef Enchilada with Rice & Beans', price: '8.99', desc: 'Cheese-topped beef enchilada, rice and beans.' },
      { name: 'Taco Salad', price: '9.49', desc: 'Crispy shell, seasoned beef, fresh toppings.' },
      { name: 'Burrito Supreme', price: '9.49', desc: 'Loaded burrito with all the fixings.' },
      { name: 'Chicken Burrito', price: '9.49', desc: 'Grilled chicken burrito with rice and beans.' },
      { name: 'Chimichanga', price: '9.99', desc: 'Crispy fried burrito, lunch-sized.' },
      { name: 'Lunch Fajitas', price: '11.99', desc: 'Sizzling peppers and onions with your choice of protein.' },
      { name: 'Spicy Burrito', price: '9.49', desc: 'A little heat for your lunch break.' },
    ],
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Chips & Salsa', price: '3.99', desc: 'House salsa with warm chips.' },
      { name: 'Chips & Queso', price: '6.99', desc: 'Creamy cheese dip.' },
      { name: 'Chorizo Dip', price: '8.99', desc: 'Warm cheese dip with chorizo.' },
      { name: 'Guacamole', price: '7.99', desc: 'Fresh avocado, tomato, onion, cilantro and lime.' },
      { name: 'Cheese Dip', price: '6.49', desc: 'Classic melted cheese.' },
      { name: 'Spinach Dip', price: '7.99', desc: 'Creamy spinach cheese dip.' },
      { name: 'Loaded Nacho Starter', price: '9.99', desc: 'Shareable nachos with toppings.' },
    ],
  },
  {
    id: 'nachos',
    name: 'Nachos',
    items: [
      { name: 'Beef Nachos', price: '11.99', desc: 'Crispy chips, seasoned beef, cheese, toppings.' },
      { name: 'Chicken Nachos', price: '11.99', desc: 'Grilled chicken over chips and cheese.' },
      { name: 'Fajita Nachos', price: '13.99', desc: 'Peppers, onions and your choice of protein.' },
      { name: 'Supreme Nachos', price: '13.49', desc: 'Fully loaded — beans, cheese, pico, sour cream and more.' },
    ],
  },
  {
    id: 'soups-salads',
    name: 'Soups & Salads',
    items: [
      { name: 'Chicken Tortilla Soup', price: '6.99', desc: 'Hearty broth with chicken and crisp tortilla strips.' },
      { name: 'House Salad', price: '7.49', desc: 'Fresh greens with house dressing.' },
      { name: 'Taco Salad', price: '11.99', desc: 'Crispy shell salad with your choice of protein.' },
      { name: 'Fajita Salad', price: '13.99', desc: 'Sizzling fajita meat over fresh greens.' },
      { name: 'Guacamole Salad', price: '8.99', desc: 'Fresh greens topped with guacamole.' },
    ],
  },
  {
    id: 'fajitas',
    name: 'Fajita Specials',
    note: 'Served sizzling with peppers, onions, rice, beans and tortillas.',
    items: [
      { name: 'Steak Fajitas', price: '18.99', desc: 'Grilled steak with peppers and onions.' },
      { name: 'Chicken Fajitas', price: '16.99', desc: 'Marinated chicken, peppers and onions.' },
      { name: 'Shrimp Fajitas', price: '18.99', desc: 'Sautéed shrimp with peppers and onions.' },
      { name: 'Texan Fajitas', price: '19.99', desc: 'Steak, chicken and shrimp combination.' },
      { name: 'Fajitas for Two', price: '32.99', desc: 'Shareable platter — choose your proteins.' },
    ],
  },
  {
    id: 'grilled',
    name: 'Grilled Specials',
    items: [
      { name: 'Pork Carnitas', price: '15.99', desc: 'Tender pork with rice, beans, guacamole salad and flour tortillas.' },
      { name: 'Camarón a la Diabla', price: '17.99', desc: 'Shrimp in a spicy devil-style sauce.' },
      { name: 'Chicken Fundido', price: '15.99', desc: 'Grilled chicken with melted cheese.' },
      { name: 'La Papa Loca', price: '14.99', desc: 'Loaded baked potato with Mexican toppings.' },
      { name: 'Carne Asada', price: '18.99', desc: 'Grilled steak with traditional sides.' },
    ],
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    items: [
      { name: 'Cheese Quesadilla', price: '9.99', desc: 'Melted cheese in a grilled tortilla.' },
      { name: 'Chicken Quesadilla', price: '12.99', desc: 'Grilled chicken and cheese.' },
      { name: 'Steak Quesadilla', price: '13.99', desc: 'Steak and melted cheese.' },
      { name: 'Shrimp Quesadilla', price: '14.99', desc: 'Shrimp and cheese.' },
      { name: 'Quesabirria', price: '15.99', desc: 'Marinated braised beef folded into crispy tortillas with melted cheese, served with birria broth for dipping, chopped onions, cilantro and lime.' },
    ],
  },
  {
    id: 'dinner',
    name: 'Dinner Specials',
    items: [
      { name: 'Burrito Mexicano', price: '14.99', desc: 'Pork tenderloin, peppers and onions topped with cheese sauce, lettuce, tomato and avocado.' },
      { name: 'Street Tacos', price: '13.99', desc: 'Choice of steak, grilled chicken, pork, shredded beef, shrimp or chorizo with cilantro, onions, avocado and lime.' },
      { name: 'Tacos al Pastor', price: '13.99', desc: 'Marinated pork with pineapple, onion and cilantro.' },
      { name: 'Fish Tacos', price: '14.99', desc: 'Crispy or grilled fish with fresh toppings.' },
      { name: 'Veracruz Enchiladas', price: '14.99', desc: 'Enchiladas in Veracruz-style sauce.' },
      { name: 'Chicken Enchiladas', price: '13.99', desc: 'Rolled enchiladas with chicken and sauce.' },
      { name: 'Beef Enchiladas', price: '13.99', desc: 'Rolled enchiladas with seasoned beef.' },
      { name: 'Chimichanga Dinner', price: '14.99', desc: 'Crispy burrito with rice and beans.' },
    ],
  },
  {
    id: 'combinations',
    name: 'Combination Plates',
    note: 'Build your plate — served with rice and beans.',
    items: [
      { name: 'Combo #1 — Taco & Enchilada', price: '12.99', desc: 'One taco and one enchilada.' },
      { name: 'Combo #2 — Burrito & Taco', price: '13.49', desc: 'One burrito and one taco.' },
      { name: 'Combo #3 — Enchilada, Taco & Chile Relleno', price: '14.99', desc: 'Three classic favorites.' },
      { name: 'Combo #4 — Two Enchiladas & Taco', price: '13.99', desc: 'A hearty classic plate.' },
      { name: 'Create Your Own Combo', price: '14.99', desc: 'Choose two or three favorites.' },
    ],
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Dishes',
    items: [
      { name: 'Veggie Fajitas', price: '14.99', desc: 'Peppers, onions and grilled vegetables.' },
      { name: 'Cheese Enchiladas', price: '11.99', desc: 'Cheese-filled enchiladas with sauce.' },
      { name: 'Bean Burrito', price: '10.99', desc: 'Refried beans, cheese and toppings.' },
      { name: 'Veggie Quesadilla', price: '11.99', desc: 'Grilled vegetables and melted cheese.' },
      { name: 'Spinach Enchiladas', price: '12.99', desc: 'Spinach-filled enchiladas.' },
    ],
  },
  {
    id: 'alacarte',
    name: 'A La Carte',
    items: [
      { name: 'Beef Taco', price: '3.49', desc: 'Hard or soft shell.' },
      { name: 'Chicken Taco', price: '3.49', desc: 'Hard or soft shell.' },
      { name: 'Bean Burrito', price: '4.99', desc: 'A la carte.' },
      { name: 'Cheese Enchilada', price: '4.49', desc: 'A la carte.' },
      { name: 'Chile Relleno', price: '5.49', desc: 'A la carte.' },
      { name: 'Tostada', price: '4.49', desc: 'A la carte.' },
    ],
  },
  {
    id: 'kids',
    name: 'Kids Plates',
    note: 'For 12 and under. Served with rice or fries.',
    items: [
      { name: 'Kids Taco', price: '6.99', desc: 'One taco with a side.' },
      { name: 'Kids Quesadilla', price: '6.99', desc: 'Cheese quesadilla with a side.' },
      { name: 'Kids Burrito', price: '7.49', desc: 'Small burrito with a side.' },
      { name: 'Kids Chicken Nuggets', price: '6.99', desc: 'With a side.' },
      { name: 'Kids Enchilada', price: '6.99', desc: 'One enchilada with a side.' },
    ],
  },
  {
    id: 'extras',
    name: 'Extras',
    items: [
      { name: 'Side of Rice', price: '2.99', desc: '' },
      { name: 'Side of Beans', price: '2.99', desc: '' },
      { name: 'Sour Cream', price: '1.49', desc: '' },
      { name: 'Guacamole Side', price: '2.99', desc: '' },
      { name: 'Extra Tortillas', price: '1.99', desc: '' },
      { name: 'Jalapeños', price: '1.49', desc: '' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Churros', price: '6.99', desc: 'Crispy, cinnamon-sugar churros.' },
      { name: 'Fried Ice Cream', price: '7.49', desc: 'A classic finish.' },
      { name: 'Flan', price: '5.99', desc: 'Creamy caramel custard.' },
      { name: 'Sopapillas', price: '5.99', desc: 'Honey-drizzled and warm.' },
    ],
  },
  {
    id: 'soft-drinks',
    name: 'Soft Drinks',
    items: [
      { name: 'Fountain Drink', price: '2.99', desc: 'Coke products and more.' },
      { name: 'Iced Tea', price: '2.99', desc: 'Sweet or unsweet.' },
      { name: 'Horchata', price: '3.99', desc: 'Creamy cinnamon rice drink.' },
      { name: 'Jarritos', price: '3.49', desc: 'Assorted flavors.' },
      { name: 'Agua Fresca', price: '3.99', desc: 'Ask for today’s flavors.' },
      { name: 'Coffee', price: '2.49', desc: '' },
    ],
  },
  {
    id: 'margaritas',
    name: 'Margaritas',
    note: 'Classic lime, frozen favorites, flavored margaritas and specialty pours.',
    items: [
      { name: 'House Margarita', price: '8.99', desc: 'Classic lime on the rocks or frozen.' },
      { name: 'Cadillac Margarita', price: '11.99', desc: 'Premium tequila, Grand Marnier float.' },
      { name: 'Flavored Margarita', price: '9.99', desc: 'Strawberry, mango, peach, or ask your server.' },
      { name: 'Skinny Margarita', price: '9.99', desc: 'Lighter pour, same fiesta.' },
      { name: 'Spicy Margarita', price: '10.99', desc: 'Jalapeño kick with fresh lime.' },
      { name: 'Margarita Pitcher', price: '28.99', desc: 'Made for the table.' },
    ],
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
    items: [
      { name: 'Paloma', price: '9.99', desc: 'Tequila and grapefruit refreshment.' },
      { name: 'Ranch Water', price: '8.99', desc: 'Tequila, lime, sparkling water.' },
      { name: 'Mexican Mule', price: '9.99', desc: 'Tequila, ginger beer, lime.' },
      { name: 'Michelada', price: '8.99', desc: 'Spicy, savory, ice-cold.' },
      { name: 'House Sangria', price: '8.99', desc: 'Fruit-forward and easy-drinking.' },
    ],
  },
  {
    id: 'beer',
    name: 'Beer',
    items: [
      { name: 'Domestic Draft', price: '4.99', desc: 'Ask for current pours.' },
      { name: 'Import Draft', price: '5.99', desc: 'Mexican favorites on tap when available.' },
      { name: 'Domestic Bottle', price: '4.49', desc: '' },
      { name: 'Import Bottle', price: '5.49', desc: 'Corona, Modelo, Dos Equis and more.' },
      { name: 'Mexican Beer Bucket', price: '18.99', desc: 'Shareable — ask your server.' },
    ],
  },
];

export const featuredDishes = [
  {
    name: 'Quesabirria',
    desc: 'Marinated braised beef folded into crispy tortillas with melted cheese, served with birria broth for dipping, chopped onions, cilantro and lime.',
    image: '/images/quesabirria.jpg',
    accent: 'coral',
  },
  {
    name: 'Pork Carnitas',
    desc: 'Tender pork served with rice, beans, guacamole salad and flour tortillas.',
    image: '/images/carnitas.jpg',
    accent: 'yellow',
  },
  {
    name: 'Fajitas',
    desc: 'Sizzling steak, chicken, shrimp or Texan-style combinations with peppers and onions.',
    image: '/images/fajitas.jpg',
    accent: 'lime',
  },
  {
    name: 'Chorizo Dip',
    desc: 'Warm cheese dip with chorizo.',
    image: '/images/chorizo-dip.jpg',
    accent: 'turquoise',
  },
  {
    name: 'Street Tacos',
    desc: 'Choice of steak, grilled chicken, pork, shredded beef, shrimp or chorizo with cilantro, onions, avocado and lime.',
    image: '/images/street-tacos.jpg',
    accent: 'coral',
  },
  {
    name: 'Burrito Mexicano',
    desc: 'Pork tenderloin, peppers and onions topped with cheese sauce, lettuce, tomato and avocado.',
    image: '/images/burrito.jpg',
    accent: 'yellow',
  },
];
