const meals = [
  {
    id: 0,
    name: "Skip Meal",
    recipe: {
      ingredients: ["Nothing"],
      directions: ["Dont eat"],
    },
  },
  {
    id: 1,
    name: "Rice and Veggie Bowl",
    recipe: {
      ingredients: [
        "1/4 cup rice",
        "1 cup water",
        "100 g veggies",
        "1 Ts. sauce",
        "1 shakes parmesean cheese",
        "crushed red pepper",
      ],
      directions: [
        "Microwave rice and water for 12 minutes",
        "Add veggies, microwave for anoter 3 minutes",
        "Add sauce, pepper, and cheese",
      ],
    },
  },
  {
    id: 2,
    name: "Oatmeal",
    recipe: {
      ingredients: ["Oats", "Fruit 40g", "Brown Sugar 10g", "Water"],
      directions: [
        "Mix oats and water. Daddy: 1/2 cup oats, 1 1/8 cup water",
        "Microwave for 2 min. 45 sec.",
        "Stir in brown sugar, then fruit",
      ],
    },
  },
  {
    id: 4,
    name: "Tuna Wrap",
    recipe: {
      ingredients: [
        "Tortilla",
        "Tuna (56g)",
        "Lettuce (20g)",
        "Hummus (18g)",
        "Peas (20g)",
        "Fruit (50g)",
        "Chips (14g)"
      ],
      directions: [
        "Wrap Tuna , Lettuce, Hummas and Peas in Tortilla",
        "Serve with Fruit and Chips"
      ],
    },
  },
  {
    id: 5,
    name: "Salad Wrap",
    recipe: {
      ingredients: [
        "Tortilla",
        "Lettuce (20g)",
        "Hummus (g)",
        "Peas (20g)",
        "Corn (15g)",
        "Fruit (50g)",
        "Chips (14g)"
      ],
      directions: [
        "Wrap Tuna , Lettuce, Hummas and Peas in Tortilla",
        "Serve with Fruit and Chips"
      ],
    },
  },
  {
    id: 6,
    name: "Rice Cakes with Peanut Butter",
    recipe: {
      ingredients: [
        "Rice cake",
        "Peanut butter",
        "Fruit (25g)",
        "Chips (14g)"
      ],
      directions: ["Spread peanut butter on rice cake"],
    },
  },
  {
    id: 10,
    name: "Ramen Soup",
    recipe: {
      ingredients: [
        "Ramen Soup",
        "10g Crackers",
        "1 cup Water",
        "Fruit (15g)",
      ],
      directions: [
        "Microwave for 4:30 minutes",
        "Top with crackers",
        "Serve with fruit"
      ],
    },
  },
  {
    id: 11,
    name: "Pasta and Salad",
    recipe: {
      ingredients: [
        "Spaghetti (50g)",
        "Parmesean Cheese",
        "Garlic",
        "Dill Weed",
        "Lettuce (25g)",
        "Hummus (35g)",
        "Peas (20g)",
        "Stir Fry Veggies (50g)",
        "Croutons (14g)",
        "Chips (14g)"
      ],
      directions: [
        "Microwave pasta for 12 minutes",
        "Strain and season",
        "add parmesean",
        "Serve with Salad and Chips"
      ],
    },
  },
  {
    id: 12,
    name: "Mac & Cheese & Peas and Fruit",
    recipe: {
      ingredients: [
        "50g  Pasta shells",
        "Peas (15g)", "30g Cheese",
        "Fruit (60g)",
      ],
      directions: [
        "Microwave pasta for 12 minutes",
        "Strain",
        "Put cheese and 2tbls water in bowl, microwave for 1 minute",
        "Add pasta and stir",
        "Add peas and stir",
      ],
    },
  },
  {
    id: 13,
    name: "Chilli and Yogurt",
    recipe: {
      ingredients: [
        "Chilli (242g)",
        "Crackers (14g)",
        "Yogurt (50g)",
        "Fruit (90g)",
        "Grapenuts"
      ],
      directions: ["Microwave chilli for 1.5 minutes"],
    },
  },
  {
    id: 14,
    name: "Salad",
    recipe: {
      ingredients: ["lettuce", "peas", "mini peppers", "hummus", "croutons"],
      directions: ["Put in bowl"],
    },
  },
  {
    id: 16,
    name: "Veggie Burgers",
    recipe: {
      ingredients: [
        "2 Veggie Patties",
        "Green Chile",
        "2 Buns",
        "Fruit",
        "Yogurt",
        "Lettuce",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patties for 2:15 minutes",
        "Put on tortilla",
      ],
    },
  },
  {
    id: 17,
    name: "Chimichanga and Salad",
    recipe: {
      ingredients: [
        "1 chimichanga",
        "Fruit",
        "Chips (20 g)",
        "Lettuce (15g)",
        "Hummus (g)",
        "Peas (15g)",
        "Corn (15g)"
      ],
      directions: ["Microwave 2 for 3:45 minutes"],
    },
  },
  {
    id: 19,
    name: "Black Bean Wrap",
    recipe: {
      ingredients: ["2 tortillas", "Fruit", "Chips (20 g)"],
      directions: ["Microwave cheese for 1 minute"],
    },
  },
  {
    id: 20,
    name: "School Lunch",
    recipe: {
      ingredients: ["Various"],
      directions: [],
    },
  },
  {
    id: 21,
    name: "Popcorn",
    recipe: {
      ingredients: ["Popcorn (1 bag)",],
      directions: ["Microwave for 2:20 seconds"],
    },
  },
  {
    id: 22,
    name: "Ellie's Nuggets",
    recipe: {
      ingredients: [
        "Chicken nuggets (10)",
        "Yogurt (activia)",
        "Sauce",
        "Salad (40g)",
        "Popcorn (1 bag)",
      ],
      directions: [
        "Microwave popcorn for 2:20 seconds",
        "Microwave nuggets for 3:30 minutes",
        "Serve with yogurt and salad"
      ],
    },
  },
  {
    id: 23,
    name: "Nuggets and Salad",
    recipe: {
      ingredients: [
        "Chicken nuggets (5)",
        "Sauce",
        "Lettuce (15g)",
        "Hummus (g)",
        "Peas (15g)",
        "Corn (15g)",
        "Popcorn (1 bag)"
      ],
      directions: [
        "Microwave popcorn for 2:20 seconds",
        "Microwave nuggets for 3:30 minutes",
        "Serve with salad"
      ],
    },
  },
  {
    id: 24,
    name: "Ellie's Veggie Burger",
    recipe: {
      ingredients: [
        "1 Griller Veggie Patty",
        "1 Bun",
        "Fruit",
        "Yogurt",
        "Pickle",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patty for 45 seconds, flip and 45 more",
        "Put burger on bun with condiments",
        "Serve with fruit & yogurt, pickle and chips",
      ],
    },
  },
  {
    id: 25,
    name: "Elliot's Veggie Burger",
    recipe: {
      ingredients: [
        "1 Black-bean Veggie Patty",
        "Green Chile",
        "1 Bun",
        "Pickle",
        "Fruit",
        "Yogurt",
        "Lettuce",
        "Chips (20 g)",
      ],
      directions: [
        "Microwave patty for 60 seconds, flip and 60 more",
        "Put burger on bun with green chile and lettuce",
        "Serve with fruit & yogurt, pickle and chips",
      ],
    },
  },
  {
    id: 26,
    name: "Ellie's canned goodness lunch",
    recipe: {
      ingredients: [
        "1 can goodnes",
        "1 bag fruit smiles",
      ],
      directions: [
        "Microwave according to directions",
        "Pack in thermos in insulated bag",
      ],
    },
  },
  {
    id: 27,
    name: "Elliot's Lentil Soup",
    recipe: {
      ingredients: [
        "1 can goodnes",
        "1 bag fruit smiles",
      ],
      directions: [
        "Microwave according to directions",
        "Pack in thermos in insulated bag",
      ],
    },
  },
];

export { meals };